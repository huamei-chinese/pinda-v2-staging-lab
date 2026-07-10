import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { WebSocket, WebSocketServer } from 'ws';

type RealtimeClientMessage = {
  type?: string;
  referenceText?: string;
  pinyin?: string;
  audio?: string;
};

type RealtimeScore = {
  provider: string;
  assessmentMode: string;
  recognizedText: string;
  score: number;
  accuracyScore: number;
  fluencyScore: number;
  completenessScore: number;
  feedback: string;
  mistakes: string[];
  words: unknown[];
  charResults: Array<{
    char: string;
    correct: boolean;
    errorType: string;
    accuracyScore: number;
  }>;
};

@Injectable()
export class RealtimePronunciationService implements OnModuleInit {
  private readonly logger = new Logger(RealtimePronunciationService.name);
  private server?: WebSocketServer;

  constructor(private readonly adapterHost: HttpAdapterHost) {}

  onModuleInit() {
    const httpServer = this.adapterHost.httpAdapter?.getHttpServer?.();
    if (!httpServer || this.server) return;

    this.server = new WebSocketServer({ noServer: true });
    httpServer.on('upgrade', (request: any, socket: any, head: Buffer) => {
      const pathname = new URL(request.url || '/', 'http://localhost').pathname;
      if (pathname !== '/api/listening/realtime-pronunciation') return;
      this.server?.handleUpgrade(request, socket, head, (client) => {
        this.server?.emit('connection', client, request);
      });
    });
    this.server.on('connection', (client) => this.handleClient(client));
  }

  private handleClient(client: WebSocket) {
    let referenceText = '';
    let pinyin = '';
    let transcript = '';
    let openai: WebSocket | null = null;
    let openaiReady = false;
    const pendingAudio: string[] = [];

    const sendClient = (payload: Record<string, unknown>) => {
      if (client.readyState === WebSocket.OPEN) client.send(JSON.stringify(payload));
    };

    const closeOpenAi = () => {
      if (openai && openai.readyState === WebSocket.OPEN) {
        openai.close();
      }
      openai = null;
      openaiReady = false;
    };

    const sendToOpenAi = (payload: Record<string, unknown>) => {
      if (!openai || openai.readyState !== WebSocket.OPEN || !openaiReady) return false;
      openai.send(JSON.stringify(payload));
      return true;
    };

    const connectOpenAi = () => {
      if (openai || !process.env.OPENAI_API_KEY) {
        if (!process.env.OPENAI_API_KEY) {
          sendClient({ type: 'error', error: 'OPENAI_API_KEY chưa được cấu hình.' });
        }
        return;
      }

      const model = process.env.OPENAI_REALTIME_TRANSCRIBE_MODEL || 'gpt-realtime-whisper';
      openai = new WebSocket(`wss://api.openai.com/v1/realtime?model=${encodeURIComponent(model)}`, {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'OpenAI-Safety-Identifier': 'huamei-pronunciation',
        },
      });

      openai.on('open', () => {
        openaiReady = true;
        sendToOpenAi({
          type: 'session.update',
          session: {
            type: 'transcription',
            audio: {
              input: {
                format: { type: 'audio/pcm', rate: 24000 },
                transcription: {
                  model,
                  language: process.env.OPENAI_TRANSCRIBE_LANGUAGE || 'zh',
                  delay: process.env.OPENAI_REALTIME_TRANSCRIBE_DELAY || 'minimal',
                },
                turn_detection: null,
              },
            },
          },
        });
        while (pendingAudio.length) {
          sendToOpenAi({ type: 'input_audio_buffer.append', audio: pendingAudio.shift() });
        }
        sendClient({ type: 'ready' });
      });

      openai.on('message', (raw) => {
        const event = this.parseJson(raw.toString());
        if (!event) return;
        if (event.type === 'conversation.item.input_audio_transcription.delta') {
          transcript += String(event.delta || '');
          sendClient({ type: 'partial', ...this.buildScore(referenceText, transcript, false) });
        }
        if (event.type === 'conversation.item.input_audio_transcription.completed') {
          transcript = String(event.transcript || transcript).trim();
          sendClient({ type: 'final', ...this.buildScore(referenceText, transcript, true) });
        }
        if (event.type === 'error') {
          sendClient({ type: 'error', error: event.error?.message || 'Realtime transcription failed.' });
        }
      });

      openai.on('error', (error) => {
        this.logger.warn(`OpenAI realtime socket error: ${error.message}`);
        sendClient({ type: 'error', error: 'Không kết nối được OpenAI realtime STT.' });
      });
      openai.on('close', () => {
        openai = null;
        openaiReady = false;
      });
    };

    client.on('message', (raw) => {
      const message = this.parseJson(raw.toString()) as RealtimeClientMessage | null;
      if (!message) return;
      if (message.type === 'start') {
        referenceText = String(message.referenceText || '').trim();
        pinyin = String(message.pinyin || '').trim();
        transcript = '';
        connectOpenAi();
        return;
      }
      if (message.type === 'audio' && message.audio) {
        if (!openaiReady) pendingAudio.push(message.audio);
        else sendToOpenAi({ type: 'input_audio_buffer.append', audio: message.audio });
        return;
      }
      if (message.type === 'commit') {
        sendToOpenAi({ type: 'input_audio_buffer.commit' });
        sendClient({ type: 'committed', ...this.buildScore(referenceText, transcript, false) });
        return;
      }
      if (message.type === 'stop') {
        closeOpenAi();
        sendClient({ type: 'final', ...this.buildScore(referenceText, transcript, true) });
      }
    });

    client.on('close', closeOpenAi);
    client.on('error', closeOpenAi);
  }

  private parseJson(value: string) {
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  }

  private normalizeHanzi(value: string) {
    return String(value || '').replace(/[。？！、，,.!?\s]/g, '');
  }

  private compare(referenceText: string, recognizedText: string) {
    const targetChars = Array.from(this.normalizeHanzi(referenceText));
    const spokenChars = Array.from(this.normalizeHanzi(recognizedText));
    const rows = targetChars.length + 1;
    const cols = spokenChars.length + 1;
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let i = targetChars.length - 1; i >= 0; i -= 1) {
      for (let j = spokenChars.length - 1; j >= 0; j -= 1) {
        dp[i][j] = targetChars[i] === spokenChars[j]
          ? dp[i + 1][j + 1] + 1
          : Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }

    const matched = new Set<number>();
    let i = 0;
    let j = 0;
    while (i < targetChars.length && j < spokenChars.length) {
      if (targetChars[i] === spokenChars[j]) {
        matched.add(i);
        i += 1;
        j += 1;
      } else if (dp[i + 1][j] >= dp[i][j + 1]) {
        i += 1;
      } else {
        j += 1;
      }
    }

    return {
      score: targetChars.length ? Math.round((matched.size / targetChars.length) * 100) : 0,
      charResults: targetChars.map((char, index) => ({
        char,
        correct: matched.has(index),
        errorType: matched.has(index) ? 'None' : 'Mismatch',
        accuracyScore: matched.has(index) ? 100 : 0,
      })),
    };
  }

  private buildScore(referenceText: string, recognizedText: string, final: boolean): RealtimeScore & { final: boolean; referenceText: string } {
    const comparison = this.compare(referenceText, recognizedText);
    const score = comparison.score;
    return {
      provider: 'openai',
      assessmentMode: 'realtime_stt_compare',
      recognizedText,
      referenceText,
      final,
      score,
      accuracyScore: score,
      fluencyScore: score,
      completenessScore: score,
      feedback: final ? this.feedback(score, recognizedText) : 'Đang nhận diện giọng đọc...',
      mistakes: final ? this.mistakes(score) : [],
      words: [],
      charResults: comparison.charResults,
    };
  }

  private feedback(score: number, recognizedText: string) {
    if (!recognizedText) return 'Chưa nhận diện được giọng nói. Hãy thử nói rõ và gần micro hơn.';
    if (score >= 90) return 'Bạn nói rất sát câu gốc.';
    if (score >= 70) return 'Bạn nói khá đúng, còn một vài chữ chưa khớp với câu gốc.';
    if (score >= 40) return 'Bạn nói đúng một phần câu, cần luyện lại các chữ bị thiếu hoặc sai.';
    return 'Câu nói khác khá nhiều so với câu gốc. Hãy nghe lại và nói chậm hơn.';
  }

  private mistakes(score: number) {
    if (score >= 90) return [];
    if (score >= 70) return ['Một vài chữ chưa khớp với câu gốc'];
    if (score >= 40) return ['Thiếu hoặc sai nhiều chữ trong câu gốc'];
    return ['Câu nhận diện khác nhiều so với câu gốc'];
  }
}

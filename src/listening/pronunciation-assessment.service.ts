import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import * as net from 'net';
import * as tls from 'tls';

type PronunciationBody = {
  referenceText?: string;
  pinyin?: string;
  audioBase64?: string;
  mimeType?: string;
};

type CharResult = {
  char: string;
  correct: boolean;
  errorType: string;
  accuracyScore?: number | null;
};

type FallbackResult = {
  score: number;
  charResults: CharResult[];
};

type OpenAiPronunciationScore = {
  score?: number;
  accuracyScore?: number;
  fluencyScore?: number;
  completenessScore?: number;
  feedback?: string;
  mistakes?: string[];
};

type IflytekIseAuth = {
  protocol: string;
  host: string;
  pathname: string;
  url: string;
};

type IflytekHandshakeResponse = {
  statusCode: number;
  statusText: string;
  body: string;
};

@Injectable()
export class PronunciationAssessmentService {
  async assess(body: PronunciationBody) {
    const provider = this.speechAssessmentProvider();
    if (!provider) {
      throw new HttpException({
        error: 'Pronunciation assessment chua duoc cau hinh.',
        code: 'speech_not_configured',
      }, HttpStatus.SERVICE_UNAVAILABLE);
    }

    const referenceText = this.repairUtf8Mojibake(String(body.referenceText || '')).trim();
    const audioBase64 = String(body.audioBase64 || '');
    if (!referenceText || !audioBase64) {
      throw new HttpException('Thieu cau goc hoac audio ghi am.', HttpStatus.BAD_REQUEST);
    }

    const audioBuffer = Buffer.from(audioBase64, 'base64');
    if (!audioBuffer.length) {
      throw new HttpException('Audio ghi am khong hop le.', HttpStatus.BAD_REQUEST);
    }
    if (audioBuffer.length > 8 * 1024 * 1024) {
      throw new HttpException('Audio ghi am qua lon.', HttpStatus.PAYLOAD_TOO_LARGE);
    }

    try {
      const result = provider === 'openai'
        ? await this.assessWithOpenAi(referenceText, audioBuffer, String(body.mimeType || ''), String(body.pinyin || ''))
        : await this.assessWithIflytek(referenceText, audioBuffer);
      return { ...result, ...this.assessToneAndIntonation(audioBuffer, String(body.pinyin || '')), referenceText };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Khong cham duoc phat am.';
      const details = this.errorDetails(error);
      console.error('Pronunciation assessment failed', { provider, message, details });
      throw new HttpException({
        error: message,
        code: 'speech_assessment_failed',
        provider,
        details,
      }, HttpStatus.BAD_GATEWAY);
    }
  }

  private errorDetails(error: unknown) {
    if (!error || typeof error !== 'object') return undefined;
    const value = error as Record<string, unknown>;
    const details: Record<string, unknown> = {};
    for (const key of ['providerCode', 'providerMessage', 'providerSid', 'providerDataStatus']) {
      if (value[key] !== undefined) details[key] = value[key];
    }
    return Object.keys(details).length ? details : undefined;
  }

  private speechAssessmentProvider() {
    if (process.env.OPENAI_API_KEY) return 'openai';
    const hasIflytek = Boolean(process.env.IFLYTEK_APP_ID && process.env.IFLYTEK_API_KEY && process.env.IFLYTEK_API_SECRET);
    return hasIflytek ? 'iflytek' : '';
  }

  private clampScore(value: unknown, fallback = 0) {
    const score = Number(value);
    if (!Number.isFinite(score)) return fallback;
    return Math.max(0, Math.min(100, Math.round(score)));
  }

  private audioFileName(mimeType: string) {
    if (/wav/i.test(mimeType)) return 'recording.wav';
    if (/mpeg|mp3/i.test(mimeType)) return 'recording.mp3';
    if (/mp4|m4a/i.test(mimeType)) return 'recording.m4a';
    if (/ogg/i.test(mimeType)) return 'recording.ogg';
    if (/webm/i.test(mimeType)) return 'recording.webm';
    return 'recording.wav';
  }

  private openAiHeaders(json = true) {
    const headers: Record<string, string> = {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY || ''}`,
    };
    if (json) headers['Content-Type'] = 'application/json';
    return headers;
  }

  private async openAiJson(url: string, init: RequestInit) {
    const response = await fetch(url, init);
    const text = await response.text();
    let data: any = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = { raw: text };
    }
    if (!response.ok) {
      const message = data?.error?.message || data?.message || `OpenAI request failed (${response.status})`;
      throw this.providerError(message, {
        providerCode: response.status,
        providerMessage: message,
      });
    }
    return data;
  }

  private async transcribeWithOpenAi(audioBuffer: Buffer, mimeType: string) {
    const formData = new FormData();
    const audioBytes = new Uint8Array(audioBuffer.length);
    audioBytes.set(audioBuffer);
    const audioBlob = new Blob([audioBytes], { type: mimeType || 'audio/wav' });
    formData.append('file', audioBlob, this.audioFileName(mimeType));
    formData.append('model', process.env.OPENAI_TRANSCRIBE_MODEL || 'gpt-4o-mini-transcribe');
    formData.append('language', process.env.OPENAI_TRANSCRIBE_LANGUAGE || 'zh');
    formData.append('response_format', 'text');

    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: this.openAiHeaders(false),
      body: formData,
    });
    const text = await response.text();
    if (!response.ok) {
      let data: any = null;
      try {
        data = text ? JSON.parse(text) : null;
      } catch {
        data = { raw: text };
      }
      const message = data?.error?.message || data?.message || `OpenAI request failed (${response.status})`;
      throw this.providerError(message, {
        providerCode: response.status,
        providerMessage: message,
      });
    }
    return text.trim();
  }

  private responseOutputText(data: any) {
    if (typeof data?.output_text === 'string') return data.output_text;
    const pieces: string[] = [];
    for (const output of data?.output || []) {
      for (const content of output?.content || []) {
        if (typeof content?.text === 'string') pieces.push(content.text);
      }
    }
    return pieces.join('\n').trim();
  }

  private parseOpenAiScore(data: any): OpenAiPronunciationScore {
    const text = this.responseOutputText(data);
    if (!text) return {};
    try {
      return JSON.parse(text);
    } catch {
      const match = text.match(/\{[\s\S]*\}/);
      if (!match) return {};
      try {
        return JSON.parse(match[0]);
      } catch {
        return {};
      }
    }
  }

  private async scoreWithOpenAi(referenceText: string, recognizedText: string, pinyin: string) {
    const schema = {
      type: 'object',
      additionalProperties: false,
      properties: {
        score: { type: 'number', minimum: 0, maximum: 100 },
        accuracyScore: { type: 'number', minimum: 0, maximum: 100 },
        fluencyScore: { type: 'number', minimum: 0, maximum: 100 },
        completenessScore: { type: 'number', minimum: 0, maximum: 100 },
        feedback: { type: 'string' },
        mistakes: {
          type: 'array',
          items: { type: 'string' },
        },
      },
      required: ['score', 'accuracyScore', 'fluencyScore', 'completenessScore', 'feedback', 'mistakes'],
    };

    const data = await this.openAiJson('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: this.openAiHeaders(),
      body: JSON.stringify({
        model: process.env.OPENAI_ASSESSMENT_MODEL || 'gpt-4.1-mini',
        input: [
          {
            role: 'system',
            content: 'You grade Mandarin sentence pronunciation from a speech transcript. Return strict JSON only. Be fair: minor punctuation or spacing differences should not hurt the score. Penalize missing, extra, or wrong Chinese characters. Use Vietnamese feedback.',
          },
          {
            role: 'user',
            content: JSON.stringify({
              referenceText,
              referencePinyin: pinyin,
              recognizedText,
              rubric: {
                score: 'overall pronunciation score from 0 to 100',
                accuracyScore: 'how closely recognized Chinese text matches the reference',
                fluencyScore: 'estimated fluency from transcript completeness and naturalness',
                completenessScore: 'how complete the spoken sentence is',
              },
            }),
          },
        ],
        text: {
          format: {
            type: 'json_schema',
            name: 'pronunciation_assessment',
            strict: true,
            schema,
          },
        },
      }),
    });
    return this.parseOpenAiScore(data);
  }

  private async assessWithOpenAi(referenceText: string, audioBuffer: Buffer, mimeType: string, pinyin: string) {
    const recognizedText = await this.transcribeWithOpenAi(audioBuffer, mimeType);
    const fallback = this.comparePronunciationFallback(referenceText, recognizedText);
    const score = this.clampScore(fallback.score);
    const accuracyScore = score;
    const fluencyScore = score;
    const completenessScore = score;
    const charResults = fallback.charResults.map((item) => ({
      ...item,
      errorType: item.correct ? 'None' : 'Mismatch',
      accuracyScore: item.correct ? 100 : 0,
    }));

    return {
      provider: 'openai',
      assessmentMode: 'stt_compare',
      recognizedText,
      score,
      accuracyScore,
      fluencyScore,
      completenessScore,
      feedback: this.fastCompareFeedback(score, recognizedText),
      mistakes: this.fastCompareMistakes(score),
      words: [],
      charResults,
    };
  }

  private fastCompareFeedback(score: number, recognizedText: string) {
    if (!recognizedText) return 'Chưa nhận diện được giọng nói. Hãy thử nói rõ và gần micro hơn.';
    if (score >= 90) return 'Bạn nói rất sát câu gốc.';
    if (score >= 70) return 'Bạn nói khá đúng, còn một vài chữ chưa khớp với câu gốc.';
    if (score >= 40) return 'Bạn nói đúng một phần câu, cần luyện lại các chữ bị thiếu hoặc sai.';
    return 'Câu nói khác khá nhiều so với câu gốc. Hãy nghe lại và nói chậm hơn.';
  }

  private fastCompareMistakes(score: number) {
    if (score >= 90) return [];
    if (score >= 70) return ['Một vài chữ chưa khớp với câu gốc'];
    if (score >= 40) return ['Thiếu hoặc sai nhiều chữ trong câu gốc'];
    return ['Câu nhận diện khác nhiều so với câu gốc'];
  }

  private normalizeHanzi(value: string) {
    return String(value || '').replace(/[。？！、，,.!?\s]/g, '');
  }

  private repairMojibake(value: string) {
    const text = String(value || '');
    if (!/[ÃÂÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]/.test(text)) return text;
    const cp1252: Record<number, number> = {
      0x20AC: 0x80, 0x201A: 0x82, 0x0192: 0x83, 0x201E: 0x84, 0x2026: 0x85, 0x2020: 0x86,
      0x2021: 0x87, 0x02C6: 0x88, 0x2030: 0x89, 0x0160: 0x8A, 0x2039: 0x8B, 0x0152: 0x8C,
      0x017D: 0x8E, 0x2018: 0x91, 0x2019: 0x92, 0x201C: 0x93, 0x201D: 0x94, 0x2022: 0x95,
      0x2013: 0x96, 0x2014: 0x97, 0x02DC: 0x98, 0x2122: 0x99, 0x0161: 0x9A, 0x203A: 0x9B,
      0x0153: 0x9C, 0x017E: 0x9E, 0x0178: 0x9F,
    };
    try {
      const bytes = Array.from(text, (char) => {
        const code = char.codePointAt(0) || 0;
        return cp1252[code] ?? (code <= 255 ? code : 0x3F);
      });
      const repaired = Buffer.from(bytes).toString('utf8');
      return repaired.includes('�') ? text : repaired;
    } catch {
      return text;
    }
  }

  private comparePronunciationFallback(referenceText: string, recognizedText: string): FallbackResult {
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
      })),
    };
  }

  private repairUtf8Mojibake(value: string) {
    const text = String(value || '');
    if (!/[\u00C0-\u00FF\u0100-\u017F\u0192\u02C6\u02DC\u2013-\u201E\u2020-\u2026\u2030\u2039-\u203A\u20AC\u2122]/.test(text)) return text;
    const cp1252: Record<number, number> = {
      0x20AC: 0x80, 0x201A: 0x82, 0x0192: 0x83, 0x201E: 0x84, 0x2026: 0x85, 0x2020: 0x86,
      0x2021: 0x87, 0x02C6: 0x88, 0x2030: 0x89, 0x0160: 0x8A, 0x2039: 0x8B, 0x0152: 0x8C,
      0x017D: 0x8E, 0x2018: 0x91, 0x2019: 0x92, 0x201C: 0x93, 0x201D: 0x94, 0x2022: 0x95,
      0x2013: 0x96, 0x2014: 0x97, 0x02DC: 0x98, 0x2122: 0x99, 0x0161: 0x9A, 0x203A: 0x9B,
      0x0153: 0x9C, 0x017E: 0x9E, 0x0178: 0x9F,
    };
    try {
      const bytes = Array.from(text, (char) => {
        const code = char.codePointAt(0) || 0;
        return cp1252[code] ?? (code <= 255 ? code : 0x3F);
      });
      const repaired = Buffer.from(bytes).toString('utf8');
      return repaired.includes('\uFFFD') ? text : repaired;
    } catch {
      return text;
    }
  }

  private pinyinTones(pinyin: string) {
    const toneMarks: Record<string, number> = {
      ā: 1, á: 2, ǎ: 3, à: 4, ē: 1, é: 2, ě: 3, è: 4, ī: 1, í: 2, ǐ: 3, ì: 4,
      ō: 1, ó: 2, ǒ: 3, ò: 4, ū: 1, ú: 2, ǔ: 3, ù: 4, ǖ: 1, ǘ: 2, ǚ: 3, ǜ: 4,
      Ā: 1, Á: 2, Ǎ: 3, À: 4, Ē: 1, É: 2, Ě: 3, È: 4, Ī: 1, Í: 2, Ǐ: 3, Ì: 4,
      Ō: 1, Ó: 2, Ǒ: 3, Ò: 4, Ū: 1, Ú: 2, Ǔ: 3, Ù: 4, Ǖ: 1, Ǘ: 2, Ǚ: 3, Ǜ: 4,
    };
    return String(pinyin || '').split(/[\s,，。！？、]+/).map((token) => {
      const numeric = token.match(/[1-5]/)?.[0];
      if (numeric) return Number(numeric) === 5 ? 0 : Number(numeric);
      for (const char of token) {
        if (toneMarks[char]) return toneMarks[char];
      }
      return 0;
    }).filter((tone) => tone >= 0);
  }

  private wavPcmSamples(audioBuffer: Buffer) {
    if (audioBuffer.subarray(0, 4).toString('ascii') !== 'RIFF') return null;
    let offset = 12;
    let sampleRate = 16000;
    let bitsPerSample = 16;
    let channels = 1;
    let data: Buffer | null = null;
    while (offset + 8 <= audioBuffer.length) {
      const chunkId = audioBuffer.subarray(offset, offset + 4).toString('ascii');
      const chunkSize = audioBuffer.readUInt32LE(offset + 4);
      const dataStart = offset + 8;
      if (chunkId === 'fmt ') {
        channels = audioBuffer.readUInt16LE(dataStart + 2) || 1;
        sampleRate = audioBuffer.readUInt32LE(dataStart + 4) || sampleRate;
        bitsPerSample = audioBuffer.readUInt16LE(dataStart + 14) || bitsPerSample;
      }
      if (chunkId === 'data') data = audioBuffer.subarray(dataStart, dataStart + chunkSize);
      offset = dataStart + chunkSize + (chunkSize % 2);
    }
    if (!data || bitsPerSample !== 16) return null;
    const sampleCount = Math.floor(data.length / 2 / channels);
    const samples = new Float32Array(sampleCount);
    for (let index = 0; index < sampleCount; index += 1) {
      samples[index] = data.readInt16LE(index * channels * 2) / 32768;
    }
    return { samples, sampleRate };
  }

  private estimatePitch(frame: Float32Array, sampleRate: number) {
    let energy = 0;
    for (const sample of frame) energy += sample * sample;
    if (energy / frame.length < 0.0004) return null;
    const minLag = Math.floor(sampleRate / 450);
    const maxLag = Math.floor(sampleRate / 75);
    let bestLag = 0;
    let best = 0;
    for (let lag = minLag; lag <= maxLag; lag += 1) {
      let corr = 0;
      let normA = 0;
      let normB = 0;
      for (let index = 0; index + lag < frame.length; index += 1) {
        const a = frame[index];
        const b = frame[index + lag];
        corr += a * b;
        normA += a * a;
        normB += b * b;
      }
      const score = corr / Math.sqrt((normA || 1) * (normB || 1));
      if (score > best) {
        best = score;
        bestLag = lag;
      }
    }
    return best > 0.35 && bestLag ? sampleRate / bestLag : null;
  }

  private pitchContour(audioBuffer: Buffer) {
    const wav = this.wavPcmSamples(audioBuffer);
    if (!wav) return [];
    const frameSize = Math.round(wav.sampleRate * 0.04);
    const hopSize = Math.round(wav.sampleRate * 0.02);
    const contour: number[] = [];
    for (let start = 0; start + frameSize <= wav.samples.length; start += hopSize) {
      const pitch = this.estimatePitch(wav.samples.subarray(start, start + frameSize), wav.sampleRate);
      if (pitch) contour.push(pitch);
    }
    return contour.filter((pitch) => pitch >= 75 && pitch <= 450);
  }

  private toneContourScore(tone: number, contour: number[]) {
    if (!contour.length) return null;
    const values = contour.map((pitch) => Math.log2(pitch));
    const first = values[0];
    const last = values[values.length - 1];
    const mid = values[Math.floor(values.length / 2)];
    const min = Math.min(...values);
    const max = Math.max(...values);
    const slope = last - first;
    const range = max - min;
    if (tone === 1) return Math.round(Math.max(35, Math.min(100, 100 - Math.abs(slope) * 120 - Math.max(0, range - 0.22) * 80)));
    if (tone === 2) return Math.round(Math.max(35, Math.min(100, 60 + slope * 180)));
    if (tone === 3) {
      const dip = Math.min(first, last) - mid;
      return Math.round(Math.max(35, Math.min(100, 55 + dip * 220 + Math.max(0, last - mid) * 80)));
    }
    if (tone === 4) return Math.round(Math.max(35, Math.min(100, 60 - slope * 180)));
    return Math.round(Math.max(45, Math.min(85, 72 - range * 25)));
  }

  private assessToneAndIntonation(audioBuffer: Buffer, pinyin: string) {
    const tones = this.pinyinTones(pinyin).filter((tone) => tone > 0);
    const contour = this.pitchContour(audioBuffer);
    if (!tones.length || contour.length < 6) {
      return { toneScore: null, intonationScore: null, toneResults: [] };
    }
    const segmentLength = contour.length / tones.length;
    const toneResults = tones.map((tone, index) => {
      const start = Math.floor(index * segmentLength);
      const end = Math.max(start + 1, Math.floor((index + 1) * segmentLength));
      const score = this.toneContourScore(tone, contour.slice(start, end));
      return {
        index,
        tone,
        score,
        correct: Number(score) >= 60,
      };
    });
    const scores = toneResults.map((item) => item.score).filter((score): score is number => Number.isFinite(Number(score)));
    const toneScore = scores.length ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : null;
    const intonationScore = toneScore === null ? null : Math.round((toneScore * 0.75) + (Math.min(100, contour.length * 2) * 0.25));
    return { toneScore, intonationScore, toneResults };
  }

  private iflytekIseAuth(): IflytekIseAuth {
    const protocol = (process.env.IFLYTEK_ISE_PROTOCOL || 'wss').replace(/:$/, '');
    const host = process.env.IFLYTEK_ISE_HOST || 'ise-api-sg.xf-yun.com';
    const pathname = process.env.IFLYTEK_ISE_PATH || '/v2/ise';
    const date = new Date().toUTCString();
    const signatureOrigin = `host: ${host}\ndate: ${date}\nGET ${pathname} HTTP/1.1`;
    const signature = crypto.createHmac('sha256', process.env.IFLYTEK_API_SECRET || '').update(signatureOrigin).digest('base64');
    const authorizationOrigin = `api_key="${process.env.IFLYTEK_API_KEY || ''}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
    const authorization = Buffer.from(authorizationOrigin).toString('base64');
    const url = `${protocol}://${host}${pathname}?authorization=${encodeURIComponent(authorization)}&date=${encodeURIComponent(date)}&host=${encodeURIComponent(host)}`;
    return { protocol, host, pathname, url };
  }

  private iflytekIseUrl() {
    return this.iflytekIseAuth().url;
  }

  private parseIflytekHandshake(raw: string): IflytekHandshakeResponse {
    const [header = '', body = ''] = raw.split(/\r?\n\r?\n/);
    const statusMatch = header.match(/^HTTP\/\d(?:\.\d)?\s+(\d{3})\s*([^\r\n]*)/i);
    return {
      statusCode: Number(statusMatch?.[1] || 0),
      statusText: (statusMatch?.[2] || '').trim(),
      body: body.trim(),
    };
  }

  private providerError(message: string, details: Record<string, unknown> = {}) {
    const error = new Error(message) as Error & Record<string, unknown>;
    for (const [key, value] of Object.entries(details)) error[key] = value;
    return error;
  }

  private iflytekHandshakeMessage(response: IflytekHandshakeResponse) {
    let providerMessage = response.body || response.statusText || 'Unknown iFLYTEK handshake error';
    try {
      const data = JSON.parse(response.body);
      if (data?.message) providerMessage = String(data.message);
    } catch {}
    return `iFLYTEK ISE xac thuc that bai (${response.statusCode}): ${providerMessage}`;
  }

  private verifyIflytekHandshake(auth: IflytekIseAuth) {
    return new Promise<void>((resolve, reject) => {
      const target = new URL(auth.url);
      if (!['ws:', 'wss:'].includes(target.protocol)) {
        reject(this.providerError(`IFLYTEK_ISE_PROTOCOL khong hop le: ${auth.protocol}`));
        return;
      }
      const isSecure = target.protocol === 'wss:';
      const port = Number(target.port || (isSecure ? 443 : 80));
      const key = crypto.randomBytes(16).toString('base64');
      const request = [
        `GET ${target.pathname}${target.search} HTTP/1.1`,
        `Host: ${target.host}`,
        'Upgrade: websocket',
        'Connection: Upgrade',
        `Sec-WebSocket-Key: ${key}`,
        'Sec-WebSocket-Version: 13',
        '\r\n',
      ].join('\r\n');
      const socket = isSecure
        ? tls.connect({ host: target.hostname, port, servername: target.hostname })
        : net.connect({ host: target.hostname, port });
      let raw = '';
      let settled = false;
      const finish = (error?: Error) => {
        if (settled) return;
        settled = true;
        clearTimeout(timeout);
        try { socket.destroy(); } catch {}
        if (error) reject(error);
        else resolve();
      };
      const timeout = setTimeout(() => {
        finish(this.providerError('iFLYTEK ISE handshake phan hoi qua lau.'));
      }, 10000);
      socket.on(isSecure ? 'secureConnect' : 'connect', () => socket.write(request));
      socket.on('data', (chunk) => {
        raw += chunk.toString('utf8');
        if (!raw.includes('\r\n\r\n')) return;
        const response = this.parseIflytekHandshake(raw);
        if (response.statusCode === 101) {
          finish();
          return;
        }
        const providerMessage = response.body || response.statusText;
        finish(this.providerError(this.iflytekHandshakeMessage(response), {
          providerCode: response.statusCode,
          providerMessage,
        }));
      });
      socket.on('error', (error) => {
        finish(this.providerError(`Khong ket noi duoc iFLYTEK ISE: ${error.message}`));
      });
    });
  }

  private pcmPayloadFromAudioBuffer(audioBuffer: Buffer) {
    if (audioBuffer.subarray(0, 4).toString('ascii') !== 'RIFF') return audioBuffer;
    let offset = 12;
    while (offset + 8 <= audioBuffer.length) {
      const chunkId = audioBuffer.subarray(offset, offset + 4).toString('ascii');
      const chunkSize = audioBuffer.readUInt32LE(offset + 4);
      const dataStart = offset + 8;
      if (chunkId === 'data') return audioBuffer.subarray(dataStart, dataStart + chunkSize);
      offset = dataStart + chunkSize + (chunkSize % 2);
    }
    return audioBuffer;
  }

  private normalizeProviderScore(value: unknown) {
    const score = Number(value);
    if (!Number.isFinite(score)) return null;
    if (score <= 5) return Math.round(score * 20);
    if (score <= 10) return Math.round(score * 10);
    return Math.max(0, Math.min(100, Math.round(score)));
  }

  private xmlDecode(value?: string) {
    return String(value || '')
      .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
      .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
  }

  private xmlAttribute(node: string, names: string[]) {
    for (const name of names) {
      const match = node.match(new RegExp(`\\b${name}="([^"]*)"`, 'i'));
      if (match) return this.xmlDecode(match[1]);
    }
    return '';
  }

  private parseIflytekAssessment(messages: any[], referenceText: string) {
    const xml = messages.map((message) => {
      const encoded = message?.data?.data || '';
      if (!encoded) return '';
      try {
        return Buffer.from(encoded, 'base64').toString('utf8');
      } catch {
        return '';
      }
    }).join('');
    const resultNode = xml.match(/<(?:read_sentence|sentence|rec_paper)\b[^>]*>/i)?.[0] || '';
    const totalScore = this.xmlAttribute(resultNode, ['total_score', 'overall_score', 'score']);
    const scoreMatches = [...xml.matchAll(/\b(?:phone_score|tone_score|fluency_score|accuracy_score|total_score|overall_score|score)="([^"]+)"/gi)]
      .map((match) => this.normalizeProviderScore(match[1]))
      .filter((score): score is number => score !== null);
    const score = this.normalizeProviderScore(totalScore)
      ?? (scoreMatches.length ? Math.round(scoreMatches.reduce((sum, item) => sum + item, 0) / scoreMatches.length) : 0);
    const wordNodes = [...xml.matchAll(/<word\b[^>]*>/gi)].map((match) => match[0]);
    const words = wordNodes.map((node) => {
      const word = this.xmlAttribute(node, ['content', 'text', 'word']);
      const wordScore = this.normalizeProviderScore(this.xmlAttribute(node, ['total_score', 'phone_score', 'tone_score', 'score']));
      return {
        word,
        accuracyScore: wordScore,
        errorType: wordScore === null || wordScore >= 60 ? 'None' : 'Pronunciation',
      };
    }).filter((word) => word.word);
    const recognizedText = words.length
      ? words.map((word) => word.word).join('')
      : this.xmlAttribute(resultNode || xml, ['content', 'text']) || referenceText;
    const fallback = this.comparePronunciationFallback(referenceText, recognizedText || referenceText);
    const charResults = fallback.charResults.map((item) => ({
      ...item,
      correct: item.correct && score >= 60,
      errorType: item.correct && score >= 60 ? 'None' : 'Pronunciation',
      accuracyScore: score,
    }));
    return { provider: 'iflytek', recognizedText, score, accuracyScore: score, fluencyScore: null, completenessScore: null, words, charResults, rawXml: xml };
  }

  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private async assessWithIflytek(referenceText: string, audioBuffer: Buffer) {
    const WebSocketCtor = (globalThis as any).WebSocket;
    if (!WebSocketCtor) {
      throw new Error('Node runtime chua ho tro WebSocket de ket noi iFLYTEK.');
    }
    const auth = this.iflytekIseAuth();
    await this.verifyIflytekHandshake(auth);
    const pcmBuffer = this.pcmPayloadFromAudioBuffer(audioBuffer);
    const messages: any[] = [];
    return new Promise<Record<string, unknown>>((resolve, reject) => {
      const socket = new WebSocketCtor(auth.url);
      let settled = false;
      const fail = (error: Error) => {
        if (settled) return;
        settled = true;
        clearTimeout(timeout);
        reject(error);
      };
      const timeout = setTimeout(() => {
        try { socket.close(); } catch {}
        fail(new Error('iFLYTEK phan hoi qua lau.'));
      }, 30000);
      socket.addEventListener('open', async () => {
        try {
          const chunkSize = 1280;
          socket.send(JSON.stringify({
            common: { app_id: process.env.IFLYTEK_APP_ID || '' },
            business: {
              sub: 'ise',
              ent: 'cn_vip',
              category: 'read_sentence',
              cmd: 'ssb',
              auf: 'audio/L16;rate=16000',
              aue: 'raw',
              rstcd: 'utf8',
              tte: 'utf-8',
              ttp_skip: true,
              group: 'adult',
              rst: 'entirety',
              ise_unite: '1',
              extra_ability: 'multi_dimension',
              text: `\uFEFF${referenceText}`,
            },
            data: { status: 0 },
          }));
          await this.delay(40);
          for (let offset = 0; offset < pcmBuffer.length; offset += chunkSize) {
            const chunk = pcmBuffer.subarray(offset, offset + chunkSize);
            const isFirstAudioFrame = offset === 0;
            const isLastAudioFrame = offset + chunkSize >= pcmBuffer.length;
            socket.send(JSON.stringify({
              business: {
                cmd: 'auw',
                aus: isLastAudioFrame ? 4 : isFirstAudioFrame ? 1 : 2,
              },
              data: {
                status: isLastAudioFrame ? 2 : 1,
                data: chunk.toString('base64'),
              },
            }));
            await this.delay(40);
          }
        } catch (error) {
          fail(error instanceof Error ? error : new Error('Khong gui duoc audio den iFLYTEK ISE.'));
        }
      });
      socket.addEventListener('message', (event: any) => {
        const message = JSON.parse(String(event.data || '{}'));
        messages.push(message);
        if (message.code && message.code !== 0) {
          const error = new Error(message.message || 'iFLYTEK cham phat am that bai.') as Error & Record<string, unknown>;
          error.providerCode = message.code;
          error.providerMessage = message.message;
          error.providerSid = message.sid;
          error.providerDataStatus = message.data?.status;
          fail(error);
          try { socket.close(); } catch {}
          return;
        }
        if (message.data?.status === 2) {
          if (settled) return;
          settled = true;
          clearTimeout(timeout);
          try { socket.close(); } catch {}
          resolve(this.parseIflytekAssessment(messages, referenceText));
        }
      });
      socket.addEventListener('error', (event: any) => {
        const detail = event?.message || event?.error?.message || '';
        fail(new Error(detail ? `Khong ket noi duoc iFLYTEK ISE: ${detail}` : 'Khong ket noi duoc iFLYTEK ISE.'));
      });
      socket.addEventListener('close', (event: any) => {
        if (settled) return;
        const reason = event?.reason ? ` ${event.reason}` : '';
        fail(new Error(`iFLYTEK ISE da dong ket noi truoc khi tra ket qua (${event?.code || 'unknown'}).${reason}`));
      });
    });
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

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
      const result = provider === 'iflytek'
        ? await this.assessWithIflytek(referenceText, audioBuffer)
        : provider === 'speechace'
          ? await this.assessWithSpeechace(referenceText, audioBuffer, body.mimeType)
          : await this.assessWithAzure(referenceText, audioBuffer, body.mimeType);
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
    const requested = String(process.env.SPEECH_ASSESSMENT_PROVIDER || process.env.PRONUNCIATION_ASSESSMENT_PROVIDER || 'auto').toLowerCase();
    const hasIflytek = Boolean(process.env.IFLYTEK_APP_ID && process.env.IFLYTEK_API_KEY && process.env.IFLYTEK_API_SECRET);
    const hasAzure = Boolean(process.env.AZURE_SPEECH_KEY && process.env.AZURE_SPEECH_REGION);
    const hasSpeechace = Boolean(process.env.SPEECHACE_API_KEY);
    if (requested === 'iflytek') return hasIflytek ? 'iflytek' : '';
    if (requested === 'azure') return hasAzure ? 'azure' : '';
    if (requested === 'speechace') return hasSpeechace ? 'speechace' : '';
    if (hasSpeechace) return 'speechace';
    if (hasIflytek) return 'iflytek';
    if (hasAzure) return 'azure';
    return '';
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

  private pronunciationMimeType(value?: string) {
    const mimeType = String(value || '').split(';')[0].trim().toLowerCase();
    if (mimeType === 'audio/ogg') return 'audio/ogg; codecs=opus';
    if (mimeType === 'audio/webm') return 'audio/webm; codecs=opus';
    if (mimeType === 'audio/wav' || mimeType === 'audio/x-wav') return 'audio/wav; codecs=audio/pcm; samplerate=16000';
    return mimeType || 'application/octet-stream';
  }

  private azureCharResults(referenceText: string, azureWords: any[] = [], fallback: FallbackResult) {
    const targetText = Array.from(this.normalizeHanzi(referenceText)).join('');
    const results = fallback.charResults.map((item) => ({ ...item }));
    let cursor = 0;
    for (const word of azureWords) {
      const normalizedWord = this.normalizeHanzi(word.Word || '');
      if (!normalizedWord) continue;
      const foundAt = targetText.indexOf(normalizedWord, cursor);
      if (foundAt === -1) continue;
      const assessment = word.PronunciationAssessment || {};
      const errorType = assessment.ErrorType || 'None';
      const accuracyScore = Number(assessment.AccuracyScore ?? 100);
      const correct = errorType === 'None' && accuracyScore >= 60;
      for (let offset = 0; offset < normalizedWord.length; offset += 1) {
        const index = foundAt + offset;
        if (results[index]) {
          results[index].correct = correct;
          results[index].errorType = correct ? 'None' : errorType;
          results[index].accuracyScore = Number.isFinite(accuracyScore) ? accuracyScore : null;
        }
      }
      cursor = foundAt + normalizedWord.length;
    }
    return results;
  }

  private mapAzurePronunciationWords(words: any[] = []) {
    return words.map((word) => ({
      word: word.Word || '',
      accuracyScore: word.PronunciationAssessment?.AccuracyScore ?? null,
      errorType: word.PronunciationAssessment?.ErrorType || 'None',
    })).filter((word) => word.word);
  }

  private speechaceScoreValue(data: any) {
    return this.normalizeProviderScore(
      data?.text_score?.speechace_score?.pronunciation
      ?? data?.text_score?.speechace_score?.overall
      ?? data?.text_score?.quality_score
      ?? data?.speechace_score?.pronunciation
      ?? data?.speechace_score?.overall
      ?? data?.pronunciation_score
      ?? data?.score,
    );
  }

  private speechaceWords(data: any) {
    const words = data?.text_score?.word_score_list || data?.word_score_list || data?.words || [];
    return Array.isArray(words) ? words.map((word) => {
      const score = this.normalizeProviderScore(
        word?.quality_score
        ?? word?.phone_score
        ?? word?.speechace_score?.pronunciation
        ?? word?.score,
      );
      return {
        word: word?.word || word?.text || '',
        accuracyScore: score,
        errorType: score === null || score >= 60 ? 'None' : 'Pronunciation',
      };
    }).filter((word) => word.word) : [];
  }

  private speechaceApiKey() {
    const key = process.env.SPEECHACE_API_KEY || '';
    try {
      return decodeURIComponent(key);
    } catch {
      return key;
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

  private async assessWithSpeechace(referenceText: string, audioBuffer: Buffer, mimeType?: string) {
    const key = this.speechaceApiKey();
    const endpoint = process.env.SPEECHACE_ENDPOINT || 'https://api.speechace.co/api/scoring/text/v9/json';
    const dialect = process.env.SPEECHACE_DIALECT || 'en-us';
    const userId = process.env.SPEECHACE_USER_ID || 'huamei-listening';
    const url = new URL(endpoint);
    url.searchParams.set('key', key);
    url.searchParams.set('dialect', dialect);
    url.searchParams.set('user_id', userId);
    url.searchParams.set('include_fluency', process.env.SPEECHACE_INCLUDE_FLUENCY || '1');

    const FormDataCtor = (globalThis as any).FormData;
    const BlobCtor = (globalThis as any).Blob;
    if (!FormDataCtor || !BlobCtor) {
      throw new Error('Node runtime chua ho tro FormData de gui audio den Speechace.');
    }

    const form = new FormDataCtor();
    form.append('text', referenceText);
    form.append('user_audio_file', new BlobCtor([audioBuffer], { type: this.pronunciationMimeType(mimeType) }), 'recording.wav');

    const response = await fetch(url, { method: 'POST', body: form as any });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data?.status === 'error') {
      throw new Error(data?.message || data?.detail || data?.error || 'Khong cham duoc phat am bang Speechace.');
    }

    const words = this.speechaceWords(data);
    const recognizedText = words.length ? words.map((word) => word.word).join('') : (data?.text || data?.text_score?.text || referenceText);
    const fallback = this.comparePronunciationFallback(referenceText, recognizedText || referenceText);
    const score = this.speechaceScoreValue(data) ?? fallback.score;
    const charResults = fallback.charResults.map((item) => ({
      ...item,
      correct: item.correct && score >= 60,
      errorType: item.correct && score >= 60 ? 'None' : 'Pronunciation',
      accuracyScore: score,
    }));

    return {
      provider: 'speechace',
      recognizedText,
      score,
      accuracyScore: score,
      fluencyScore: this.normalizeProviderScore(data?.text_score?.speechace_score?.fluency ?? data?.fluency_score),
      completenessScore: this.normalizeProviderScore(data?.text_score?.speechace_score?.completeness ?? data?.completeness_score),
      words,
      charResults,
      raw: data,
    };
  }

  private async assessWithAzure(referenceText: string, audioBuffer: Buffer, mimeType?: string) {
    const key = process.env.AZURE_SPEECH_KEY || '';
    const region = process.env.AZURE_SPEECH_REGION || '';
    const pronunciationConfig = {
      ReferenceText: referenceText,
      GradingSystem: 'HundredMark',
      Granularity: 'Word',
      Dimension: 'Comprehensive',
      EnableMiscue: true,
    };
    const endpoint = `https://${region}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=zh-CN&format=detailed`;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': key,
        'Content-Type': this.pronunciationMimeType(mimeType),
        'Pronunciation-Assessment': Buffer.from(JSON.stringify(pronunciationConfig)).toString('base64'),
        Accept: 'application/json',
      },
      body: audioBuffer as any,
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.error?.message || data.message || 'Khong cham duoc phat am bang Azure Speech.');
    }
    const best = data.NBest?.[0] || {};
    const assessment = best.PronunciationAssessment || {};
    const recognizedText = best.Display || data.DisplayText || '';
    const fallback = this.comparePronunciationFallback(referenceText, recognizedText);
    const words = best.Words || [];
    return {
      provider: 'azure',
      recognizedText,
      score: Math.round(assessment.PronScore ?? fallback.score),
      accuracyScore: assessment.AccuracyScore ?? null,
      fluencyScore: assessment.FluencyScore ?? null,
      completenessScore: assessment.CompletenessScore ?? null,
      words: this.mapAzurePronunciationWords(words),
      charResults: words.length ? this.azureCharResults(referenceText, words, fallback) : fallback.charResults,
    };
  }

  private iflytekIseUrl() {
    const protocol = (process.env.IFLYTEK_ISE_PROTOCOL || 'wss').replace(/:$/, '');
    const host = process.env.IFLYTEK_ISE_HOST || 'ise-api-sg.xf-yun.com';
    const pathname = process.env.IFLYTEK_ISE_PATH || '/v2/ise';
    const date = new Date().toUTCString();
    const signatureOrigin = `host: ${host}\ndate: ${date}\nGET ${pathname} HTTP/1.1`;
    const signature = crypto.createHmac('sha256', process.env.IFLYTEK_API_SECRET || '').update(signatureOrigin).digest('base64');
    const authorizationOrigin = `api_key="${process.env.IFLYTEK_API_KEY || ''}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
    const authorization = Buffer.from(authorizationOrigin).toString('base64');
    return `${protocol}://${host}${pathname}?authorization=${encodeURIComponent(authorization)}&date=${encodeURIComponent(date)}&host=${encodeURIComponent(host)}`;
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
    const totalMatch = xml.match(/\b(?:total_score|overall_score|score)="([^"]+)"/i);
    const scoreMatches = [...xml.matchAll(/\b(?:phone_score|tone_score|fluency_score|accuracy_score|dp_message|score)="([^"]+)"/gi)]
      .map((match) => this.normalizeProviderScore(match[1]))
      .filter((score): score is number => score !== null);
    const score = this.normalizeProviderScore(totalMatch?.[1])
      ?? (scoreMatches.length ? Math.round(scoreMatches.reduce((sum, item) => sum + item, 0) / scoreMatches.length) : 0);
    const recognizedMatch = xml.match(/\b(?:content|text)="([^"]+)"/i);
    const recognizedText = recognizedMatch ? recognizedMatch[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&') : referenceText;
    const fallback = this.comparePronunciationFallback(referenceText, recognizedText || referenceText);
    const charResults = fallback.charResults.map((item) => ({
      ...item,
      correct: item.correct && score >= 60,
      errorType: item.correct && score >= 60 ? 'None' : 'Pronunciation',
      accuracyScore: score,
    }));
    return { provider: 'iflytek', recognizedText, score, accuracyScore: score, fluencyScore: null, completenessScore: null, charResults, rawXml: xml };
  }

  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private async assessWithIflytek(referenceText: string, audioBuffer: Buffer) {
    const WebSocketCtor = (globalThis as any).WebSocket;
    if (!WebSocketCtor) {
      throw new Error('Node runtime chua ho tro WebSocket de ket noi iFLYTEK.');
    }
    const pcmBuffer = this.pcmPayloadFromAudioBuffer(audioBuffer);
    const messages: any[] = [];
    return new Promise<Record<string, unknown>>((resolve, reject) => {
      const socket = new WebSocketCtor(this.iflytekIseUrl());
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
                aus: isFirstAudioFrame ? 1 : isLastAudioFrame ? 4 : 2,
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

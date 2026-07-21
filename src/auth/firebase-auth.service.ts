import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { App, cert, getApps, initializeApp } from 'firebase-admin/app';
import { Auth, DecodedIdToken, UserRecord, getAuth } from 'firebase-admin/auth';
import * as crypto from 'crypto';
import { DatabaseService } from '../database/database.service';

export type FirebaseIdentity = {
  uid: string;
  email: string;
  emailVerified: boolean;
  name: string;
};

@Injectable()
export class FirebaseAuthService {
  private app: App | null = null;
  private auth: Auth | null = null;
  private readonly verifiedTokenCache = new Map<string, { identity: FirebaseIdentity; expiresAt: number }>();

  constructor(private readonly db: DatabaseService) {}

  isEnabled(): boolean {
    return Boolean(
      process.env.FIREBASE_WEB_API_KEY
      && process.env.FIREBASE_PROJECT_ID
      && process.env.FIREBASE_CLIENT_EMAIL
      && process.env.FIREBASE_PRIVATE_KEY,
    );
  }

  publicConfig() {
    return {
      enabled: this.isEnabled(),
      apiKey: this.isEnabled() ? process.env.FIREBASE_WEB_API_KEY : '',
      authDomain: this.isEnabled()
        ? (process.env.FIREBASE_AUTH_DOMAIN || `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`)
        : '',
      projectId: this.isEnabled() ? process.env.FIREBASE_PROJECT_ID : '',
    };
  }

  private getAdminAuth(): Auth {
    if (!this.isEnabled()) {
      throw new HttpException(
        'Firebase Authentication chưa được cấu hình trên server.',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
    if (this.auth) return this.auth;

    const projectId = String(process.env.FIREBASE_PROJECT_ID);
    const clientEmail = String(process.env.FIREBASE_CLIENT_EMAIL);
    const privateKey = String(process.env.FIREBASE_PRIVATE_KEY).replace(/\\n/g, '\n');
    this.app = getApps().find((candidate) => candidate.name === 'huamei-auth')
      || initializeApp({
        credential: cert({ projectId, clientEmail, privateKey }),
        projectId,
      }, 'huamei-auth');
    this.auth = getAuth(this.app);
    return this.auth;
  }

  private identityFromToken(token: DecodedIdToken): FirebaseIdentity {
    const email = String(token.email || '').trim().toLowerCase();
    if (!token.uid || !email) {
      throw new HttpException('Tài khoản Firebase không có email hợp lệ.', HttpStatus.UNAUTHORIZED);
    }
    return {
      uid: token.uid,
      email,
      emailVerified: token.email_verified === true,
      name: String(token.name || '').trim(),
    };
  }

  async verifyIdToken(idToken: string): Promise<FirebaseIdentity> {
    const token = String(idToken || '').trim();
    if (!token) {
      throw new HttpException('Thiếu Firebase ID Token.', HttpStatus.UNAUTHORIZED);
    }

    const cached = this.verifiedTokenCache.get(token);
    if (cached && cached.expiresAt > Date.now()) return cached.identity;

    try {
      const decoded = await this.getAdminAuth().verifyIdToken(token, true);
      const identity = this.identityFromToken(decoded);
      const expiresAt = Math.min(decoded.exp * 1000, Date.now() + 5 * 60 * 1000);
      this.verifiedTokenCache.set(token, { identity, expiresAt });
      if (this.verifiedTokenCache.size > 500) {
        const firstKey = this.verifiedTokenCache.keys().next().value;
        if (firstKey) this.verifiedTokenCache.delete(firstKey);
      }
      return identity;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException('Phiên đăng nhập Firebase không hợp lệ hoặc đã hết hạn.', HttpStatus.UNAUTHORIZED);
    }
  }

  bearerToken(value: string | string[] | undefined): string {
    const header = String(Array.isArray(value) ? value[0] : value || '').trim();
    const match = header.match(/^Bearer\s+(.+)$/i);
    return match ? match[1].trim() : '';
  }

  async ensureUser(email: string, displayName = '', password?: string): Promise<UserRecord> {
    const normalizedEmail = String(email || '').trim().toLowerCase();
    const auth = this.getAdminAuth();
    try {
      const existing = await auth.getUserByEmail(normalizedEmail);
      if (password) {
        return auth.updateUser(existing.uid, {
          password,
          displayName: displayName || existing.displayName,
        });
      }
      return existing;
    } catch (error: any) {
      if (error?.code !== 'auth/user-not-found') throw error;
      return auth.createUser({
        email: normalizedEmail,
        password: password || crypto.randomBytes(36).toString('base64url'),
        displayName: displayName || undefined,
      });
    }
  }

  async createCustomToken(uid: string): Promise<string> {
    return this.getAdminAuth().createCustomToken(uid);
  }

  async revokeUserSessions(uid: string): Promise<void> {
    await this.getAdminAuth().revokeRefreshTokens(uid);
    this.verifiedTokenCache.clear();
  }

  async authenticateRequest(req: any, res: any, next: () => void) {
    delete req.headers['x-firebase-uid'];
    delete req.headers['x-firebase-email'];
    delete req.headers['x-firebase-email-verified'];

    if (!this.isEnabled()) return next();

    const token = this.bearerToken(req.headers.authorization);
    if (!token) {
      delete req.headers['x-user-id'];
      delete req.headers['x-admin-user-id'];
      return next();
    }

    try {
      const identity = await this.verifyIdToken(token);
      req.headers['x-firebase-uid'] = identity.uid;
      req.headers['x-firebase-email'] = identity.email;
      req.headers['x-firebase-email-verified'] = identity.emailVerified ? 'true' : 'false';

      const result = await this.db.query(
        'SELECT id FROM users WHERE firebase_uid = $1 LIMIT 1',
        [identity.uid],
      );
      const userId = result.rows[0]?.id;
      if (userId) {
        req.headers['x-user-id'] = userId;
        req.headers['x-admin-user-id'] = userId;
      } else {
        delete req.headers['x-user-id'];
        delete req.headers['x-admin-user-id'];
      }
      return next();
    } catch (error: any) {
      const status = typeof error?.getStatus === 'function' ? error.getStatus() : 401;
      const payload = typeof error?.getResponse === 'function'
        ? error.getResponse()
        : { error: error?.message || 'Phiên đăng nhập không hợp lệ.' };
      return res.status(status).json(typeof payload === 'string' ? { error: payload } : payload);
    }
  }
}

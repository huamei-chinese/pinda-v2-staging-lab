const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const stylesSource = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const authControllerSource = fs.readFileSync(path.join(root, "src", "auth", "auth.controller.ts"), "utf8");
const authServiceSource = fs.readFileSync(path.join(root, "src", "auth", "auth.service.ts"), "utf8");
const databaseServiceSource = fs.readFileSync(path.join(root, "src", "database", "database.service.ts"), "utf8");
const mainSource = fs.readFileSync(path.join(root, "src", "main.ts"), "utf8");
const standaloneServerSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
const netlifyApiSource = fs.readFileSync(path.join(root, "netlify", "functions", "api.mjs"), "utf8");
const envExampleSource = fs.readFileSync(path.join(root, ".env.example"), "utf8");

test("login modal exposes a forgot-password entry point", () => {
  assert.match(appSource, /id="forgotPasswordBtn"/);
  assert.match(appSource, /showPasswordResetModal\(email\)/);
  assert.match(appSource, /id="authPassword"[\s\S]*class="auth-forgot-row"[\s\S]*id="forgotPasswordBtn"/);
  assert.doesNotMatch(appSource, /<form id="authForm"[\s\S]{0,260}id="forgotPasswordBtn"[\s\S]{0,260}id="authEmail"/);
  assert.match(appSource, /btn-forgot-password/);
  assert.match(stylesSource, /\.auth-forgot-row\s*\{[\s\S]*justify-content:\s*flex-end;/);
});

test("password reset frontend uses the three-step backend flow", () => {
  assert.match(appSource, /function showPasswordResetModal/);
  assert.match(appSource, /\/api\/password-reset\/request/);
  assert.match(appSource, /\/api\/password-reset\/verify/);
  assert.match(appSource, /\/api\/password-reset\/confirm/);
  assert.match(appSource, /passwordResetCodeInput/);
  assert.match(appSource, /passwordResetNewPassword/);
  assert.match(appSource, /state\.user = data\.user/);
});

test("Gmail OTP remains the password-reset path when Firebase authentication is enabled", () => {
  const resetModal = appSource.match(/function showPasswordResetModal[\s\S]*?\n}\r?\n\r?\nfunction showEmailVerificationModal/)?.[0] || "";
  assert.match(resetModal, /\/api\/password-reset\/request/);
  assert.doesNotMatch(resetModal, /firebaseSendPasswordResetEmail/);
  assert.match(resetModal, /firebaseSignIn\(resetEmail, newPassword\)/);
  assert.match(authServiceSource, /firebaseAuth\.ensureUser\(user\.email, user\.full_name, password\)/);
  assert.match(authServiceSource, /firebaseAuth\.revokeUserSessions\(firebaseUid\)/);
  assert.doesNotMatch(appSource, /accounts:sendOobCode/);
  assert.doesNotMatch(authControllerSource, /firebase-prepare-reset/);
});

test("local frontend-only ports send API requests to the Nest backend port", () => {
  assert.match(appSource, /function getApiRequestUrl/);
  assert.match(appSource, /function getLocalApiRequestBaseUrl/);
  assert.match(appSource, /localApiBaseUrl !== null/);
  assert.match(appSource, /"4172"/);
  assert.match(appSource, /:4173\$\{value\}/);
  assert.match(appSource, /getConfiguredBackendUrl/);
});

test("Nest auth exposes password reset request verify and confirm endpoints", () => {
  assert.match(authControllerSource, /password-reset\/request/);
  assert.match(authControllerSource, /password-reset\/verify/);
  assert.match(authControllerSource, /password-reset\/confirm/);
  assert.match(authServiceSource, /passwordResetHash/);
  assert.match(authServiceSource, /sendPasswordResetEmail/);
  assert.match(authServiceSource, /password_reset_code_hash = NULL/);
  assert.match(authServiceSource, /last_login_at = NOW\(\)/);
});

test("database and Netlify function support password reset tokens", () => {
  assert.match(databaseServiceSource, /password_reset_code_hash TEXT/);
  assert.match(databaseServiceSource, /password_reset_expires_at TIMESTAMPTZ/);
  assert.match(netlifyApiSource, /password-reset\/request/);
  assert.match(netlifyApiSource, /password-reset\/verify/);
  assert.match(netlifyApiSource, /password-reset\/confirm/);
  assert.match(netlifyApiSource, /password_reset_code_hash = NULL/);
});

test("password reset modal has dedicated modern styles", () => {
  assert.match(stylesSource, /\.auth-modal-content--password-reset/);
  assert.match(stylesSource, /\.password-reset-steps/);
  assert.match(stylesSource, /\.password-reset-code-input/);
  assert.match(stylesSource, /\.password-reset-actions/);
});

test("email codes support Gmail app-password SMTP configuration", () => {
  assert.match(authServiceSource, /SMTP_USER/);
  assert.match(authServiceSource, /SMTP_PASS/);
  assert.match(authServiceSource, /smtp\.gmail\.com/);
  assert.match(authServiceSource, /AUTH LOGIN/);
  assert.match(netlifyApiSource, /SMTP_USER/);
  assert.match(netlifyApiSource, /SMTP_PASS/);
  assert.match(envExampleSource, /SMTP_HOST=smtp\.gmail\.com/);
  assert.match(envExampleSource, /SMTP_PASS=your_google_app_password_without_spaces/);
});

test("password reset and verification email use Gmail SMTP exclusively", () => {
  for (const source of [authServiceSource, standaloneServerSource, netlifyApiSource]) {
    assert.match(source, /SMTP_USER/);
    assert.match(source, /SMTP_PASS/);
    assert.match(source, /Gmail SMTP failed/);
    assert.doesNotMatch(source, /MAIL_SERVICE_URL|MAIL_SERVICE_SECRET/);
    assert.doesNotMatch(source, /EMAIL_DELIVERY_MODE|devCode/);
    assert.doesNotMatch(source, /Resend email failed|api\.resend\.com\/emails/);
  }
  assert.doesNotMatch(appSource, /password-reset-dev-code|data\.devCode/);
  assert.doesNotMatch(stylesSource, /password-reset-dev-code/);
});

test("local .env loader lets later duplicate keys win without overriding deployment env", () => {
  assert.match(mainSource, /const envValues: Record<string, string> = \{\};/);
  assert.match(mainSource, /envValues\[key\] = value;/);
  assert.match(mainSource, /for \(const \[key, value\] of Object\.entries\(envValues\)\)/);
  assert.match(mainSource, /if \(process\.env\[key\] === undefined\)/);
  assert.match(standaloneServerSource, /const envValues = \{\};/);
  assert.match(standaloneServerSource, /envValues\[key\] = value;/);
  assert.match(standaloneServerSource, /for \(const \[key, value\] of Object\.entries\(envValues\)\)/);
  assert.match(standaloneServerSource, /if \(process\.env\[key\] === undefined\)/);
});

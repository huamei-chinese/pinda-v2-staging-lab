const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const controllerSource = fs.readFileSync(path.join(root, "src", "auth", "auth.controller.ts"), "utf8");
const authServiceSource = fs.readFileSync(path.join(root, "src", "auth", "auth.service.ts"), "utf8");
const firebaseServiceSource = fs.readFileSync(path.join(root, "src", "auth", "firebase-auth.service.ts"), "utf8");
const databaseSource = fs.readFileSync(path.join(root, "src", "database", "database.service.ts"), "utf8");
const mainSource = fs.readFileSync(path.join(root, "src", "main.ts"), "utf8");
const envExample = fs.readFileSync(path.join(root, ".env.example"), "utf8");

test("Firebase frontend supports signup, login, and token refresh without a reset-email flow", () => {
  assert.match(appSource, /accounts:signUp/);
  assert.match(appSource, /accounts:signInWithPassword/);
  assert.match(appSource, /accounts:signInWithCustomToken/);
  assert.doesNotMatch(appSource, /accounts:sendOobCode/);
  assert.match(appSource, /securetoken\.googleapis\.com/);
  assert.match(appSource, /Authorization: `Bearer \$\{firebaseIdToken\}`/);
});

test("Firebase backend verifies bearer tokens and maps them to PostgreSQL users", () => {
  assert.match(firebaseServiceSource, /verifyIdToken\(token, true\)/);
  assert.match(firebaseServiceSource, /WHERE firebase_uid = \$1/);
  assert.match(firebaseServiceSource, /req\.headers\['x-user-id'\] = userId/);
  assert.match(mainSource, /firebaseAuth\.authenticateRequest/);
});

test("Firebase auth routes support session sync and safe legacy migration", () => {
  assert.match(controllerSource, /auth\/firebase-config/);
  assert.match(controllerSource, /auth\/firebase-session/);
  assert.match(controllerSource, /auth\/firebase-migrate/);
  assert.doesNotMatch(controllerSource, /auth\/firebase-prepare-reset/);
  assert.match(authServiceSource, /verifyPassword\(password, user\.password_hash\)/);
  assert.match(authServiceSource, /createCustomToken/);
  assert.doesNotMatch(authServiceSource, /prepareFirebasePasswordReset/);
});

test("PostgreSQL schema stores a unique Firebase UID without removing legacy passwords", () => {
  assert.match(databaseSource, /firebase_uid TEXT/);
  assert.match(databaseSource, /idx_users_firebase_uid_unique/);
  assert.match(databaseSource, /password_hash TEXT NOT NULL/);
});

test("environment template documents Firebase server credentials with placeholders", () => {
  assert.match(envExample, /FIREBASE_WEB_API_KEY=your_firebase_web_api_key/);
  assert.match(envExample, /FIREBASE_PROJECT_ID=your_firebase_project_id/);
  assert.match(envExample, /FIREBASE_CLIENT_EMAIL=firebase-adminsdk@example\.iam\.gserviceaccount\.com/);
  assert.match(envExample, /replace_with_service_account_private_key/);
});

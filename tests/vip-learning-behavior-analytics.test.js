const assert = require("node:assert/strict");
const fs = require("node:fs");
const test = require("node:test");

const appSource = fs.readFileSync("public/app.js", "utf8");
const adminServiceSource = fs.readFileSync("src/admin/admin.service.ts", "utf8");
const netlifyApiSource = fs.readFileSync("netlify/functions/api.mjs", "utf8");
const eventsServiceSource = fs.readFileSync("src/events/events.service.ts", "utf8");

test("client tracks learning behavior sessions without changing existing learning events", () => {
  for (const eventType of ["lesson_opened", "question_answered", "practice_completed", "study_session_started", "study_session_heartbeat", "study_session_ended"]) {
    assert.match(appSource, new RegExp(eventType));
  }
  assert.match(appSource, /function syncLearningBehaviorSession/);
  assert.match(appSource, /syncLearningBehaviorSession\(name\)/);
  assert.match(appSource, /syncLearningBehaviorSession\("listening"\)/);
});

test("admin analytics renders VIP behavior instead of the old top-course table", () => {
  const vipBehaviorBlock = appSource.slice(
    appSource.indexOf("const vipBehaviorRowsHTML"),
    appSource.indexOf("const vipUserSummaryHTML")
  );
  assert.match(appSource, /vipBehaviorRowsHTML/);
  assert.match(appSource, /vipBehavior\.recentSessions/);
  assert.match(appSource, /live:\s*"1"/);
  assert.match(appSource, /vipModuleSummaryHTML/);
  assert.match(appSource, /vipContentSummaryHTML/);
  assert.match(appSource, /vipUserSummaryHTML/);
  assert.match(appSource, /vipHighEngagementHTML/);
  assert.match(appSource, /ADMIN_VIP_ANALYTICS_PAGE_SIZE\s*=\s*10/);
  assert.match(appSource, /buildAdminVipHighEngagementRows/);
  assert.match(appSource, /renderAdminAnalyticsPaginationHTML/);
  assert.match(appSource, /data-admin-analytics-vip-page/);
  assert.match(appSource, /adminVipContentSummaryPage/);
  assert.match(appSource, /adminVipSessionPage/);
  assert.match(appSource, /adminVipHighEngagementPage/);
  assert.match(appSource, /Theo d\\u00f5i h\\u00e0nh vi h\\u1ecdc t\\u1eadp VIP/);
  assert.match(appSource, /T\\u1ed5ng h\\u1ee3p theo ph\\u00e2n h\\u1ec7/);
  assert.match(appSource, /T\\u1ed5ng h\\u1ee3p chi ti\\u1ebft theo b\\u00e0i\/ph\\u1ea7n/);
  assert.match(appSource, /T\\u1ed5ng h\\u1ee3p theo ng\\u01b0\\u1eddi d\\u00f9ng VIP/);
  assert.match(appSource, /C\\u1ea5p \/ ch\\u1ee7 \\u0111\\u1ec1 nhi\\u1ec1u ng\\u01b0\\u1eddi v\\u00e0o/);
  assert.match(appSource, /VIP \\u5b66\\u4e60\\u884c\\u4e3a\\u8ddf\\u8e2a/);
  assert.doesNotMatch(appSource, /C\\u1ea5p \/ ch\\u1ee7 \\u0111\\u1ec1 \\u00edt ng\\u01b0\\u1eddi v\\u00e0o|vipLowEngagementHTML|low-engagement/);
  assert.doesNotMatch(appSource, /So sánh kênh nguồn|Phễu chuyển đổi|sourcesHTML|funnelHTML/);
  assert.match(appSource, /getLearningBehaviorLevelLabel/);
  assert.match(appSource, /getLearningBehaviorTopicLabel/);
  assert.match(appSource, /getLearningBehaviorPartLabel/);
  assert.doesNotMatch(vipBehaviorBlock, /VIP active|live sessions|in range|Total time|VIP study time|Active VIP users|by range|No VIP learning sessions|No module summary|No VIP user summary|theo range|user VIP|realtime/);
  assert.doesNotMatch(appSource, /<tbody>\$\{topLessonsHTML\}<\/tbody>/);
});

test("backend analytics exposes active VIP learning sessions", () => {
  for (const source of [adminServiceSource, netlifyApiSource]) {
    assert.match(source, /vipBehavior/);
    assert.match(source, /study_session_heartbeat/);
    assert.match(source, /NOW\(\) - interval '90 seconds'/);
    assert.match(source, /duration_seconds/);
    assert.match(source, /recentSessions/);
    assert.match(source, /moduleSummary/);
    assert.match(source, /contentSummary/);
    assert.match(source, /userSummary/);
    assert.match(source, /COUNT\(DISTINCT user_id\)::int AS vip_users/);
    assert.match(source, /GROUP BY 1, 2, 3, 4, 5/);
    assert.match(source, /LIMIT 500/);
    assert.match(source, /bypassCache/);
  }
  for (const eventType of ["study_session_started", "study_session_heartbeat", "study_session_ended"]) {
    assert.match(eventsServiceSource, new RegExp(eventType));
    assert.match(netlifyApiSource, new RegExp(eventType));
  }
});

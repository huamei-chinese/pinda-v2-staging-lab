const test = require('node:test');
const assert = require('node:assert/strict');

const { runAcademicReview } = require('../academic-review-agent.js');

test('academic review agent trains through every lesson item and reports no blocking content issues', async () => {
  const report = runAcademicReview();

  assert.equal(report.summary.totalIssues, 0, report.issues.map((issue) => `${issue.severity} ${issue.lessonId} ${issue.itemHanzi}: ${issue.message}`).join('\n'));
  assert.ok(report.summary.totalLessons >= 91);
  assert.ok(report.summary.totalItems > 1000);
});

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");
const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

test("writing communication topic carousel has arrow controls without a visible scrollbar", () => {
  assert.match(appSource, /data-write-topic-scroll="prev"/);
  assert.match(appSource, /data-write-topic-scroll="next"/);
  assert.match(appSource, /const writeTopicScrollBtn = event\.target\.closest\("\[data-write-topic-scroll\]"\)[\s\S]*querySelector\("\.write-communication-topic-carousel"\)[\s\S]*scrollBy\(\{ left: direction \* scrollStep, behavior: "smooth" \}\)/);
  assert.match(styles, /\.write-communication-topic-carousel\s*\{[^}]*scrollbar-width:\s*none[^}]*-ms-overflow-style:\s*none/s);
  assert.match(styles, /\.write-communication-topic-carousel::-webkit-scrollbar\s*\{[^}]*display:\s*none/s);
  assert.match(styles, /\.write-communication-topic-nav\s*\{[^}]*grid-area:\s*carousel[^}]*place-items:\s*center/s);
  assert.match(styles, /\.write-communication-topic-nav--prev\s*\{[^}]*justify-self:\s*start/s);
  assert.match(styles, /\.write-communication-topic-nav--next\s*\{[^}]*justify-self:\s*end/s);
});

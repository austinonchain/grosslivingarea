#!/usr/bin/env node
// Branded 1200x630 hero/OG images for every pillar and question page.
// Same pipeline as MeasureFloorPlan's scripts/article-hero: render an HTML
// card, screenshot with Playwright's cached headless Chromium, palette-compress
// with sharp. Output: public/og/<slug>.png (also shown under the h1).
// Usage: node scripts/article-hero/generate.mjs [slug ...]   (no args = all)
import { writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import os from 'node:os';

const require = createRequire(import.meta.url);
const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, '../..');
const fontUrl = `file://${path.join(here, 'dm-sans-latin.woff2')}`;
const outRoot = path.join(repo, 'public/og');
const WIDTH = 1200, HEIGHT = 630;

const { pillars, questions } = await import(path.join(repo, 'lib/questions.js')).catch(async () => {
  // lib/questions.js uses extensionless imports; load the content files directly.
  const a = await import(path.join(repo, 'lib/content/ansi.js'));
  const c = await import(path.join(repo, 'lib/content/counts.js'));
  return { pillars: [a.ansiPillar, c.countsPillar], questions: [...a.ansiQuestions, ...c.countsQuestions] };
});

const shells = readdirSync(path.join(os.homedir(), '.cache/ms-playwright')).filter((d) => d.startsWith('chromium_headless_shell-')).sort();
const shell = shells.length && path.join(os.homedir(), '.cache/ms-playwright', shells[shells.length - 1], 'chrome-headless-shell-linux64/chrome-headless-shell');
if (!shell || !existsSync(shell)) { console.error('headless chromium not found; run: npx playwright install chromium'); process.exit(1); }

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// House cross-section: two above-grade floors (blue), a basement below the
// grade line (grey), a dimension bracket labelled GLA on the above-grade part.
const HOUSE = `<svg width="360" height="200" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M40 88 L160 18 L280 88" stroke="#1d4ed8" stroke-width="6" stroke-linejoin="round" fill="#eff6ff"/>
  <rect x="58" y="88" width="204" height="52" fill="#dbeafe" stroke="#1d4ed8" stroke-width="5"/>
  <rect x="58" y="140" width="204" height="44" fill="#f3f4f6" stroke="#9ca3af" stroke-width="4"/>
  <line x1="18" y1="140" x2="342" y2="140" stroke="#111827" stroke-width="4" stroke-dasharray="10 7"/>
  <text x="262" y="132" text-anchor="end" font-family="DM Sans" font-size="15" font-weight="700" fill="#111827">GRADE</text>
  <line x1="286" y1="52" x2="286" y2="138" stroke="#2563eb" stroke-width="3"/>
  <path d="M286 52 l-5 10 h10 z" fill="#2563eb"/>
  <path d="M286 138 l-5 -10 h10 z" fill="#2563eb"/>
    <text x="298" y="100" font-family="DM Sans" font-size="18" font-weight="800" fill="#1d4ed8">GLA</text>
  <text x="160" y="172" text-anchor="middle" font-family="DM Sans" font-size="15" font-weight="700" fill="#6b7280">BELOW GRADE</text>
</svg>`;

const tile = (size, radius, font) =>
  `<div style="width:${size}px;height:${size}px;background:#2563eb;border-radius:${radius}px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:${font}px">G</div>`;

const html = ({ title, section }) => {
  const size = title.length > 72 ? 44 : title.length > 48 ? 52 : 60;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face { font-family: "DM Sans"; font-style: normal; font-weight: 100 1000; src: url("${fontUrl}") format("woff2"); }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: ${WIDTH}px; height: ${HEIGHT}px; font-family: "DM Sans", sans-serif;
    background: linear-gradient(rgba(37,99,235,0.07) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(37,99,235,0.07) 1.5px, transparent 1.5px),
      linear-gradient(rgba(37,99,235,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.045) 1px, transparent 1px), linear-gradient(160deg, #ffffff 55%, #eff6ff);
    background-size: 120px 120px, 120px 120px, 24px 24px, 24px 24px, 100% 100%;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 36px; padding: 96px 80px 84px; position: relative; -webkit-font-smoothing: antialiased; }
  .brand { position: absolute; top: 34px; left: 44px; display: flex; align-items: center; gap: 13px; font-size: 27px; font-weight: 700; color: #111827; }
  .card { background: #fff; border-radius: 28px; padding: 16px 30px 6px; border: 3px solid #dbeafe; box-shadow: 0 14px 28px -10px rgb(30 58 138 / 0.20); }
  h1 { font-size: ${size}px; font-weight: 800; color: #111827; text-align: center; letter-spacing: -1px; line-height: 1.16; max-width: 1030px; }
  .site { position: absolute; bottom: 34px; left: 0; right: 0; text-align: center; font-size: 26px; font-weight: 700; color: #2563eb; }
</style></head><body>
  <div class="brand">${tile(42, 10, 22)}GrossLivingArea</div>
  <div class="card">${HOUSE}</div>
  <h1>${esc(title)}</h1>
  <div class="site">grosslivingarea.com${section ? ` &middot; ${esc(section)}` : ''}</div>
</body></html>`;
};

const all = [
  ...pillars.map((p) => ({ slug: p.slug, title: p.title, section: 'Guide' })),
  ...questions.map((q) => ({ slug: q.slug, title: q.question, section: (pillars.find((p) => p.slug === q.pillar) || {}).shortTitle || '' })),
];
const only = process.argv.slice(2);
const targets = only.length ? all.filter((a) => only.includes(a.slug)) : all;

let sharp = null;
try { sharp = require('sharp'); } catch { console.warn('sharp unavailable, writing uncompressed PNGs'); }
const tmp = path.join(os.tmpdir(), `gla-hero-${process.pid}.html`);
mkdirSync(outRoot, { recursive: true });
for (const a of targets) {
  const out = path.join(outRoot, `${a.slug}.png`);
  writeFileSync(tmp, html(a));
  execFileSync(shell, ['--headless', '--no-sandbox', '--disable-gpu', '--force-device-scale-factor=1', '--hide-scrollbars', `--window-size=${WIDTH},${HEIGHT}`, `--screenshot=${out}`, `file://${tmp}`], { stdio: 'pipe' });
  if (sharp) writeFileSync(out, await sharp(out).png({ palette: true, quality: 90, compressionLevel: 9 }).toBuffer());
  console.log(`wrote public/og/${a.slug}.png`);
}
console.log(`${targets.length} images`);

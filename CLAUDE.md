# GrossLivingArea.com

Next.js (App Router, JS not TS) on Vercel. No DB, no auth. All content is data in `lib/content/*.js` (one file per pillar), assembled by `lib/questions.js`.

Rules:
- Keep it simple. No new dependencies without a reason.
- No em dashes in any customer-facing copy.
- ANSI Z765 text is copyrighted: paraphrase and explain, never reproduce.
- Push straight to main. Vercel builds; do not build locally.
- URL scheme is FLAT: `/<pillar-slug>` and `/<question-slug>`, one `app/[slug]` route. Never change slugs without a redirect in `next.config.mjs`.
- Every page has a hero at `public/og/<slug>.png`. After adding or retitling a page run `node scripts/article-hero/generate.mjs <slug>` and commit the PNG.
- Follow the on-page SEO checklist: metaTitle as `Keyword | Benefit` (layout adds the brand), description 150-160 chars, answer in the first two sentences, visible FAQ only when it has schema.

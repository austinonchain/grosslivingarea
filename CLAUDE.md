# GrossLivingArea.com

Next.js (App Router, JS not TS) on Vercel. No DB, no auth. All content is data in `lib/questions.js`.

Rules:
- Keep it simple. No new dependencies without a reason.
- No em dashes in any customer-facing copy.
- ANSI Z765 text is copyrighted: paraphrase and explain, never reproduce.
- Push straight to main. Vercel builds; do not build locally.
- URL scheme: `/<pillar>` and `/<pillar>/<question-slug>`. Never change slugs without a redirect in `next.config.mjs`.

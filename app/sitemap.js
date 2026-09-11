import { SITE_URL } from '@/lib/site';
import { pillars, questions, stateHubs } from '@/lib/questions';

export default function sitemap() {
  return [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1 },
    ...pillars.map((p) => ({ url: `${SITE_URL}/${p.slug}`, changeFrequency: 'weekly', priority: 0.8 })),
    ...stateHubs.map((h) => ({ url: `${SITE_URL}/${h.slug}`, changeFrequency: 'monthly', priority: 0.7 })),
    ...questions.map((q) => ({ url: `${SITE_URL}/${q.slug}`, changeFrequency: 'monthly', priority: 0.6 })),
    ...['terms', 'privacy', 'cookies'].map((s) => ({ url: `${SITE_URL}/${s}`, changeFrequency: 'yearly', priority: 0.1 })),
  ];
}

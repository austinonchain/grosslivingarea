import { SITE_URL } from '@/lib/site';
import { pillars, questions, stateHubs, statesIndex, faqIndex, faqEntries, glossaryIndex, glossaryTerms } from '@/lib/questions';

export default function sitemap() {
  return [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1 },
    ...pillars.map((p) => ({ url: `${SITE_URL}/${p.slug}`, changeFrequency: 'weekly', priority: 0.8 })),
    { url: `${SITE_URL}/${statesIndex.slug}`, changeFrequency: 'monthly', priority: 0.8 },
    ...stateHubs.map((h) => ({ url: `${SITE_URL}/${h.slug}`, changeFrequency: 'monthly', priority: 0.7 })),
    ...questions.map((q) => ({ url: `${SITE_URL}/${q.slug}`, changeFrequency: 'monthly', priority: 0.6 })),
    ...[faqIndex, glossaryIndex].map((x) => ({ url: `${SITE_URL}/${x.slug}`, changeFrequency: 'monthly', priority: 0.7 })),
    ...[...faqEntries, ...glossaryTerms].map((x) => ({ url: `${SITE_URL}/${x.slug}`, changeFrequency: 'monthly', priority: 0.5 })),
    ...['terms', 'privacy', 'cookies'].map((s) => ({ url: `${SITE_URL}/${s}`, changeFrequency: 'yearly', priority: 0.1 })),
  ];
}

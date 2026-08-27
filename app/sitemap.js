import { SITE_URL } from '@/lib/site';
import { pillars, questions } from '@/lib/questions';

export default function sitemap() {
  return [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1 },
    ...pillars.map((p) => ({ url: `${SITE_URL}/${p.slug}`, changeFrequency: 'weekly', priority: 0.8 })),
    ...questions.map((q) => ({ url: `${SITE_URL}/${q.slug}`, changeFrequency: 'monthly', priority: 0.6 })),
  ];
}

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL } from '@/lib/site';
import { pillars, getPillar, questionsForPillar } from '@/lib/questions';

export function generateStaticParams() {
  return pillars.map((p) => ({ pillar: p.slug }));
}

export async function generateMetadata({ params }) {
  const { pillar } = await params;
  const p = getPillar(pillar);
  if (!p) return {};
  return {
    title: p.metaTitle || p.title,
    description: p.description,
    alternates: { canonical: `${SITE_URL}/${p.slug}` },
    openGraph: { title: p.metaTitle || p.title, description: p.description, url: `${SITE_URL}/${p.slug}` },
  };
}

export default async function PillarPage({ params }) {
  const { pillar } = await params;
  const p = getPillar(pillar);
  if (!p) notFound();
  const qs = questionsForPillar(p.slug);
  return (
    <>
      <h1>{p.title}</h1>
      {p.intro && p.intro.map((para, i) => <p key={i}>{para}</p>)}
      <h2>Questions</h2>
      <ul className="question-list">
        {qs.map((q) => (
          <li key={q.slug}>
            <Link href={`/${p.slug}/${q.slug}`}>{q.question}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

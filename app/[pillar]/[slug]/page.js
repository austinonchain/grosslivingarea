import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL } from '@/lib/site';
import { questions, getQuestion, getPillar } from '@/lib/questions';

export function generateStaticParams() {
  return questions.map((q) => ({ pillar: q.pillar, slug: q.slug }));
}

export async function generateMetadata({ params }) {
  const { pillar, slug } = await params;
  const q = getQuestion(slug);
  if (!q || q.pillar !== pillar) return {};
  const url = `${SITE_URL}/${q.pillar}/${q.slug}`;
  return {
    title: q.metaTitle || q.question,
    description: q.description || q.shortAnswer,
    alternates: { canonical: url },
    openGraph: { title: q.metaTitle || q.question, description: q.description || q.shortAnswer, url },
  };
}

export default async function QuestionPage({ params }) {
  const { pillar, slug } = await params;
  const q = getQuestion(slug);
  if (!q || q.pillar !== pillar) notFound();
  const p = getPillar(q.pillar);
  const related = (q.related || []).map(getQuestion).filter(Boolean);
  return (
    <>
      <p><Link href="/">Topics</Link> / <Link href={`/${p.slug}`}>{p.title}</Link></p>
      <h1>{q.question}</h1>
      <div className="answer">{q.shortAnswer}</div>
      {(q.body || []).map((section, i) => (
        <section key={i}>
          {section.heading && <h2>{section.heading}</h2>}
          {section.paragraphs.map((para, j) => <p key={j}>{para}</p>)}
        </section>
      ))}
      {related.length > 0 && (
        <>
          <h2>Related questions</h2>
          <ul className="question-list">
            {related.map((r) => (
              <li key={r.slug}><Link href={`/${r.pillar}/${r.slug}`}>{r.question}</Link></li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

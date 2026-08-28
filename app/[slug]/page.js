import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL, SITE_NAME } from '@/lib/site';
import { pillars, questions, getQuestion, getPillar, questionsForPillar } from '@/lib/questions';
import { Inline, Section } from '@/lib/render';

export function generateStaticParams() {
  return [...pillars.map((p) => ({ slug: p.slug })), ...questions.map((q) => ({ slug: q.slug }))];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const entry = getPillar(slug) || getQuestion(slug);
  if (!entry) return {};
  const url = `${SITE_URL}/${entry.slug}`;
  const title = entry.metaTitle || entry.title || entry.question;
  return {
    title,
    description: entry.description,
    alternates: { canonical: url },
    openGraph: { title, description: entry.description, url, type: 'article', images: [{ url: `${SITE_URL}/og/${entry.slug}.png`, width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', images: [`${SITE_URL}/og/${entry.slug}.png`] },
  };
}

function fmtDate(d) {
  return new Date(d + 'T00:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}

function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default async function EntryPage({ params }) {
  const { slug } = await params;
  const pillar = getPillar(slug);
  if (pillar) return <PillarPage p={pillar} />;
  const q = getQuestion(slug);
  if (!q) notFound();
  return <QuestionPage q={q} />;
}

function Dates({ entry }) {
  return (
    <p className="text-[13px] text-gray-400 -mt-1 mb-5">
      Published {fmtDate(entry.published)}{entry.updated && entry.updated !== entry.published ? ` · Updated ${fmtDate(entry.updated)}` : ''}
    </p>
  );
}

function Faq({ faq }) {
  if (!faq?.length) return null;
  return (
    <section>
      <h2>Frequently asked questions</h2>
      {faq.map((f, i) => (
        <div key={i} className="[&_h3]:mb-1">
          <h3>{f.q}</h3>
          <p><Inline text={f.a} /></p>
        </div>
      ))}
    </section>
  );
}

function faqSchema(faq) {
  if (!faq?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') },
    })),
  };
}

function PillarPage({ p }) {
  const qs = questionsForPillar(p.slug);
  const others = pillars.filter((x) => x.slug !== p.slug);
  const url = `${SITE_URL}/${p.slug}`;
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: p.title, item: url },
      ] }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: p.title, description: p.description, url,
        datePublished: p.published, dateModified: p.updated || p.published,
        author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL } }} />
      {faqSchema(p.faq) && <JsonLd data={faqSchema(p.faq)} />}
      <nav className="text-[13px] text-gray-500 mb-2"><Link href="/">Home</Link> / <span>{p.title}</span></nav>
      <h1>{p.title}</h1>
      <Dates entry={p} />
      <img className="block w-full h-auto rounded-xl border border-gray-200 mb-5" src={`/og/${p.slug}.png`} alt={p.title} width={1200} height={630} />
      {(p.intro || []).map((para, i) => <p key={i}><Inline text={para} /></p>)}
      {(p.body || []).map((s, i) => <Section key={i} section={s} />)}
      <section>
        <h2>{p.childrenHeading || 'Every question in this guide'}</h2>
        <ul className="list-none p-0 m-0 [&_li]:py-3 [&_li]:mb-0 [&_li]:border-b [&_li]:border-line [&_a]:no-underline [&_a]:font-medium">
          {qs.map((q) => (
            <li key={q.slug}><Link href={`/${q.slug}`}>{q.question}</Link></li>
          ))}
        </ul>
      </section>
      <Faq faq={p.faq} />
      {others.length > 0 && (
        <section>
          <h2>Explore our other complete guides</h2>
          <ul className="list-none p-0 m-0 [&_li]:py-3 [&_li]:mb-0 [&_li]:border-b [&_li]:border-line [&_a]:no-underline [&_a]:font-medium">
            {others.map((o) => <li key={o.slug}><Link href={`/${o.slug}`}>{o.title}</Link></li>)}
          </ul>
        </section>
      )}
    </>
  );
}

function QuestionPage({ q }) {
  const p = getPillar(q.pillar);
  const siblings = questionsForPillar(q.pillar);
  const idx = siblings.findIndex((s) => s.slug === q.slug);
  const neighbors = [siblings[idx - 1], siblings[idx + 1]].filter(Boolean);
  const related = [...neighbors, ...(q.related || []).map(getQuestion).filter(Boolean)]
    .filter((r, i, arr) => r && r.slug !== q.slug && arr.findIndex((x) => x.slug === r.slug) === i);
  const url = `${SITE_URL}/${q.slug}`;
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: p.title, item: `${SITE_URL}/${p.slug}` },
        { '@type': 'ListItem', position: 3, name: q.question, item: url },
      ] }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: q.question, description: q.description, url,
        datePublished: q.published, dateModified: q.updated || q.published,
        author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL } }} />
      {faqSchema(q.faq) && <JsonLd data={faqSchema(q.faq)} />}
      <nav className="text-[13px] text-gray-500 mb-2"><Link href="/">Home</Link> / <Link href={`/${p.slug}`}>{p.shortTitle || p.title}</Link> / <span>{q.question}</span></nav>
      <h1>{q.question}</h1>
      <Dates entry={q} />
      <img className="block w-full h-auto rounded-xl border border-gray-200 mb-5" src={`/og/${q.slug}.png`} alt={q.question} width={1200} height={630} />
      <div className="border-l-4 border-accent bg-[#f4f7fc] px-5 py-4 mb-7"><Inline text={q.shortAnswer} /></div>
      {(q.body || []).map((s, i) => <Section key={i} section={s} />)}
      <Faq faq={q.faq} />
      {q.sources?.length > 0 && (
        <section>
          <h2>Sources</h2>
          <ul>{q.sources.map((s, i) => <li key={i}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}</ul>
        </section>
      )}
      <section>
        <h2>Related questions</h2>
        <ul className="list-none p-0 m-0 [&_li]:py-3 [&_li]:mb-0 [&_li]:border-b [&_li]:border-line [&_a]:no-underline [&_a]:font-medium">
          {related.map((r) => <li key={r.slug}><Link href={`/${r.slug}`}>{r.question}</Link></li>)}
          <li><Link href={`/${p.slug}`}>Back to the full guide: {p.title}</Link></li>
        </ul>
      </section>
    </>
  );
}

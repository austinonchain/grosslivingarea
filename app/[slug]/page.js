import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL, SITE_NAME, ORG_ID, WEBSITE_ID, LOGO_URL } from '@/lib/site';
import { pillars, questions, getQuestion, getPillar, questionsForPillar, stateQuestionsFor } from '@/lib/questions';
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

function articleSchema(entry, headline) {
  const url = `${SITE_URL}/${entry.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    description: entry.description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: { '@type': 'ImageObject', url: `${SITE_URL}/og/${entry.slug}.png`, width: 1200, height: 630 },
    datePublished: entry.published,
    dateModified: entry.updated || entry.published,
    inLanguage: 'en-US',
    isPartOf: { '@id': WEBSITE_ID },
    author: { '@type': 'Organization', '@id': ORG_ID, name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', '@id': ORG_ID, name: SITE_NAME, url: SITE_URL, logo: { '@type': 'ImageObject', url: LOGO_URL, width: 512, height: 512 } },
  };
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
      <JsonLd data={articleSchema(p, p.title)} />
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
  const parent = q.kind === 'state' ? getQuestion(q.parent) : null;
  const siblings = q.kind === 'state' ? stateQuestionsFor(q.parent) : questionsForPillar(q.pillar);
  const idx = siblings.findIndex((s) => s.slug === q.slug);
  const neighbors = q.kind === 'state' ? [] : [siblings[idx - 1], siblings[idx + 1]].filter(Boolean);
  const related = [...neighbors, ...(q.related || []).map(getQuestion).filter(Boolean)]
    .filter((r, i, arr) => r && r.slug !== q.slug && arr.findIndex((x) => x.slug === r.slug) === i)
    .slice(0, 4);
  const states = stateQuestionsFor(q.slug);
  const url = `${SITE_URL}/${q.slug}`;
  const crumbs = [
    { name: 'Home', item: SITE_URL },
    { name: p.title, item: `${SITE_URL}/${p.slug}` },
    ...(parent ? [{ name: parent.question, item: `${SITE_URL}/${parent.slug}` }] : []),
    { name: q.question, item: url },
  ];
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })) }} />
      <JsonLd data={articleSchema(q, q.question)} />
      {faqSchema(q.faq) && <JsonLd data={faqSchema(q.faq)} />}
      <nav className="text-[13px] text-gray-500 mb-2"><Link href="/">Home</Link> / <Link href={`/${p.slug}`}>{p.shortTitle || p.title}</Link> / {parent && <><Link href={`/${parent.slug}`}>{parent.question}</Link> / </>}<span>{q.kind === 'state' ? q.stateName : q.question}</span></nav>
      <h1>{q.question}</h1>
      {q.kind !== 'state' && <Dates entry={q} />}
      {q.kind !== 'state' && <img className="block w-full h-auto rounded-xl border border-gray-200 mb-5" src={`/og/${q.slug}.png`} alt={q.question} width={1200} height={630} />}
      <div className="border-l-4 border-accent bg-[#f4f7fc] px-5 py-4 mb-7"><Inline text={q.shortAnswer} /></div>
      {(q.body || []).map((s, i) => <Section key={i} section={s} />)}
      {states.length > 0 && (
        <section>
          <h2>{q.stateHeading || 'The answer by state'}</h2>
          <p>The ANSI Z765 answer is the same everywhere. Each state page adds how common basements are there, how many are finished, how many owners count them, and a calculator.</p>
          <ul className="list-none p-0 m-0 grid grid-cols-2 sm:grid-cols-3 gap-x-4 [&_li]:py-1.5 [&_li]:mb-0 [&_a]:no-underline">
            {states.map((s) => <li key={s.slug}><Link href={`/${s.slug}`}>{s.stateName}</Link></li>)}
          </ul>
        </section>
      )}
      <Faq faq={q.faq} />
      <section>
        <h2>Related questions</h2>
        <ul className="list-none p-0 m-0 [&_li]:py-3 [&_li]:mb-0 [&_li]:border-b [&_li]:border-line [&_a]:no-underline [&_a]:font-medium">
          {related.map((r) => <li key={r.slug}><Link href={`/${r.slug}`}>{r.question}</Link></li>)}
          {parent && <li><Link href={`/${parent.slug}`}>Every state: {parent.question}</Link></li>}
          <li><Link href={`/${p.slug}`}>Back to the full guide: {p.title}</Link></li>
        </ul>
      </section>
    </>
  );
}

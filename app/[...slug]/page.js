import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL, SITE_NAME, ORG_ID, WEBSITE_ID, LOGO_URL } from '@/lib/site';
import { pillars, questions, getQuestion, getPillar, questionsForPillar, stateHubs, getStateHub } from '@/lib/questions';
import { getState, nearbyStates } from '@/lib/states';
import { Inline, Section } from '@/lib/render';

export function generateStaticParams() {
  return [...pillars.map((p) => ({ slug: [p.slug] })), ...stateHubs.map((h) => ({ slug: [h.slug] })), ...questions.map((q) => ({ slug: q.slug.split('/') }))];
}

export async function generateMetadata({ params }) {
  const slug = (await params).slug.join('/');
  const entry = getPillar(slug) || getStateHub(slug) || getQuestion(slug);
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

// State-page answer callout: green for a "Yes" answer, red for "No", blue accent otherwise.
function verdictLineClasses(line = '') {
  const t = line.trim().toLowerCase();
  if (/^yes\b/.test(t)) return 'border-green-600 bg-green-50';
  if (/^no\b/.test(t)) return 'border-red-600 bg-red-50';
  return 'border-accent bg-[#f4f7fc]';
}

function fmtDate(d) {
  return new Date(d + 'T00:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}

function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default async function EntryPage({ params }) {
  const slug = (await params).slug.join('/');
  const pillar = getPillar(slug);
  if (pillar) return <PillarPage p={pillar} />;
  const hub = getStateHub(slug);
  if (hub) return <StateHubPage h={hub} />;
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
  if (q.kind === 'state') return <StateQuestionPage q={q} />;
  const p = getPillar(q.pillar);
  const siblings = questionsForPillar(q.pillar);
  const idx = siblings.findIndex((s) => s.slug === q.slug);
  const neighbors = [siblings[idx - 1], siblings[idx + 1]].filter(Boolean);
  const related = [...neighbors, ...(q.related || []).map(getQuestion).filter(Boolean)]
    .filter((r, i, arr) => r && r.slug !== q.slug && arr.findIndex((x) => x.slug === r.slug) === i)
    .slice(0, 4);
  const url = `${SITE_URL}/${q.slug}`;
  const crumbs = [
    { name: 'Home', item: SITE_URL },
    { name: p.title, item: `${SITE_URL}/${p.slug}` },
    { name: q.question, item: url },
  ];
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })) }} />
      <JsonLd data={articleSchema(q, q.question)} />
      {faqSchema(q.faq) && <JsonLd data={faqSchema(q.faq)} />}
      <nav className="text-[13px] text-gray-500 mb-2"><Link href="/">Home</Link> / <Link href={`/${p.slug}`}>{p.shortTitle || p.title}</Link> / <span>{q.question}</span></nav>
      <h1>{q.question}</h1>
      <Dates entry={q} />
      <img className="block w-full h-auto rounded-xl border border-gray-200 mb-5" src={`/og/${q.slug}.png`} alt={q.question} width={1200} height={630} />
      <div className="border-l-4 border-accent bg-[#f4f7fc] px-5 py-4 mb-7"><Inline text={q.shortAnswer} /></div>
      {(q.body || []).map((s, i) => <Section key={i} section={s} />)}
      <Faq faq={q.faq} />
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

const linkList = 'list-none p-0 m-0 [&_li]:py-3 [&_li]:mb-0 [&_li]:border-b [&_li]:border-line [&_a]:no-underline [&_a]:font-medium';

// /<state>/<feature>: verdict headline, body, FAQ, then the same question in the five nearest states.
function StateQuestionPage({ q }) {
  const hub = getStateHub(q.slug.split('/')[0]);
  const st = getState(hub.slug);
  const feature = q.slug.split('/')[1];
  const nearby = nearbyStates(st, 5).map((s) => ({ ...s, q: getQuestion(`${s.slug}/${feature}`) })).filter((s) => s.q);
  const url = `${SITE_URL}/${q.slug}`;
  const crumbs = [{ name: 'Home', item: SITE_URL }, { name: hub.stateName, item: `${SITE_URL}/${hub.slug}` }, { name: q.question, item: url }];
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })) }} />
      <JsonLd data={articleSchema(q, q.question)} />
      {faqSchema(q.faq) && <JsonLd data={faqSchema(q.faq)} />}
      <nav className="text-[13px] text-gray-500 mb-2"><Link href="/">Home</Link> / <Link href={`/${hub.slug}`}>{hub.stateName}</Link> / <span>{q.question}</span></nav>
      <h1>{q.question}</h1>
      <div className={`border-l-4 px-5 py-4 mb-5 ${verdictLineClasses(q.verdictLine)}`}><p className="text-[1.35rem] sm:text-[1.5rem] leading-snug font-bold mb-0">{q.verdictLine}</p></div>
      <p><Inline text={q.shortAnswer} /></p>
      {(q.body || []).map((s, i) => <Section key={i} section={s} />)}
      <Faq faq={q.faq} />
      <section>
        <h2>Nearby states</h2>
        <ul className={linkList}>
          {nearby.map((s) => <li key={s.slug}><Link href={`/${s.q.slug}`}>{s.q.question}</Link></li>)}
        </ul>
      </section>
    </>
  );
}

// /<state>: hub listing every room-type page for the state.
function StateHubPage({ h }) {
  const st = getState(h.slug);
  const nearby = nearbyStates(st, 5);
  const url = `${SITE_URL}/${h.slug}`;
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: h.stateName, item: url },
      ] }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'CollectionPage', '@id': `${url}#webpage`, url, name: h.title, description: h.description, isPartOf: { '@id': WEBSITE_ID }, inLanguage: 'en-US',
        mainEntity: { '@type': 'ItemList', itemListElement: h.features.map((f, i) => ({ '@type': 'ListItem', position: i + 1, name: f.question, url: `${SITE_URL}/${f.slug}` })) } }} />
      <nav className="text-[13px] text-gray-500 mb-2"><Link href="/">Home</Link> / <span>{h.stateName}</span></nav>
      <h1>{h.title}</h1>
      {h.intro.map((para, i) => <p key={i}><Inline text={para} /></p>)}
      <section>
        <h2>Every room type in {h.stateName}</h2>
        <ul className={linkList}>
          {h.features.map((f) => <li key={f.slug}><Link href={`/${f.slug}`}>{f.question}</Link></li>)}
        </ul>
      </section>
      <section>
        <h2>Nearby states</h2>
        <ul className={linkList}>
          {nearby.map((s) => <li key={s.slug}><Link href={`/${s.slug}`}>What counts as square footage in {s.name}?</Link></li>)}
        </ul>
      </section>
    </>
  );
}

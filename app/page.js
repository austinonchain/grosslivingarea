import Link from 'next/link';
import { pillars, stateHubs } from '@/lib/questions';
import { SITE_URL, ORG_ID, WEBSITE_ID } from '@/lib/site';

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: 'Gross Living Area, Explained',
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORG_ID },
  inLanguage: 'en-US',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: pillars.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.title, url: `${SITE_URL}/${p.slug}` })),
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />
      <section className="text-center pt-7 pb-9 mb-9 border-b border-line">
        <h1 className="text-[2rem] sm:text-[2.6rem] tracking-tight mb-3.5">Gross Living Area, Explained</h1>
        <p className="text-muted max-w-[600px] mx-auto mb-5">
          Plain-English answers to every square footage question: what counts as gross living
          area under ANSI Z765, what does not, and why.
        </p>
      </section>

      <section>
        <h2 className="mt-0">See what counts as square footage in your state</h2>
        <ul className="list-none p-0 m-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 [&_li]:py-1.5 [&_li]:mb-0 [&_a]:no-underline [&_a]:font-medium">
          {stateHubs.map((h) => <li key={h.slug}><Link href={`/${h.slug}`}>{h.stateName}</Link></li>)}
        </ul>
      </section>

      <section>
        <h2>Complete guides</h2>
        {pillars.length === 0 ? (
          <p>Content coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p) => {
              return (
                <Link key={p.slug} href={`/${p.slug}`} className="group block min-w-0 overflow-hidden rounded-xl border border-line bg-white text-ink no-underline transition hover:border-accent hover:shadow-[0_6px_20px_rgba(31,95,191,.12)]">
                  <img src={`/og/${p.slug}.png`} alt="" width={1200} height={630} className="block w-full max-w-full h-auto border-b border-line" />
                  <div className="px-5 pt-4.5 pb-5">
                    <h3 className="mt-0 mb-2 text-[1.25rem] leading-snug">{p.title}</h3>
                    <p className="text-muted text-[15px] mb-3">{p.description}</p>
                    <span className="text-sm font-semibold text-accent">Read the guide &rarr;</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}

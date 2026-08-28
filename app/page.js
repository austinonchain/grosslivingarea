import Link from 'next/link';
import { pillars, questions, questionsForPillar } from '@/lib/questions';

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <p className="eyebrow">ANSI Z765 square footage reference</p>
        <h1>Gross Living Area, Explained</h1>
        <p className="sub">
          Plain-English answers to every square footage question: what counts as gross living
          area under ANSI Z765, what does not, and why.
        </p>
        <div className="hero-stats">
          <span><strong>{questions.length}</strong> questions answered</span>
          <span><strong>{pillars.length}</strong> complete guides</span>
          <span><strong>ANSI Z765-2021</strong> and Fannie Mae rules</span>
        </div>
      </section>

      <section className="guides">
        <h2>Complete guides</h2>
        {pillars.length === 0 ? (
          <p>Content coming soon.</p>
        ) : (
          <div className="guide-grid">
            {pillars.map((p) => {
              const qs = questionsForPillar(p.slug);
              return (
                <Link key={p.slug} href={`/${p.slug}`} className="guide-card">
                  <img src={`/og/${p.slug}.png`} alt="" width={1200} height={630} />
                  <div className="guide-body">
                    <span className="guide-kicker">{p.shortTitle}</span>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <span className="guide-meta">{qs.length} questions · Read the guide &rarr;</span>
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

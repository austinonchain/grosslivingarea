import Link from 'next/link';
import { pillars } from '@/lib/questions';

export default function Home() {
  return (
    <>
      <h1>Gross Living Area, Explained</h1>
      <p>
        Plain-English answers to every square footage question: what counts as gross living
        area under ANSI Z765, what does not, and why.
      </p>
      {pillars.length === 0 ? (
        <p>Content coming soon.</p>
      ) : (
        <ul className="pillar-list">
          {pillars.map((p) => (
            <li key={p.slug}>
              <Link href={`/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

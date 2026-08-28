import './globals.css';
import Link from 'next/link';
import { DM_Sans } from 'next/font/google';
import { SITE_URL, SITE_NAME } from '@/lib/site';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Gross Living Area | ANSI Z765 Square Footage Rules Explained',
    template: '%s | GrossLivingArea',
  },
  description:
    'Plain-English answers to every square footage question: what counts as gross living area under ANSI Z765, what does not, and why.',
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <header className="border-b border-line py-3.5">
          <div className="mx-auto max-w-[760px] px-5">
            <Link href="/" className="text-lg font-bold text-ink no-underline">{SITE_NAME}.com</Link>
          </div>
        </header>
        <main className="pt-9 pb-16">
          <div className="mx-auto max-w-[760px] px-5">{children}</div>
        </main>
        <footer className="border-t border-line py-6 text-sm text-muted [&_a]:text-muted">
          <div className="mx-auto max-w-[760px] px-5">
            <p className="mb-1 text-ink">Every article on this site is reviewed by a California Certified Residential Appraiser.</p>
            <p className="mb-0">&copy; {new Date().getFullYear()} {SITE_NAME}. General information only, not an appraisal or legal opinion.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

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
  title: 'Gross Living Area | ANSI Z765 Square Footage Rules Explained',
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
        <header className="site">
          <div className="container">
            <Link href="/" className="brand">{SITE_NAME}</Link>
            <nav>
              <Link href="/">Topics</Link>
            </nav>
          </div>
        </header>
        <main>
          <div className="container">{children}</div>
        </main>
        <footer className="site">
          <div className="container">
            &copy; {new Date().getFullYear()} {SITE_NAME}. General information only, not an appraisal or legal opinion.
          </div>
        </footer>
      </body>
    </html>
  );
}

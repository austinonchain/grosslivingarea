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
          <div className="mx-auto max-w-[960px] px-5">
            <Link href="/" className="inline-flex items-center gap-2.5 text-[22px] sm:text-2xl font-bold tracking-tight text-ink no-underline">
              <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="64" height="64" rx="12" fill="#1f5fbf"/>
                <path d="M12 30 L32 12 L52 30" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" fill="#dbeafe"/>
                <rect x="16" y="30" width="32" height="12" fill="#dbeafe" stroke="#ffffff" stroke-width="3"/>
                <rect x="16" y="42" width="32" height="10" fill="#93c5fd" stroke="#ffffff" stroke-width="3" opacity="0.7"/>
                <line x1="6" y1="42" x2="58" y2="42" stroke="#ffffff" stroke-width="3" stroke-dasharray="5 4"/>
              </svg>
              <span>{SITE_NAME}.com</span>
            </Link>
          </div>
        </header>
        <main className="pt-9 pb-16">
          <div className="mx-auto max-w-[960px] px-5">{children}</div>
        </main>
        <footer className="border-t border-line py-6 text-sm text-muted [&_a]:text-muted">
          <div className="mx-auto max-w-[960px] px-5">
            <p className="mb-1 text-ink">Every article on this site is reviewed by a California Certified Residential Appraiser.</p>
            <p className="mb-0">&copy; {new Date().getFullYear()} {SITE_NAME}. General information only, not an appraisal or legal opinion.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

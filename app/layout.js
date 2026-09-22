import './globals.css';
import Link from 'next/link';
import Script from 'next/script';
import { DM_Sans } from 'next/font/google';
import { SITE_URL, SITE_NAME, SITE_ENTITY, organizationSchema, websiteSchema } from '@/lib/site';

const siteJsonLd = { '@context': 'https://schema.org', '@graph': [organizationSchema, websiteSchema] };

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
  description: `${SITE_ENTITY} Plain-English answers to what counts as square footage, what does not, and why.`,
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
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
        <footer className="border-t border-line py-6 text-sm text-muted text-center [&_a]:text-muted">
          <div className="mx-auto max-w-[960px] px-5">
            <p className="mb-2 flex flex-wrap justify-center gap-x-5 gap-y-1">
              <Link href="/faq">FAQ</Link>
              <Link href="/glossary">Glossary</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/cookies">Cookies</Link>
            </p>
            <p className="mb-1">{SITE_ENTITY}</p>
            <p className="mb-0">&copy; {new Date().getFullYear()} {SITE_NAME}. General information only, not an appraisal or legal opinion.</p>
          </div>
        </footer>
        {/* Clicky, loaded through the first-party proxy paths in next.config.mjs. Cookies stay off: /cookies and /privacy promise none. */}
        <script dangerouslySetInnerHTML={{ __html: 'var clicky_custom=clicky_custom||{};clicky_custom.cookies_disable=1;' }} />
        <Script async data-id="101511973" src="/565c7bd254ac8.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How GrossLivingArea.com handles visitor data. No accounts, no cookies, cookieless analytics only.',
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <article>
      <h1>Privacy Policy</h1>
      <p className="text-muted">Effective date: September 18, 2026</p>

      <p>GrossLivingArea.com is a reference site. There are no accounts, no sign-ups, no forms, and no cookies. This page explains the small amount of data that is collected when you visit.</p>

      <h2>What we collect</h2>
      <p>We use Clicky, a web analytics service, to count visits. We run it with cookies turned off, and it shortens IP addresses so they are anonymized before they are stored. It records the pages visited, the referrer, your browser and device type, screen size, and approximate location. We cannot identify you from it. The analytics script loads from our own domain and its requests are passed on to Clicky.</p>
      <p>Our hosting provider (Vercel) keeps standard server logs, which may include your IP address, for security and operational purposes. These logs are retained for a short period and are not used to build profiles.</p>

      <h2>What we do not do</h2>
      <ul>
        <li>We do not set cookies or use local storage for tracking.</li>
        <li>We do not sell, rent, or share visitor data with anyone.</li>
        <li>We do not run retargeting or advertising pixels.</li>
        <li>We do not collect email addresses or any other contact details.</li>
      </ul>

      <h2>Links to other sites</h2>
      <p>Articles link to outside sources such as Fannie Mae, Home Innovation Research Labs, and our sister site MeasureFloorPlan.com. Those sites have their own privacy practices, which we do not control.</p>

      <h2>Advertising</h2>
      <p>If we add display advertising in the future, this policy and the <a href="/cookies">cookie policy</a> will be updated first to describe exactly what changes.</p>

      <h2>Children</h2>
      <p>The site is not directed at children under 13 and we do not knowingly collect any information from them.</p>

      <h2>Changes</h2>
      <p>If this policy changes, the effective date at the top will be updated. Continued use of the site after a change means you accept the updated policy.</p>

      <h2>Contact</h2>
      <p>Questions about privacy: <a href="mailto:hello@grosslivingarea.com">hello@grosslivingarea.com</a>.</p>
    </article>
  );
}

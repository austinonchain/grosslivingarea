import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: 'Cookie Policy',
  description: 'GrossLivingArea.com does not set cookies. Details on the cookieless analytics we use instead.',
  alternates: { canonical: `${SITE_URL}/cookies` },
};

export default function CookiesPage() {
  return (
    <article>
      <h1>Cookie Policy</h1>
      <p className="text-muted">Effective date: September 18, 2026</p>

      <p><strong>GrossLivingArea.com does not set cookies.</strong> There is nothing to accept or decline, which is why there is no cookie banner.</p>

      <h2>Analytics without cookies</h2>
      <p>The only third-party service on the site is Clicky, which we use to count visits. We run it with its cookies turned off, so it sets none, and the script does not use local storage. It shortens IP addresses so they are anonymized before they are stored. More detail is in our <a href="/privacy">privacy policy</a>.</p>

      <h2>Cookies set by others</h2>
      <p>Our host (Vercel) does not set cookies on this site. External sites we link to may set their own cookies once you leave; those are governed by their policies, not ours.</p>

      <h2>If this changes</h2>
      <p>If we ever add advertising or any other service that uses cookies, this page will list each cookie, its purpose, and its duration, and a consent notice will be added where the law requires one. Until then, the answer is simply that there are none.</p>

      <h2>Contact</h2>
      <p>Questions: <a href="mailto:hello@grosslivingarea.com">hello@grosslivingarea.com</a>. See also our <a href="/privacy">privacy policy</a>.</p>
    </article>
  );
}

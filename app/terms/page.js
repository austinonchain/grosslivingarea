import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: 'Terms of Use',
  description: 'Terms for using GrossLivingArea.com. General information about ANSI Z765 square footage rules, not an appraisal or legal advice.',
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <article>
      <h1>Terms of Use</h1>
      <p className="text-muted">Effective date: August 28, 2026</p>

      <p>By using GrossLivingArea.com you agree to these terms. If you do not agree, please do not use the site.</p>

      <h2>General information only</h2>
      <p>Everything on this site is general educational information about how residential square footage is measured and reported, chiefly under ANSI Z765-2021 and the guidelines of Fannie Mae, Freddie Mac, FHA, VA, and USDA. It is <strong>not an appraisal</strong>, not a measurement of any specific property, and not legal, lending, tax, or professional advice. Nothing here creates an appraiser-client relationship.</p>
      <p>Standards and lender guidelines change, local practice varies, and every house is different. Before relying on square footage for a sale, loan, dispute, or tax matter, confirm the rules with the lender involved and hire a licensed appraiser or professional measurer in your state.</p>

      <h2>Accuracy</h2>
      <p>We work to keep the content accurate and current, but we make no guarantee that it is complete, correct, or up to date. We may change or remove content at any time without notice.</p>

      <h2>Copyright and the ANSI standard</h2>
      <p>The text, tables, and images on this site are owned by GrossLivingArea.com unless otherwise noted. You may link to any page and quote short excerpts with attribution. You may not republish whole articles or use the content to train or build a competing product without written permission.</p>
      <p>ANSI Z765-2021 is copyrighted by Home Innovation Research Labs. This site explains and paraphrases the standard; it does not reproduce it. To read the standard itself, buy it from the publisher.</p>

      <h2>Outside links</h2>
      <p>We link to third-party sites, including government and lender resources and our sister site MeasureFloorPlan.com. We are not responsible for their content or availability.</p>

      <h2>No warranty and limitation of liability</h2>
      <p>The site is provided "as is" without warranty of any kind, express or implied. To the maximum extent permitted by law, GrossLivingArea.com and its operators are not liable for any loss or damage, direct or indirect, arising from use of or reliance on the site, including any decision about a property, a loan, or a transaction.</p>

      <h2>Acceptable use</h2>
      <p>Do not scrape the site at a rate that burdens the server, attempt to interfere with its operation, or use it for any unlawful purpose.</p>

      <h2>Changes and governing law</h2>
      <p>We may update these terms by posting a new version here with a new effective date. These terms are governed by the laws of the State of California, without regard to conflict-of-law rules.</p>

      <h2>Contact</h2>
      <p><a href="mailto:hello@grosslivingarea.com">hello@grosslivingarea.com</a>. See also our <a href="/privacy">privacy policy</a> and <a href="/cookies">cookie policy</a>.</p>
    </article>
  );
}

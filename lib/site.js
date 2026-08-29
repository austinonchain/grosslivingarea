export const SITE_URL = 'https://grosslivingarea.com';
export const SITE_NAME = 'GrossLivingArea';
export const SITE_EMAIL = 'hello@grosslivingarea.com';
export const MFP_URL = 'https://measurefloorplan.com';

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_URL = `${SITE_URL}/logo.png`;

export const SAME_AS = [
  'https://www.facebook.com/grosslivingarea/',
];

export const organizationSchema = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: { '@type': 'ImageObject', '@id': `${SITE_URL}/#logo`, url: LOGO_URL, width: 512, height: 512 },
  image: { '@id': `${SITE_URL}/#logo` },
  email: SITE_EMAIL,
  sameAs: SAME_AS,
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  description:
    'Plain-English answers to every square footage question: what counts as gross living area under ANSI Z765, what does not, and why.',
  inLanguage: 'en-US',
  publisher: { '@id': ORG_ID },
};

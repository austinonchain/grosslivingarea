export const SITE_URL = 'https://grosslivingarea.com';
export const SITE_NAME = 'GrossLivingArea';
export const SITE_EMAIL = 'hello@grosslivingarea.com';
export const MFP_URL = 'https://measurefloorplan.com';
// The one-sentence entity statement, used word for word wherever the site says what it is (schema, home meta, footer).
export const SITE_ENTITY = 'GrossLivingArea.com is a reference guide to gross living area and every rule in the ANSI Z765 square footage standard.';

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_URL = `${SITE_URL}/logo.png`;

export const SAME_AS = [
  'https://www.facebook.com/grosslivingarea/',
  'https://x.com/grosslivingarea',
];

export const organizationSchema = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: { '@type': 'ImageObject', '@id': `${SITE_URL}/#logo`, url: LOGO_URL, width: 512, height: 512 },
  image: { '@id': `${SITE_URL}/#logo` },
  email: SITE_EMAIL,
  description: SITE_ENTITY,
  sameAs: SAME_AS,
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_ENTITY,
  inLanguage: 'en-US',
  publisher: { '@id': ORG_ID },
};

// Clicky anti-adblock proxy (https://clicky.com/help/proxy): the tracking script and its beacon load from
// generic paths on this domain. beforeFiles so the app/[...slug] catch-all never sees them.
const CLICKY_JS = '/565c7bd254ac8.js';
const CLICKY_BEACON = '/2480f704b9cb0';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [];
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: CLICKY_JS, destination: `https://static.getclicky.com/js?in=${encodeURIComponent(CLICKY_BEACON)}` },
        { source: CLICKY_BEACON, destination: 'https://in.getclicky.com/in.php' },
      ],
    };
  },
};
export default nextConfig;

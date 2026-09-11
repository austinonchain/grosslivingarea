// The 50 states with Census region and an approximate geographic center (lat, lon) for "nearby states".
const NE = 'Northeast', MW = 'Midwest', S = 'South', W = 'West';
export const STATES = [
  ['AL', 'Alabama', S, 32.8, -86.8], ['AK', 'Alaska', W, 64.2, -152.5], ['AZ', 'Arizona', W, 34.3, -111.7], ['AR', 'Arkansas', S, 34.9, -92.4], ['CA', 'California', W, 37.2, -119.4],
  ['CO', 'Colorado', W, 39.0, -105.5], ['CT', 'Connecticut', NE, 41.6, -72.7], ['DE', 'Delaware', S, 39.0, -75.5], ['FL', 'Florida', S, 28.6, -82.4], ['GA', 'Georgia', S, 32.7, -83.4],
  ['HI', 'Hawaii', W, 20.8, -156.3], ['ID', 'Idaho', W, 44.4, -114.6], ['IL', 'Illinois', MW, 40.0, -89.2], ['IN', 'Indiana', MW, 39.9, -86.3], ['IA', 'Iowa', MW, 42.1, -93.5],
  ['KS', 'Kansas', MW, 38.5, -98.4], ['KY', 'Kentucky', S, 37.5, -85.3], ['LA', 'Louisiana', S, 31.1, -92.0], ['ME', 'Maine', NE, 45.4, -69.2], ['MD', 'Maryland', S, 39.0, -76.8],
  ['MA', 'Massachusetts', NE, 42.3, -71.8], ['MI', 'Michigan', MW, 44.3, -85.4], ['MN', 'Minnesota', MW, 46.3, -94.3], ['MS', 'Mississippi', S, 32.7, -89.7], ['MO', 'Missouri', MW, 38.4, -92.5],
  ['MT', 'Montana', W, 47.0, -109.6], ['NE', 'Nebraska', MW, 41.5, -99.8], ['NV', 'Nevada', W, 39.3, -116.6], ['NH', 'New Hampshire', NE, 43.7, -71.6], ['NJ', 'New Jersey', NE, 40.2, -74.7],
  ['NM', 'New Mexico', W, 34.4, -106.1], ['NY', 'New York', NE, 42.9, -75.5], ['NC', 'North Carolina', S, 35.6, -79.4], ['ND', 'North Dakota', MW, 47.5, -100.5], ['OH', 'Ohio', MW, 40.3, -82.8],
  ['OK', 'Oklahoma', S, 35.6, -97.5], ['OR', 'Oregon', W, 43.9, -120.6], ['PA', 'Pennsylvania', NE, 40.9, -77.8], ['RI', 'Rhode Island', NE, 41.7, -71.5], ['SC', 'South Carolina', S, 33.9, -80.9],
  ['SD', 'South Dakota', MW, 44.4, -100.2], ['TN', 'Tennessee', S, 35.9, -86.4], ['TX', 'Texas', S, 31.5, -99.3], ['UT', 'Utah', W, 39.3, -111.7], ['VT', 'Vermont', NE, 44.1, -72.7],
  ['VA', 'Virginia', S, 37.5, -78.8], ['WA', 'Washington', W, 47.4, -120.5], ['WV', 'West Virginia', S, 38.6, -80.6], ['WI', 'Wisconsin', MW, 44.6, -89.9], ['WY', 'Wyoming', W, 43.0, -107.6],
].map(([abbr, name, region, lat, lon]) => ({ abbr, name, region, lat, lon, slug: name.toLowerCase().replace(/ /g, '-') }));

export const getState = (slug) => STATES.find((s) => s.slug === slug) || null;

// Great-circle distance (haversine) between two state centers, in miles.
function distance(a, b) {
  const R = 3959, toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat), dLon = toRad(b.lon - a.lon);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
export function nearbyStates(state, n = 5) {
  return STATES.filter((s) => s.abbr !== state.abbr).map((s) => ({ ...s, miles: distance(state, s) })).sort((a, b) => a.miles - b.miles).slice(0, n);
}

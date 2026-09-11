// The 50 states with their Census region (used to pick the regional Census series).
const NE = 'Northeast', MW = 'Midwest', S = 'South', W = 'West';
export const STATES = [
  ['AL', 'Alabama', S], ['AK', 'Alaska', W], ['AZ', 'Arizona', W], ['AR', 'Arkansas', S], ['CA', 'California', W],
  ['CO', 'Colorado', W], ['CT', 'Connecticut', NE], ['DE', 'Delaware', S], ['FL', 'Florida', S], ['GA', 'Georgia', S],
  ['HI', 'Hawaii', W], ['ID', 'Idaho', W], ['IL', 'Illinois', MW], ['IN', 'Indiana', MW], ['IA', 'Iowa', MW],
  ['KS', 'Kansas', MW], ['KY', 'Kentucky', S], ['LA', 'Louisiana', S], ['ME', 'Maine', NE], ['MD', 'Maryland', S],
  ['MA', 'Massachusetts', NE], ['MI', 'Michigan', MW], ['MN', 'Minnesota', MW], ['MS', 'Mississippi', S], ['MO', 'Missouri', MW],
  ['MT', 'Montana', W], ['NE', 'Nebraska', MW], ['NV', 'Nevada', W], ['NH', 'New Hampshire', NE], ['NJ', 'New Jersey', NE],
  ['NM', 'New Mexico', W], ['NY', 'New York', NE], ['NC', 'North Carolina', S], ['ND', 'North Dakota', MW], ['OH', 'Ohio', MW],
  ['OK', 'Oklahoma', S], ['OR', 'Oregon', W], ['PA', 'Pennsylvania', NE], ['RI', 'Rhode Island', NE], ['SC', 'South Carolina', S],
  ['SD', 'South Dakota', MW], ['TN', 'Tennessee', S], ['TX', 'Texas', S], ['UT', 'Utah', W], ['VT', 'Vermont', NE],
  ['VA', 'Virginia', S], ['WA', 'Washington', W], ['WV', 'West Virginia', S], ['WI', 'Wisconsin', MW], ['WY', 'Wyoming', W],
].map(([abbr, name, region]) => ({ abbr, name, region, slug: name.toLowerCase().replace(/ /g, '-') }));

// One hub page per state at /<state-name>: lists every room-type page for that state.
import data from '../data/basement.js';
import { STATES } from '../states.js';

const D = '2026-09-11';
const pct = (v) => (v == null ? null : `${Math.round(v)}%`);
const n1 = (v) => (v == null ? null : Number(v).toLocaleString('en-US', { maximumFractionDigits: 0 }));

// Room types that have state pages, in display order. Add a row here when a new feature family ships.
export const STATE_FEATURES = [
  { key: 'basement', question: (st) => `Does a basement count as square footage in ${st}?` },
  { key: 'finished-basement', question: (st) => `Does a finished basement count as square footage in ${st}?` },
  { key: 'walkout-basement', question: (st) => `Does a walkout basement count as square footage in ${st}?` },
];

export const stateHubs = STATES.map((st) => {
  const d = data.states[st.abbr] || {};
  const y = d['2024'] || d['2020'] || {};
  const us = data.us['2024'];
  const intro = [
    `The rules are the same in ${st.name} as everywhere else: appraisers measure to ANSI Z765 because Fannie Mae requires it, so a basement, a garage, or a porch gets the same verdict in ${st.name} as in any other state. What changes is the housing. ${y.pct_basement != null ? `${pct(y.pct_basement)} of ${st.name} single-family homes sit over a basement, against ${pct(us.pct_basement)} nationally` : `The survey sample for ${st.name} is small`}${y.pct_owners_count_basement_in_sqft != null ? `, and ${pct(y.pct_owners_count_basement_in_sqft)} of owners with one count it in their home's square footage even though none of it is gross living area` : ''}.`,
    `Each page below gives the verdict for ${st.name}, the state's numbers from the Residential Energy Consumption Survey, a calculator, and the long-run Census trend for the ${st.region}.`,
  ];
  return {
    kind: 'stateHub',
    slug: st.slug,
    state: st.abbr, stateName: st.name,
    title: `What Counts as Square Footage in ${st.name}?`,
    metaTitle: `What Counts as Square Footage in ${st.name}? | Every Room Type Ruled`,
    description: `What counts as square footage in ${st.name}? The ANSI Z765 verdict for every room type, with ${st.name} housing data and a calculator on each page.`,
    published: D,
    intro,
    stats: y.avg_total_sqft != null ? { avg_total_sqft: n1(y.avg_total_sqft), pct_basement: pct(y.pct_basement), pct_finished: pct(y.pct_basement_finished_of_basements), pct_owners: pct(y.pct_owners_count_basement_in_sqft) } : null,
    features: STATE_FEATURES.map((f) => ({ slug: `${st.slug}/${f.key}`, question: f.question(st.name) })),
  };
});
export const getStateHub = (slug) => stateHubs.find((h) => h.slug === slug) || null;

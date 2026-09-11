// /states: the index of all 50 state hubs, with the basement numbers that make each state different.
import data from '../data/basement.js';
import { STATES } from '../states.js';

const D = '2026-09-11';
const pct = (v) => (v == null ? null : `${Math.round(v)}%`);
const us = data.us['2024'];

const rows = STATES.map((st) => {
  const y = (data.states[st.abbr] || {})['2024'] || {};
  return { ...st, pct_basement: y.pct_basement, pct_finished: y.pct_basement_finished_of_basements, pct_owners: y.pct_owners_count_basement_in_sqft };
});
const byBasement = [...rows].filter((r) => r.pct_basement != null).sort((a, b) => b.pct_basement - a.pct_basement);
const most = byBasement.slice(0, 5);
const fewest = byBasement.slice(-5).reverse();
const list = (arr) => arr.map((r, i) => `${i === arr.length - 1 && arr.length > 1 ? 'and ' : ''}[${r.name}](/${r.slug}) (${pct(r.pct_basement)})`).join(', ');

export const statesIndex = {
  kind: 'statesIndex',
  slug: 'states',
  title: 'What Counts as Square Footage in Every State',
  metaTitle: 'What Counts as Square Footage in Every State? | All 50 Rulings',
  description: 'What counts as square footage in your state? Pick any of the 50 states for the ANSI Z765 verdict on every room type, plus how common basements are there.',
  published: D,
  intro: [
    `Pick your state below. Each state page rules on every room type we cover, and every ruling rests on the same standard: ANSI Z765, the measuring method Fannie Mae requires on appraisals nationwide. A basement does not count as gross living area in Maine, and it does not count in Arizona either.`,
    `So why have state pages at all? Because the housing differs. In ${most[0].name} nearly every house has a basement. In ${fewest[0].name} almost none do. That changes what buyers expect a listing to say, how often the county record and the appraisal disagree, and how much a seller stands to lose by quoting the wrong number. Each state page carries that state's figures from the Residential Energy Consumption Survey, a calculator, and the Census trend for its region.`,
  ],
  sections: [
    {
      heading: 'Which states have the most basements',
      paragraphs: [
        `Nationally, ${pct(us.pct_basement)} of single-family homes sit over a basement. The states where basements are nearly universal are ${list(most)}. The states with the fewest are ${list(fewest)}.`,
        `The pattern follows the ground, not the law. Deep frost lines force footings below the freeze depth, and once the hole is dug a basement is cheap. Where the water table is high, the soil is expansive clay, or the ground never freezes, builders pour a slab and skip the basement. None of that changes the appraisal: finished or not, a basement stays below grade and out of the gross living area figure in every state.`,
      ],
    },
  ],
  tableHead: ['State', 'Homes with a basement', 'Basements that are finished', 'Owners who count it in their square footage'],
  rows,
  tableNote: `Source: Residential Energy Consumption Survey, 2024, single-family homes. An n/a means the survey had too few homes with basements in that state to report the figure. The national figures are ${pct(us.pct_basement)}, ${pct(us.pct_basement_finished_of_basements)}, and ${pct(us.pct_owners_count_basement_in_sqft)}.`,
  faq: [
    { q: 'Do square footage rules change from state to state?', a: 'No. Appraisers in every state measure to ANSI Z765 because Fannie Mae requires it on the appraisal report. What varies by state is the housing stock, which is why each state page carries its own housing figures rather than a different rule.' },
    { q: 'Why does my state page say a basement does not count when my listing includes it?', a: 'Listing sites and county assessors often report total finished area, which folds the basement in. The appraisal reports gross living area, which is above-grade finished space only. Both numbers can be accurate. They measure different things.' },
  ],
};

// One hub page per state at /<state-name>: h1, one paragraph, and the list of room-type pages for that state.
import { STATES } from '../states.js';

const D = '2026-09-11';

// Room types that have state pages, in display order. Add a row here when a new feature family ships.
export const STATE_FEATURES = [
  { key: 'basement', label: 'Basement', question: (st) => `Does a basement count as square footage in ${st}?` },
  { key: 'finished-basement', label: 'Finished basement', question: (st) => `Does a finished basement count as square footage in ${st}?` },
  { key: 'walkout-basement', label: 'Walkout basement', question: (st) => `Does a walkout basement count as square footage in ${st}?` },
];

export const stateHubs = STATES.map((st) => ({
  kind: 'stateHub',
  slug: st.slug,
  state: st.abbr, stateName: st.name,
  title: `What Counts as Square Footage in ${st.name}?`,
  metaTitle: `What Counts as Square Footage in ${st.name}? | Every Room Type Ruled`,
  description: `What counts as square footage in ${st.name}? The ANSI Z765 verdict for every room type, with ${st.name} housing data and a calculator on each page.`,
  published: D,
  intro: [
    `Appraisers in ${st.name} measure to ANSI Z765, the same standard Fannie Mae requires in every state, so each room type below gets the verdict it would get anywhere else. What differs is the housing, and each page carries ${st.name}'s own figures alongside the ruling and a calculator.`,
  ],
  features: STATE_FEATURES.map((f) => ({ slug: `${st.slug}/${f.key}`, label: f.label, question: f.question(st.name) })),
}));
export const getStateHub = (slug) => stateHubs.find((h) => h.slug === slug) || null;

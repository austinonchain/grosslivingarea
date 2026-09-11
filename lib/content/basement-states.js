// Basement x state pages: one page per (feature, state), generated from lib/data/basement.json.
// Same entry shape as the hand-written questions, plus kind: 'state' and parent: <feature page slug>.
import data from '../data/basement.js';
import { STATES } from '../states.js';

const D = '2026-09-11';
const P = 'what-counts-as-square-footage';
const BELOW = { label: 'Counted, but below grade', tone: 'depends' };
const NAVY = '#1f5fbf', GREY = '#9ca3af';

const FEATURES = [
  {
    key: 'basement', label: 'basement', title: 'Basement', a: 'a basement',
    parent: 'does-a-basement-count-as-square-footage',
    verdict: (st) => `**No, not as gross living area, in ${st} or any other state.** ANSI Z765, the measuring standard Fannie Mae requires appraisers to use, puts a basement in **below-grade area** because part of it is under the ground. A finished basement is reported on its own line; an unfinished one is not living area at all. ${st} has no rule of its own that changes this.`,
    why: (st) => [
      `The line is drawn by grade, not by finish, windows, or how the space is used. Under ANSI Z765 any level with part of its floor below ground on any side is below grade in its entirety. That covers every basement, including walkouts and daylight basements, and it covers them the same way in ${st} as in every other state. The full rule and every exception are explained in [does a basement count as square footage](/does-a-basement-count-as-square-footage) and the [what counts guide](/what-counts-as-square-footage).`,
      `An appraiser still measures the basement. Finished area goes on the below-grade line, unfinished area is noted as unfinished, and each is valued separately. What never happens is the basement being added into the gross living area of the house.`,
    ],
    faqIntro: 'basement',
    desc: (st) => `Does a basement count as square footage in ${st}? Not as GLA under ANSI Z765. The rule, ${st} basement data, and a calculator.`,
    metaBenefit: 'ANSI Rule + State Data',
  },
  {
    key: 'finished-basement', label: 'finished basement', title: 'Finished Basement', a: 'a finished basement',
    parent: 'does-a-finished-basement-count-as-square-footage',
    verdict: (st) => `**No, not as gross living area, in ${st} or any other state.** A finished basement is measured and reported on an appraisal as **below-grade finished area**, on its own line, because ANSI Z765 puts any level with part of it below ground in the below-grade column. Fannie Mae requires that standard nationwide, and ${st} has no rule that overrides it. The basement still adds value; it is just not added to the GLA.`,
    why: (st) => [
      `Finishing changes what the basement is worth, not where it sits. Under ANSI Z765 the test is grade: if any part of the floor is below ground on any side, the whole level is below grade. Drywall, carpet, a full bath, and a legal egress window make it **finished** below-grade area, which appraisers value separately, usually at a fraction of the above-grade rate. The reasoning is covered in full in [does a finished basement count as square footage](/does-a-finished-basement-count-as-square-footage), and every other space is ruled on in the [what counts guide](/what-counts-as-square-footage).`,
      `The confusion in ${st} usually starts with a listing or a tax record that added the basement into a single "total" number. The appraisal will not, and a lender's review looks at the appraisal.`,
    ],
    faqIntro: 'finished basement',
    desc: (st) => `Does a finished basement count as square footage in ${st}? Not as GLA under ANSI Z765. The rule, ${st} basement data, and a calculator.`,
    metaBenefit: 'ANSI Rule + State Data',
  },
  {
    key: 'walkout-basement', label: 'walkout basement', title: 'Walkout Basement', a: 'a walkout basement',
    parent: 'does-a-walkout-basement-count-as-square-footage',
    verdict: (st) => `**No, not as gross living area, in ${st} or any other state.** A walkout basement is open to the ground on one side but still buried on the others, and ANSI Z765 puts any level with part of it below ground in the **below-grade** column. It is reported as finished below-grade area and valued separately, usually higher than a standard basement. Fannie Mae requires that standard everywhere, so the answer does not change at the ${st} line.`,
    why: (st) => [
      `The walkout side does not rescue the level. ANSI Z765 asks one question: is any part of this floor below the ground on any side? For a walkout the front or side walls are still below grade, so the whole level is below grade. That is why the answer is the same on a sloped lot in ${st} as on a flat one. The full reasoning, including the one hillside exception, is in [does a walkout basement count as square footage](/does-a-walkout-basement-count-as-square-footage); the [what counts guide](/what-counts-as-square-footage) covers every other space.`,
      `Where a walkout does differ is value. Full-height windows, a door at grade, and a patio make the space feel like a lower level, and in markets where buyers pay close to above-grade prices for it, the appraiser supports a larger below-grade adjustment. The square footage still sits on the below-grade line.`,
    ],
    faqIntro: 'walkout basement',
    desc: (st) => `Does a walkout basement count as square footage in ${st}? Not as GLA under ANSI Z765. The rule, ${st} basement data, and a calculator.`,
    metaBenefit: 'ANSI Rule + State Data',
  },
];

const n1 = (v) => (v == null ? null : Number(v).toLocaleString('en-US', { maximumFractionDigits: 0 }));
const pct = (v) => (v == null ? null : `${Math.round(v)}%`);
// "about" when the survey's relative standard error is wide.
const about = (v, rse) => (v == null ? null : `${rse != null && rse > 15 ? 'about ' : ''}${pct(v)}`);
const compare = (now, then, what) => {
  if (now == null || then == null) return '';
  const d = now - then;
  if (Math.abs(d) < 2) return ` That share is about the same as in the 2020 survey.`;
  return ` In the 2020 survey ${what} was ${pct(then)}, so it has ${d > 0 ? 'risen' : 'fallen'} since.`;
};

function stateDataSection(f, st) {
  const d = data.states[st.abbr] || {};
  const y = d['2024'] || d['2020'];
  const year = d['2024'] ? '2024' : '2020';
  const prev = d['2024'] ? d['2020'] : null;
  const us = data.us['2024'];
  const rare = y.pct_basement != null && y.pct_basement < 10;
  const paras = [];
  if (rare) {
    paras.push(`Basements are rare in ${st.name}. Only ${about(y.pct_basement, y.pct_basement_rse)} of single-family homes in the state sit over one, against ${pct(us.pct_basement)} nationwide, according to the ${year} Residential Energy Consumption Survey. Most ${st.name} houses are built on a slab or a crawl space, so the question comes up mostly with older homes, hillside lots, and houses bought in other states.`);
  } else {
    paras.push(`In ${st.name}, ${about(y.pct_basement, y.pct_basement_rse)} of single-family homes sit over a basement, according to the ${year} Residential Energy Consumption Survey, against ${pct(us.pct_basement)} nationwide.${compare(y.pct_basement, prev?.pct_basement, 'the basement share')}`);
  }
  if (y.pct_basement_finished_of_basements != null) {
    paras.push(`Of those basements, ${about(y.pct_basement_finished_of_basements, y.pct_basement_finished_of_basements_rse)} are finished${y.pct_basement_heated_of_basements != null ? `, and ${pct(y.pct_basement_heated_of_basements)} are heated` : ''}. Every square foot of that finished area is measured by an appraiser and reported as below-grade finished area, never as gross living area.`);
  } else if (!rare) {
    paras.push(`The survey sample in ${st.name} is too small to say how many of those basements are finished.`);
  }
  if (y.pct_owners_count_basement_in_sqft != null) {
    paras.push(`Here is the number that explains the arguments: ${about(y.pct_owners_count_basement_in_sqft, y.pct_owners_count_basement_in_sqft_rse)} of ${st.name} owners with a basement include it when they report their home's square footage. Nationally it is ${pct(us.pct_owners_count_basement_in_sqft)}. Under ANSI Z765, none of them should, which is why an owner's number and an appraiser's number so often disagree.`);
  }
  paras.push(`The average ${st.name} single-family home has ${n1(y.avg_total_sqft)} square feet of total area, basement included, compared with ${n1(us.avg_total_sqft)} nationally.`);
  const row = (label, k, fmt = pct) => [label, fmt(y[k]) ?? 'Not available', fmt(us[k]) ?? 'Not available'];
  return {
    heading: `Basements in ${st.name} homes: the numbers`,
    paragraphs: paras,
    table: {
      head: ['Single-family homes', `${st.name} (${year})`, 'United States (2024)'],
      rows: [
        row('Have a basement', 'pct_basement'),
        row('Basements that are finished', 'pct_basement_finished_of_basements'),
        row('Owners who count the basement in their square footage', 'pct_owners_count_basement_in_sqft'),
        row('Average total area, basement included', 'avg_total_sqft', (v) => (v == null ? null : `${n1(v)} sq ft`)),
      ],
    },
    after: ['Source: U.S. Energy Information Administration, Residential Energy Consumption Survey. Values are for single-family homes; a small number of states have samples too small to report every line.'],
  };
}

function censusSection(st) {
  const reg = data.census[st.region], us = data.census.US;
  const [r0, rN] = [reg[0], reg[reg.length - 1]];
  const [u0, uN] = [us[0], us[us.length - 1]];
  return {
    heading: `How ${st.region} basements changed since ${r0[0]}`,
    paragraphs: [
      `${st.name} is in the Census Bureau's ${st.region} region. In ${r0[0]}, ${pct(r0[1])} of new single-family houses completed in the ${st.region} were built with a full or partial basement. In ${rN[0]} it was ${pct(rN[1])}. Nationally the share went from ${pct(u0[1])} to ${pct(uN[1])} over the same years, as slab and crawl-space construction spread.`,
    ],
    chart: {
      series: [
        { label: st.region, points: reg, color: NAVY },
        { label: 'United States', points: us, color: GREY },
      ],
      caption: `Share of new single-family houses completed with a full or partial basement, ${r0[0]} to ${rN[0]}. Source: U.S. Census Bureau, Survey of Construction.`,
    },
  };
}

function calculatorSection(f, st) {
  return {
    heading: `Calculator: what ${f.a} adds to a ${st.name} house`,
    paragraphs: [`Enter the ${f.label} area and the above-grade area. The first figure is the gross living area an appraiser reports; the last is the inflated number a listing shows when it adds the basement in.`],
    calculator: { featureLabel: f.label, counts: false, separateLabel: f.key === 'basement' ? 'below-grade area' : 'below-grade finished area' },
  };
}

function listingSection(f, st) {
  return {
    heading: `What to put on a ${st.name} listing`,
    paragraphs: [
      `Report the above-grade area as the square footage and the ${f.label} on the below-grade or "finished basement" line your MLS provides. Most ${st.name} listing systems have separate fields for above-grade, below-grade, and total finished area. Filling in the total field is fine; presenting it as the size of the house is what causes appraisal gaps and, in some states, complaints.`,
      `If a buyer's appraisal comes in with a smaller number than the listing, this is almost always the reason. The house did not shrink. The basement moved to the line where ANSI Z765 puts it.`,
    ],
  };
}

function faq(f, st) {
  const d = data.states[st.abbr] || {};
  const y = d['2024'] || d['2020'];
  const own = y?.pct_owners_count_basement_in_sqft;
  return [
    { q: `Does a ${f.faqIntro} add to square footage in ${st.name}?`, a: `It adds value and it adds below-grade finished area, but it does not add to gross living area. ${st.name} appraisers follow ANSI Z765 because Fannie Mae requires it, and that standard keeps every basement on a separate line.` },
    { q: `Do ${st.name} appraisers count a ${f.faqIntro}?`, a: `They measure it, report it as below-grade area, and value it with its own adjustment. They do not count it in GLA. There is no ${st.name} exception to the standard.` },
    { q: `Does Zillow square footage include the basement in ${st.name}?`, a: `Often, yes. Zillow and county records frequently show a total that includes finished basement area${own != null ? `, and ${pct(own)} of ${st.name} owners with a basement count it in their own figure` : ''}. An appraisal will show a smaller number because it reports above-grade GLA only.` },
  ];
}

export const basementStateQuestions = [];
for (const f of FEATURES) {
  for (const st of STATES) {
    const sameRegion = STATES.filter((s) => s.region === st.region && s.abbr !== st.abbr).slice(0, 3);
    basementStateQuestions.push({
      slug: `does-a-${f.key}-count-as-square-footage-in-${st.slug}`,
      kind: 'state', parent: f.parent, state: st.abbr, stateName: st.name,
      pillar: P,
      question: `Does a ${f.label} count as square footage in ${st.name}?`,
      metaTitle: `Does a ${f.title} Count as Square Footage in ${st.name}? | ${f.metaBenefit}`,
      description: f.desc(st.name),
      published: D, verdict: BELOW,
      shortAnswer: f.verdict(st.name),
      body: [
        { heading: `Why ${f.a} is not gross living area in ${st.name}`, paragraphs: f.why(st.name) },
        stateDataSection(f, st),
        calculatorSection(f, st),
        censusSection(st),
        listingSection(f, st),
      ],
      faq: faq(f, st),
      related: [f.parent, ...sameRegion.map((s) => `does-a-${f.key}-count-as-square-footage-in-${s.slug}`)],
    });
  }
}
export const basementStateFeatures = FEATURES.map((f) => ({ key: f.key, label: f.label, parent: f.parent }));

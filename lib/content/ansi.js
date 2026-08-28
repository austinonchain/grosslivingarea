// Pillar 2: ANSI Z765-2021, the standard explained. Paraphrased throughout;
// the standard's text is copyrighted and is never reproduced here.
const D = '2026-08-27';
const FNMA_GUIDE = 'https://selling-guide.fanniemae.com/sel/b4-1.3-05/improvements-section-appraisal-report';
const FNMA_ANSI = 'https://singlefamily.fanniemae.com/originating-underwriting/appraisers/standardized-property-measuring-guidelines';
const HIRL = 'https://www.homeinnovation.com/';
const HUD_4000 = 'https://www.hud.gov/program_offices/administration/hudclips/handbooks/hsgh/4000.1';
const ANSI_WIKI = 'https://en.wikipedia.org/wiki/American_National_Standards_Institute';

const src = {
  fnma: { label: 'Fannie Mae Selling Guide B4-1.3-05, Improvements Section of the Appraisal Report', url: FNMA_GUIDE },
  fnmaAnsi: { label: 'Fannie Mae, Standardized Property Measuring Guidelines (ANSI Z765-2021 FAQ)', url: FNMA_ANSI },
  hirl: { label: 'Home Innovation Research Labs, secretariat for ANSI Z765', url: HIRL },
  hud: { label: 'HUD Handbook 4000.1, FHA Single Family Housing Policy', url: HUD_4000 },
};

export const ansiPillar = {
  slug: 'ansi-z765-2021',
  title: 'ANSI Z765-2021 Explained: Every Rule in Plain English',
  shortTitle: 'ANSI Z765-2021',
  metaTitle: 'ANSI Z765-2021 | Every Square Footage Rule, Plain English Guide',
  description: 'ANSI Z765-2021 is the square footage standard Fannie Mae requires. Every rule in plain English: ceiling height, above grade, stairs, what counts, what never does.',
  published: D,
  intro: [
    '**ANSI Z765-2021 is the national standard for measuring the square footage of a house.** It tells you where to put the measuring tape (the outside of the walls), what counts as finished living area, and how to report the number. Since April 2022, Fannie Mae has required appraisers to use it on most single-family appraisals.',
    'This guide walks through every rule in the standard in plain English. The standard itself is a short copyrighted document published by [Home Innovation Research Labs](' + HIRL + '). We explain it here. We do not reproduce it. Each rule links to a deeper page with the edge cases.',
  ],
  body: [
    {
      heading: 'What ANSI Z765 is and who wrote it',
      paragraphs: [
        'ANSI Z765 is the **American National Standard for Single-Family Residential Buildings: Square Footage, Method for Calculating**. The [American National Standards Institute](' + ANSI_WIKI + ') accredits it; Home Innovation Research Labs (the research arm of the National Association of Home Builders) maintains it.',
        'The first edition came out in 1996. It was revised in 2003, 2013, and 2021. The 2021 edition is the current one, and it is the one Fannie Mae names in its Selling Guide. If you see "ANSI Z765-2022" or "2023" anywhere, that is a typo or a guess; see [is there a newer version of ANSI Z765?](/ansi-z765-versions).',
        'One point people miss: ANSI Z765 is a **measuring** standard, not a valuation or building-code standard. It says how to arrive at a square footage number. It says nothing about whether a bedroom is legal, what a basement is worth, or whether a room meets code.',
      ],
    },
    {
      heading: 'Who requires ANSI Z765',
      paragraphs: [
        '**Fannie Mae** requires ANSI Z765-2021 for appraisals on loans with application dates on or after April 1, 2022. The requirement lives in [Selling Guide B4-1.3-05](' + FNMA_GUIDE + ') and covers most single-unit appraisal forms, including condos and manufactured homes. Two-to-four-unit properties are outside it.',
        '**Freddie Mac** accepts ANSI-measured appraisals but did not issue a matching mandate. **FHA** has never required ANSI; HUD Handbook 4000.1 has its own definitions, and an appraiser can use ANSI methods as long as the FHA rules are still met. **VA** and **USDA** likewise have no ANSI mandate.',
        'When a house cannot be measured to the standard (an appraiser is denied access, or the property has a layout the standard cannot handle), Fannie Mae lets the appraiser report that and explain why instead of forcing a bad number.',
      ],
    },
    {
      heading: 'Rule 1: measure the outside of the house',
      paragraphs: [
        'Square footage under ANSI is measured along the **exterior finished surface** of the outside walls. Wall thickness is included in the number. That is why an ANSI figure is larger than the sum of the rooms you would get from measuring inside each room.',
        'Floors you cannot reach from outside (a second story) are measured from inside, and the wall thickness is added back. For attached homes, the standard gives separate guidance for shared walls. Details: [why wall thickness is included](/exterior-measurement).',
      ],
    },
    {
      heading: 'Rule 2: only finished area counts',
      paragraphs: [
        '**Finished area** is an enclosed space suitable for year-round use, with walls, floor, and ceiling finished to a standard similar to the rest of the house. A garage is never a finished area, no matter how nice it is. An unheated sunroom is not. A basement rec room with drywall, flooring, and a finished ceiling is a finished area (but see the next rule).',
        'The whole [What counts as square footage?](/what-counts-as-square-footage) guide is built on this rule, one space at a time.',
      ],
    },
    {
      heading: 'Rule 3: above grade vs. below grade',
      paragraphs: [
        'Finished area is reported in two separate numbers: **above grade** and **below grade**. Only above-grade finished area is considered gross living area (GLA). Below-grade finished area is reported on its own line and never added to the GLA.',
        'The test is strict. If **any part** of a level is below the ground on **any side**, the entire level is below grade. There is no minimum. Even a floor that sits **1 inch** below the finished ground on one side is considered entirely below grade. A walkout basement with a full glass wall on the back is still below grade because the front is buried. Full explanation and the exceptions: [above grade vs. below grade, the all-sides rule](/above-grade-vs-below-grade).',
      ],
    },
    {
      heading: 'Rule 4: ceiling height',
      paragraphs: [
        'Finished area needs a ceiling of at least **7 feet**. Under beams, ducts, and similar obstructions, 6 feet 4 inches is allowed. Under a sloped ceiling, at least half of the finished floor area must have a 7-foot ceiling, and only the part with a ceiling of 5 feet or more is counted at all.',
        'This is the rule that decides most attic and Cape Cod second-floor questions. Numbers, diagrams, and the math: [ANSI ceiling height requirements](/ansi-ceiling-height-requirements).',
      ],
    },
    {
      heading: 'Rule 5: stairs and openings',
      paragraphs: [
        'Stair treads and landings count as finished area on the floor they **descend from**. The hole in the floor above a staircase is not double-counted. Other openings to the floor below (a two-story foyer or open-to-below loft) are **not** counted on the upper level.',
        'Details: [do stairs count as square footage?](/do-stairs-count-as-square-footage) and [do lofts and open-to-below spaces count?](/does-a-loft-count-as-square-footage).',
      ],
    },
    {
      heading: 'Rule 6: the finished-connection rule',
      paragraphs: [
        'A finished space only counts if you can reach it from the main living area of the house **through other finished space**. A finished attic you can only get to by a pull-down ladder does not count. A finished room over a detached garage, reached by an exterior stair, does not count. A finished bonus room you can only access through the garage does not count.',
        'This is the rule behind most surprises people get on their appraisals. Details: [the finished-connection rule](/finished-connection-rule).',
      ],
    },
    {
      heading: 'Rule 7: detached structures are reported separately',
      paragraphs: [
        'ANSI measures the house. A detached garage, guest house, pool house, or ADU is measured and reported on its own. Its finished area is never included in the main house GLA. See [do ADUs count toward square footage?](/does-an-adu-count-as-square-footage).',
      ],
    },
    {
      heading: 'Rule 8: precision and rounding',
      paragraphs: [
        'Measurements are taken to the nearest inch (or tenth of a foot), and the finished area is reported to the nearest whole square foot. Two appraisers measuring the same house should land within a few square feet of each other. Details: [ANSI rounding and reporting precision](/ansi-rounding-precision).',
      ],
    },
    {
      heading: 'What ANSI Z765 does not cover',
      paragraphs: [
        'The standard was written for detached and attached single-family houses. It says nothing about bedroom counts, egress, permits, or value. Condos and apartments are a gray area the standard only partly addresses; Fannie Mae fills the gap with its own guidance. See [what ANSI Z765 does not apply to](/what-ansi-does-not-apply-to) and [ANSI bedroom requirements](/ansi-bedroom-requirements) (there are none).',
      ],
    },
    {
      heading: 'How to get the standard',
      paragraphs: [
        'The 2021 edition is sold by Home Innovation Research Labs as a PDF. Fannie Mae also publishes free guidance and FAQs that cover what most people need. See [where to get the ANSI Z765-2021 PDF](/ansi-z765-pdf). Please do not download bootleg copies. The standard is copyrighted, and the official one is inexpensive.',
      ],
    },
  ],
  childrenHeading: 'Every ANSI Z765 rule',
  faq: [
    { q: 'Is ANSI Z765-2021 mandatory?', a: 'For Fannie Mae loans, yes, on most single-unit appraisals with application dates on or after April 1, 2022. FHA, VA, and USDA do not mandate it. Outside lending, nobody is required to use it, but it is the only national standard, so it is what listing disputes and lawsuits fall back on.' },
    { q: 'Does ANSI Z765 include basements in square footage?', a: 'Finished basement area is measured and reported, but as below-grade finished area, not as gross living area. Under ANSI, a level with any part below ground on any side is below grade for its whole area.' },
    { q: 'What is the minimum ceiling height under ANSI Z765?', a: '7 feet for finished area, with 6 feet 4 inches allowed under beams and ducts. Under sloped ceilings, at least half the area must reach 7 feet, and only area with 5 feet or more of headroom is counted.' },
    { q: 'Does ANSI Z765 measure from the inside or outside of the walls?', a: 'Outside. Square footage is taken along the exterior finished surface of the walls, so wall thickness is included in the number.' },
  ],
};

const P = 'ansi-z765-2021';

export const ansiQuestions = [
  {
    slug: 'ansi-ceiling-height-requirements',
    pillar: P,
    question: 'What are the ANSI ceiling height requirements for square footage?',
    metaTitle: 'ANSI Ceiling Height Requirements | 7 ft, 6\'4" and the Sloped Ceiling Rule',
    description: 'ANSI Z765-2021 is the square footage standard Fannie Mae requires. Every rule in plain English: ceiling height, above grade, stairs, what counts, what never does.',
    published: D,
    shortAnswer: 'Under ANSI Z765-2021, finished area must have a ceiling height of at least **7 feet**. Under beams, ducts, and similar obstructions, **6 feet 4 inches** is enough. Under a sloped ceiling, at least **half** of the finished floor area must reach 7 feet, and only the portion with a ceiling of **5 feet or more** is counted.',
    body: [
      { heading: 'The three numbers to remember', list: [
        '**7 feet (2.13 m):** the minimum ceiling height for finished area with a flat ceiling.',
        '**6 feet 4 inches (1.93 m):** the allowance under beams, ducts, and other obstructions.',
        '**5 feet (1.52 m):** under a sloped ceiling, the cutoff below which floor area is not counted at all.',
      ] },
      { heading: 'How the sloped ceiling rule works', paragraphs: [
        'Take the finished floor area under the slope. Measure how much of it has 7 feet of headroom or more. If that is **at least 50%**, the space qualifies as finished area. Then count everything with 5 feet of headroom or more, and leave out the part below 5 feet.',
        'Example: a finished attic room is 20 feet by 15 feet (300 sq ft). Headroom reaches 7 feet over the middle 8 feet of width (160 sq ft, or 53%), so the room qualifies. Headroom is 5 feet or more over the middle 12 feet of width, so **240 sq ft** counts and 60 sq ft along the eaves does not.',
        'If only 40% of that room reached 7 feet, none of it would count, even the part with full headroom.',
      ] },
      { heading: 'Where the height is measured from', paragraphs: [
        'Ceiling height is measured from the **finished floor** to the **finished ceiling**. Unfinished joists in a basement do not get you a finished ceiling, and a dropped ceiling that lands at 6 feet 10 inches takes the room out of finished area.',
      ] },
      { heading: 'FHA ceiling height', paragraphs: [
        'FHA does not use ANSI, and HUD Handbook 4000.1 does not set a numeric minimum ceiling height for living area. FHA appraisers judge whether a space is usable and typical for the market. Many follow the ANSI numbers anyway because they are the only published standard. See [what ANSI does not apply to](/what-ansi-does-not-apply-to).',
      ] },
    ],
    faq: [
      { q: 'Does a 6 foot 8 inch ceiling count as living area under ANSI?', a: 'Not as finished area. The ANSI minimum is 7 feet; 6 feet 4 inches is only allowed under beams and ducts, not as the general ceiling height.' },
      { q: 'How much of a sloped ceiling room counts?', a: 'Everything with 5 feet or more of headroom, provided at least half the room reaches 7 feet. If less than half reaches 7 feet, none of the room counts.' },
    ],
    sources: [src.hirl, src.fnmaAnsi, src.hud],
    related: ['does-a-finished-attic-count-as-square-footage', 'does-a-cape-cod-second-floor-count-as-square-footage'],
  },
  {
    slug: 'above-grade-vs-below-grade',
    pillar: P,
    question: 'What is the difference between above grade and below grade?',
    metaTitle: 'Above Grade vs Below Grade | The All-Sides Rule for Square Footage',
    description: 'Above grade vs below grade explained: under ANSI Z765 a level is below grade if any part is underground on any side. What it means for basements, walkouts, and GLA.',
    published: D,
    shortAnswer: '**Above grade** means a level of the house that sits entirely above the ground on every side. **Below grade** means any part of the level is below the ground on any side. Under ANSI Z765, only above-grade finished area is gross living area; below-grade finished area is reported separately.',
    body: [
      { heading: 'The all-sides rule', paragraphs: [
        'ANSI does not average or apportion, and there is no threshold. If any part of the floor is even **1 inch** below the finished ground on any side, the **entire level** is below grade. If the front of a level is buried and the back is fully exposed, the entire level is below grade. This is why a **walkout basement** is still a basement and why a **split-level** home can have a "lower level" that is below grade even though it has full-size windows.',
        '"Grade" means the finished ground surface next to the house. Window wells and a small area dug out for a door do not change the grade; they are exceptions to it.',
      ] },
      { heading: 'Why it matters', paragraphs: [
        'Appraisal forms report **above-grade** rooms and square footage in the GLA line and **below-grade** finished area in the basement line. Comparable sales are matched on GLA, so a 1,500 sq ft above-grade house with a 1,500 sq ft finished basement is compared to other 1,500 sq ft houses, not 3,000 sq ft ones. The basement still adds value, just on its own line. See [does a finished basement count as square footage?](/does-a-finished-basement-count-as-square-footage).',
      ] },
      { heading: 'Above grade and below grade in construction', paragraphs: [
        'Builders use the same words for structure, not living area: below-grade walls are foundation walls in contact with soil, and above-grade walls are framed walls. The appraisal meaning and the construction meaning line up most of the time, which is why the terms are shared.',
      ] },
      { heading: 'When the market calls a basement a lower level', paragraphs: [
        'In hilly areas, the typical house has a lower level that is below grade at the front and at grade at the rear, opening onto the yard with full windows and a door. Market participants in those areas usually call that space a **lower level**, not a basement, and pay about the same per square foot for it as for the floors above. Under ANSI it is still below grade, because the front is buried, and the appraiser reports it on the below-grade line. But the adjustment is a market question, not a measuring question: where paired sales show that finished lower-level area is worth as much as above-grade area, the appraiser adjusts it at that rate. The classification decides which line the square footage goes on. The market decides what it is worth.',
      ] },
      { heading: 'Fannie Mae below grade guidelines', paragraphs: [
        'Fannie Mae adopts the ANSI test and adds a reporting rule: the appraiser must use the same above/below split for the subject and every comparable, and must not fold below-grade area into GLA even if local MLS practice does. Where a market treats a lower level as living area (some split-levels, hillside homes), the appraiser explains and adjusts, but still reports it below grade.',
      ] },
    ],
    faq: [
      { q: 'Is a walkout basement above grade?', a: 'No. Under the ANSI all-sides rule, a level with any part below ground on any side is below grade. A walkout basement is buried on at least one side, so it is below grade even with a full wall of windows and a door at ground level on the back.' },
      { q: 'Does below grade square footage count toward the square footage of a house?', a: 'It is measured and reported, but not as gross living area. It appears on its own below-grade line on the appraisal and is valued separately.' },
    ],
    sources: [src.fnma, src.fnmaAnsi, src.hirl],
    related: ['does-a-walkout-basement-count-as-square-footage', 'does-a-finished-basement-count-as-square-footage', 'does-a-split-level-lower-floor-count-as-square-footage'],
  },
  {
    slug: 'exterior-measurement',
    pillar: P,
    question: 'Why does ANSI measure square footage from the outside of the walls?',
    metaTitle: 'Exterior Measurement Under ANSI | Why Wall Thickness Is Counted',
    description: 'ANSI Z765 measures square footage along the outside of the walls, so wall thickness is included. Why the standard does it, how upper floors work, how much it adds.',
    published: D,
    shortAnswer: 'ANSI Z765 measures square footage along the **exterior finished surface** of the outside walls, so **wall thickness is included** in the number. The standard does this because the exterior is the one boundary every measurer can find the same way; interior room-by-room sums vary with wall counts and closets.',
    body: [
      { heading: 'How much wall thickness adds', paragraphs: [
        'A typical framed exterior wall is 6 to 8 inches thick including siding and drywall. On a 40 by 30 foot house, measuring outside instead of inside adds roughly **80 to 100 square feet**, about 6 to 8%. Brick veneer or thick masonry walls add more.',
        'This is one reason the number on an appraisal is larger than the sum of the rooms, and why a home measured with a laser inside each room comes out smaller than the same home measured to ANSI.',
      ] },
      { heading: 'Upper floors and attached homes', paragraphs: [
        'You cannot walk around the outside of a second story, so it is measured from inside and the wall thickness is added back to reach the exterior dimension. Where the upper floor is the same footprint as the floor below, the appraiser uses the exterior dimensions from the ground floor.',
        'For townhouses and other attached homes, the standard gives separate guidance for the shared wall, and the appraiser notes which convention was used.',
      ] },
      { heading: 'What is not included', paragraphs: [
        'Exterior measurement does not mean everything inside the footprint counts. Garages, unfinished areas, and open-to-below spaces inside the exterior walls are still deducted. See [what counts as square footage?](/what-counts-as-square-footage).',
      ] },
    ],
    sources: [src.hirl, src.fnmaAnsi],
    related: ['ansi-rounding-precision', 'does-a-bay-window-count-as-square-footage'],
  },
  {
    slug: 'do-stairs-count-as-square-footage',
    pillar: P,
    question: 'Do stairs count as square footage?',
    metaTitle: 'Do Stairs Count as Square Footage? | The ANSI Rule for Staircases',
    description: 'Do stairs count as square footage? Yes. Under ANSI Z765 stairs count once, on the floor they descend from. How landings, the opening above, and basement stairs work.',
    published: D,
    verdict: { label: 'Yes, counted once', tone: 'yes' },
    shortAnswer: '**Yes.** Under ANSI Z765, stair treads and landings are counted as finished area on the floor they **descend from**. The opening in the floor above the staircase is not counted, so the stairs are included exactly once, not on both levels.',
    body: [
      { heading: 'How it works floor by floor', paragraphs: [
        'On a two-story house, the staircase from the second floor to the first is counted with the **second floor**. On the first floor, the space under the stairs is part of the first floor footprint (it is inside the exterior walls), so it is counted there too. Nothing is double counted because the second-floor opening above the stairs is excluded.',
        'Stairs down to a basement are counted with the first floor, the level they descend from. If the basement is below grade, the stairs are still above-grade area because they belong to the floor above.',
      ] },
      { heading: 'Under-stair closets and storage', paragraphs: [
        'Finished space under a staircase is counted like any other finished space on that floor. Unfinished under-stair storage in a basement follows the basement.',
      ] },
    ],
    faq: [
      { q: 'Are stairs counted on both floors?', a: 'No. ANSI counts the treads and landings on the floor they descend from and excludes the opening in the floor above, so the staircase is counted once.' },
    ],
    sources: [src.hirl, src.fnmaAnsi],
    related: ['does-a-loft-count-as-square-footage', 'finished-connection-rule'],
  },
  {
    slug: 'finished-connection-rule',
    pillar: P,
    question: 'What is the finished-connection rule in ANSI Z765?',
    metaTitle: 'ANSI Finished-Connection Rule | Why Some Finished Rooms Do Not Count',
    description: 'The ANSI finished-connection rule: finished area counts only if it connects to the house through finished space. Attics, bonus rooms, garage apartments explained.',
    published: D,
    shortAnswer: 'Under ANSI Z765, finished area counts only if it is **connected to the main body of the house through other finished area**. A finished room you can reach only through a garage, an unfinished space, an exterior door, or a pull-down ladder is not part of the house\'s finished square footage.',
    body: [
      { heading: 'Spaces this rule catches', list: [
        'A **finished attic** reached by a pull-down stairway or a hatch (a real estate license exam favorite).',
        'A **bonus room over a garage** whose only access is a stair inside the garage.',
        'A **garage apartment or in-law suite** entered from outside or from the garage.',
        'A **finished basement** reached only by an exterior bulkhead door.',
      ] },
      { heading: 'What fixes it', paragraphs: [
        'A permanent, finished stair or hallway from the house to the space. Once the connection is finished, the space is evaluated on its own merits: ceiling height, finish level, and above or below grade. See [does a bonus room over a garage count?](/does-a-bonus-room-over-a-garage-count-as-square-footage).',
      ] },
      { heading: 'Why the rule exists', paragraphs: [
        'GLA is meant to describe the house a buyer lives in as one connected unit. A room you have to go outside to reach functions like an outbuilding, and buyers pay for it like one. The rule keeps two houses with the same GLA comparable.',
      ] },
    ],
    sources: [src.hirl, src.fnmaAnsi],
    related: ['does-a-finished-attic-count-as-square-footage', 'does-a-garage-apartment-count-as-square-footage'],
  },
  {
    slug: 'ansi-rounding-precision',
    pillar: P,
    question: 'How precise does an ANSI Z765 measurement have to be?',
    metaTitle: 'ANSI Rounding and Precision | Nearest Inch, Nearest Square Foot',
    description: 'ANSI Z765 precision rules: measure to the nearest inch or tenth of a foot, report to the nearest whole square foot. Why two appraisers still differ by a few feet.',
    published: D,
    shortAnswer: 'ANSI Z765 asks for measurements taken to the **nearest inch or tenth of a foot** and finished area reported to the **nearest whole square foot** (nearest 0.1 square meter in metric). The standard does not require a laser or any specific tool, only that precision.',
    body: [
      { heading: 'Why two appraisers get different numbers', paragraphs: [
        'Even at inch precision, a 50-foot wall measured by two people will differ by an inch or so, and a house has a lot of walls. Differences of **1 to 2%** between careful measurers are normal. A difference of 10% means somebody applied a rule differently (usually the [above/below grade test](/above-grade-vs-below-grade) or the [ceiling height rule](/ansi-ceiling-height-requirements)), not that somebody measured badly.',
      ] },
      { heading: 'Rounding in practice', paragraphs: [
        'Round at the end, not wall by wall. Keep the dimensions as measured, calculate the area, then round the final finished-area figures for above grade and below grade separately.',
      ] },
    ],
    sources: [src.hirl],
    related: ['exterior-measurement', 'ansi-compliance-statement'],
  },
  {
    slug: 'what-ansi-does-not-apply-to',
    pillar: P,
    question: 'What does ANSI Z765 not apply to?',
    metaTitle: 'What ANSI Z765 Does Not Apply To | Condos, Apartments, 2-4 Units',
    description: 'ANSI Z765 was written for single-family houses. Where it stops: condos, apartments, 2-4 unit buildings, commercial space, and what Fannie Mae and FHA use instead.',
    published: D,
    shortAnswer: 'ANSI Z765 was written for **detached and attached single-family houses**. It does not set rules for apartment buildings, commercial property, or 2-4 unit dwellings, and it only partly addresses condominium units. For those, lenders fall back on their own guidance: Fannie Mae tells appraisers how to handle condos, and FHA uses HUD Handbook 4000.1.',
    body: [
      { heading: 'Does ANSI apply to condos?', paragraphs: [
        'Partly. A condo unit has no exterior wall you can measure around, so the exterior-measurement rule does not fit. Fannie Mae\'s guidance for its ANSI requirement is to measure the unit\'s **interior perimeter** and apply the rest of the ANSI rules (ceiling height, finished area, above and below grade). The interior-perimeter method for condos gets its own page in our measuring guide.',
      ] },
      { heading: 'Two-to-four-unit properties', paragraphs: [
        'Fannie Mae\'s ANSI requirement excludes 2-4 unit properties, which are reported on a different form with per-unit room counts rather than a single GLA.',
      ] },
      { heading: 'FHA, VA, and USDA', paragraphs: [
        'None of the three require ANSI. FHA appraisers follow [HUD Handbook 4000.1](' + HUD_4000 + '), which has its own definitions of living area and does not adopt the ANSI ceiling numbers. An appraiser can measure to ANSI on an FHA assignment as long as the HUD definitions are still honored.',
      ] },
      { heading: 'Things ANSI never addresses', list: [
        'Whether a room is a **legal bedroom** (see [ANSI bedroom requirements](/ansi-bedroom-requirements)).',
        'Permits and code compliance (see [unpermitted additions](/does-an-unpermitted-addition-count-as-square-footage)).',
        'Value. ANSI produces a measurement, not a dollar figure.',
      ] },
    ],
    sources: [src.fnmaAnsi, src.hud, src.hirl],
    related: ['ansi-bedroom-requirements', 'ansi-z765-versions'],
  },
  {
    slug: 'ansi-z765-versions',
    pillar: P,
    question: 'Is there a newer version of ANSI Z765 than 2021?',
    metaTitle: 'ANSI Z765 Versions | Is 2021 Still the Current Standard?',
    description: 'ANSI Z765-2021 is the current edition; there is no 2022 or 2023 version. Every edition since 1996, what changed in 2021, and how to tell which one an appraisal used.',
    published: D,
    shortAnswer: '**No.** ANSI Z765-2021 is the current edition and the one Fannie Mae requires. There is no "ANSI Z765-2022" or "2023"; those are search guesses, not standards. Editions to date: 1996, 2003, 2013, and 2021. We will update this page the day a new edition is published.',
    body: [
      { heading: 'What changed in the 2021 edition', paragraphs: [
        'The 2021 revision tightened the definitions of finished area and grade, clarified how stairs and openings are handled, and added guidance for spaces the earlier editions left vague (attached homes, obstructions under ceilings). The core rules, exterior measurement and the 7-foot ceiling, did not change.',
        'The bigger change was outside the document: Fannie Mae adopted the 2021 edition as a requirement starting April 1, 2022, which is why appraisers who had ignored ANSI for 25 years started using it.',
      ] },
      { heading: 'How to tell which edition was used', paragraphs: [
        'Appraisal reports written to Fannie Mae\'s requirement state the standard and edition in the improvements section. If a report just says "ANSI" with no year, or was written before 2022, assume the 2013 edition or none at all.',
      ] },
    ],
    sources: [src.hirl, src.fnma],
    related: ['ansi-z765-pdf', 'what-ansi-does-not-apply-to'],
  },
  {
    slug: 'ansi-z765-pdf',
    pillar: P,
    question: 'Where can I get the ANSI Z765-2021 PDF?',
    metaTitle: 'ANSI Z765-2021 PDF | Where to Buy the Standard (and What Is Free)',
    description: 'The ANSI Z765-2021 PDF is sold by Home Innovation Research Labs. What it costs, what is inside, and the free Fannie Mae guidance that covers most questions.',
    published: D,
    shortAnswer: 'The official ANSI Z765-2021 PDF is sold by [Home Innovation Research Labs](' + HIRL + '), the standard\'s secretariat, for a modest fee. It is a short document, under 20 pages. The standard is copyrighted, so we do not host it and neither should anyone else; free copies floating around are unauthorized and often the old 2013 edition.',
    body: [
      { heading: 'What is inside', list: [
        'Definitions: finished area, grade, above and below grade, living area.',
        'The measuring method: exterior measurement, ceiling height rules, stairs and openings, the finished-connection rule.',
        'Reporting: rounding, how to state above-grade and below-grade area, the compliance statement.',
        'Diagrams for the tricky cases (sloped ceilings, split levels).',
      ] },
      { heading: 'What is free', paragraphs: [
        'Fannie Mae publishes its [Standardized Property Measuring Guidelines and FAQ](' + FNMA_ANSI + ') at no cost. It restates the rules an appraiser needs to comply and answers the questions Fannie has fielded since 2022. For most homeowners and agents it is enough, and this site explains everything in the standard in plain English: [ANSI Z765-2021 explained](/ansi-z765-2021).',
      ] },
    ],
    sources: [src.hirl, src.fnmaAnsi],
    related: ['ansi-z765-versions', 'ansi-compliance-statement'],
  },
  {
    slug: 'ansi-compliance-statement',
    pillar: P,
    question: 'What is the ANSI compliance statement on an appraisal?',
    metaTitle: 'ANSI Compliance Statement | What Appraisers Must Say About Z765',
    description: 'The ANSI compliance statement on an appraisal says the house was measured to ANSI Z765-2021, or explains why it could not be. What it looks like and where it appears.',
    published: D,
    shortAnswer: 'The ANSI compliance statement is the line in an appraisal report where the appraiser states that the property was measured and calculated under **ANSI Z765-2021**. Fannie Mae requires it on covered appraisals. When the standard cannot be applied, the appraiser instead reports that and explains why, using Fannie Mae\'s exception process.',
    body: [
      { heading: 'Where it appears', paragraphs: [
        'Appraisal software adds an ANSI field to the improvements section of the standard forms. The appraiser selects that the standard was used, or selects the exception and adds a comment. Fannie Mae\'s reviewers check that this field agrees with the reported square footage and the sketch.',
      ] },
      { heading: 'The exception', paragraphs: [
        'Fannie Mae allows an appraiser to skip ANSI when it is impossible to comply: the appraiser is not allowed inside, the property is a type the standard does not address, or the layout defeats the rules. The report must say so and give the reason. The exception is not for "the MLS number is bigger" or "the seller disagrees."',
      ] },
      { heading: 'What the statement does not do', paragraphs: [
        'It is not a guarantee of accuracy. It says which rulebook was used, so a reviewer, a buyer, or a court can check the measurement against a known method. See [how precise an ANSI measurement has to be](/ansi-rounding-precision).',
      ] },
    ],
    sources: [src.fnma, src.fnmaAnsi],
    related: ['ansi-rounding-precision', 'ansi-z765-versions'],
  },
  {
    slug: 'ansi-bedroom-requirements',
    pillar: P,
    question: 'What are the ANSI bedroom requirements?',
    metaTitle: 'ANSI Bedroom Requirements | What Z765 Says About Bedrooms (Nothing)',
    description: 'ANSI Z765 has no bedroom requirements. It measures square footage, not room legality. What actually decides a bedroom: building code, egress, and the local market.',
    published: D,
    shortAnswer: '**There are none.** ANSI Z765 is a square footage measuring standard and never mentions bedrooms. Whether a room is a bedroom is decided by the **local building code** (egress window or door, minimum size, ceiling height, heat) and by what an appraiser\'s market accepts. Fannie Mae and FHA do not publish bedroom size rules either.',
    body: [
      { heading: 'Where the confusion comes from', paragraphs: [
        'Fannie Mae\'s ANSI mandate and its appraisal forms report room counts on the same page, so people assume the standard defines a bedroom. It does not. The [ceiling height rule](/ansi-ceiling-height-requirements) affects whether a room\'s floor area counts as finished area, but a room can count as finished area and still not be a legal bedroom, and vice versa.',
      ] },
      { heading: 'What does decide it', list: [
        '**Egress.** Most codes based on the International Residential Code require a sleeping room to have an emergency escape opening (a window of a minimum size or a door to outside). See [egress windows and square footage](/do-egress-windows-count-as-square-footage).',
        '**Minimum size.** The IRC floor is 70 square feet with no dimension under 7 feet; local amendments vary.',
        '**Heat and ceiling height** per the local code.',
        '**Market.** An appraiser reports bedrooms the way local buyers and the MLS count them, and explains any conflict with code.',
      ] },
      { heading: 'Fannie Mae and FHA bedroom requirements', paragraphs: [
        'Fannie Mae has no bedroom size or count requirement; it asks the appraiser to describe the property accurately. FHA likewise has no numeric bedroom rule, though HUD 4000.1 requires bedrooms to have egress for safety. See [what ANSI does not apply to](/what-ansi-does-not-apply-to).',
      ] },
    ],
    sources: [src.fnma, src.hud],
    related: ['does-a-basement-bedroom-count-as-square-footage', 'do-egress-windows-count-as-square-footage'],
  },
];

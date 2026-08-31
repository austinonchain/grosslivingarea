// Pillar 3: What counts as square footage? One verdict page per space.
const D = '2026-08-27';
const FNMA_GUIDE = 'https://selling-guide.fanniemae.com/sel/b4-1.3-05/improvements-section-appraisal-report';
const FNMA_ANSI = 'https://singlefamily.fanniemae.com/originating-underwriting/appraisers/standardized-property-measuring-guidelines';
const HIRL = 'https://www.homeinnovation.com/';
const HUD_4000 = 'https://www.hud.gov/program_offices/administration/hudclips/handbooks/hsgh/4000.1';
const src = {
  fnma: { label: 'Fannie Mae Selling Guide B4-1.3-05, Improvements Section of the Appraisal Report', url: FNMA_GUIDE },
  fnmaAnsi: { label: 'Fannie Mae, Standardized Property Measuring Guidelines (ANSI Z765-2021 FAQ)', url: FNMA_ANSI },
  hirl: { label: 'Home Innovation Research Labs, secretariat for ANSI Z765', url: HIRL },
  hud: { label: 'HUD Handbook 4000.1, FHA Single Family Housing Policy', url: HUD_4000 },
};
const YES = { label: 'Yes, it counts', tone: 'yes' };
const NO = { label: 'No, it does not count', tone: 'no' };
const DEP = { label: 'It depends', tone: 'depends' };
const BELOW = { label: 'Counted, but below grade', tone: 'depends' };

export const countsPillar = {
  slug: 'what-counts-as-square-footage',
  title: 'What Counts as Square Footage?',
  shortTitle: 'What counts',
  metaTitle: 'What Counts as Square Footage? | Every Space Ruled Under ANSI',
  description: 'What is included in the square footage of a house? A counts / does not count table for every space (basements, garages, attics, porches, ADUs) under ANSI Z765.',
  published: D,
  intro: [
    '**Square footage includes finished, above-grade living space measured to the outside of the exterior walls.** Under ANSI Z765-2021, that means heated, finished rooms with 7-foot ceilings that connect to the rest of the house: bedrooms, baths, kitchens, hallways, closets, and stairs. It leaves out garages, unfinished areas, porches, and anything below grade, which is measured but reported separately.',
    'Every row in the table below links to a page with the verdict, the ANSI rule behind it, and the Fannie Mae or FHA wrinkle. The rules themselves are explained in [ANSI Z765-2021, every rule in plain English](/ansi-z765-2021).',
  ],
  body: [
    {
      heading: 'Counts or does not count: every space',
      table: {
        head: ['Space', 'Counts as GLA?', 'The rule'],
        rows: [
          ['[Finished basement](/does-a-finished-basement-count-as-square-footage)', 'No (below grade, reported separately)', 'All-sides grade rule'],
          ['[Walkout basement](/does-a-walkout-basement-count-as-square-footage)', 'No (below grade)', 'All-sides grade rule'],
          ['[Daylight or lookout basement](/does-a-daylight-basement-count-as-square-footage)', 'No (below grade)', 'All-sides grade rule'],
          ['[Basement bedroom](/does-a-basement-bedroom-count-as-square-footage)', 'No (below grade)', 'Grade rule; legality is separate'],
          ['[Split-level lower floor](/does-a-split-level-lower-floor-count-as-square-footage)', 'Depends on grade', 'All-sides grade rule'],
          ['[Raised ranch lower level](/does-a-raised-ranch-lower-level-count-as-square-footage)', 'Usually no', 'All-sides grade rule'],
          ['[Hillside home lower level](/does-a-hillside-home-lower-level-count-as-square-footage)', 'Usually no', 'All-sides grade rule'],
          ['[Egress windows](/do-egress-windows-count-as-square-footage)', 'Do not change the verdict', 'Grade rule is about ground, not windows'],
          ['[Finished attic](/does-a-finished-attic-count-as-square-footage)', 'Yes, if 7-ft ceiling rule met and finished access', 'Ceiling height + finished connection'],
          ['[Bonus room over garage](/does-a-bonus-room-over-a-garage-count-as-square-footage)', 'Yes, if reached through the house', 'Finished connection'],
          ['[Cape Cod second floor](/does-a-cape-cod-second-floor-count-as-square-footage)', 'Partly (sloped ceiling math)', 'Ceiling height'],
          ['[Loft / open to below](/does-a-loft-count-as-square-footage)', 'Loft floor yes; opening no', 'Openings rule'],
          ['[Garage](/does-a-garage-count-as-square-footage)', 'Never', 'Not finished living area'],
          ['[Garage conversion](/does-a-garage-conversion-count-as-square-footage)', 'Yes if fully finished and connected', 'Finished area + connection'],
          ['[Sunroom / 3-season room](/does-a-sunroom-count-as-square-footage)', 'Only if finished and heated like the house', 'Finished area'],
          ['[Screened porch, deck, balcony](/does-a-screened-porch-count-as-square-footage)', 'No', 'Not enclosed finished area'],
          ['[Breezeway](/does-a-breezeway-count-as-square-footage)', 'Only if enclosed and finished', 'Finished area + connection'],
          ['[Unpermitted addition](/does-an-unpermitted-addition-count-as-square-footage)', 'Yes for measuring; a problem for lending', 'ANSI ignores permits'],
          ['[ADU](/does-an-adu-count-as-square-footage)', 'Attached yes, detached no (reported separately)', 'Detached structures rule'],
          ['[Guest house / garage apartment](/does-a-garage-apartment-count-as-square-footage)', 'No (separate structure)', 'Detached structures rule'],
          ['[In-law suite](/does-an-in-law-suite-count-as-square-footage)', 'Yes if attached and connected', 'Finished connection'],
          ['[Shed, pool house, outbuilding](/does-a-shed-count-as-square-footage)', 'No', 'Detached structures rule'],
          ['[Bay window](/does-a-bay-window-count-as-square-footage)', 'Yes if it has floor and 7-ft ceiling', 'Exterior measurement'],
          ['[Cantilever](/does-a-cantilever-count-as-square-footage)', 'Yes', 'Exterior measurement'],
          ['[Chimney](/does-a-chimney-count-as-square-footage)', 'Interior yes, exterior bump-out no', 'Exterior measurement'],
          ['[Closets, halls, bathrooms](/do-closets-count-as-square-footage)', 'Yes', 'Finished area'],
          ['[Laundry, mechanical, under-stair](/does-a-laundry-room-count-as-square-footage)', 'Yes if finished and on a finished floor', 'Finished area'],
          ['[Heated space in general](/does-heated-space-count-as-square-footage)', 'Heat alone is not enough', 'Finished area'],
        ],
      },
    },
    {
      heading: 'The four tests every space has to pass',
      list: [
        '**Finished.** Walls, floor, and ceiling finished like the rest of the house, suitable for year-round living.',
        '**Above grade.** No part of the level is below the ground on any side. Otherwise it is measured, but reported as below-grade area.',
        '**Ceiling height.** 7 feet, with the sloped-ceiling allowance.',
        '**Connected.** Reachable from the main house through other finished space.',
      ],
      ordered: true,
      after: ['Pass all four and the space is gross living area. Fail one and it is either excluded or reported on a separate line. Nothing about heat, permits, windows, or how nice the finishes are changes those four tests.'],
    },
    {
      heading: 'What is considered livable square footage',
      paragraphs: [
        '"Livable" and "finished" mean the same thing in appraisal use: enclosed, conditioned, finished space. Listing sites sometimes use "total livable area" to mean above grade plus finished basement; appraisers keep those on separate lines. The difference explains most "the listing said 2,800 but the appraisal says 1,900" arguments.',
      ],
    },
  ],
  childrenHeading: 'Every "does it count?" question',
  faq: [
    { q: 'What is included in the square footage of a house?', a: 'Finished, above-grade living area measured to the outside of the exterior walls: bedrooms, bathrooms, kitchen, living areas, hallways, closets, and stairs. Garages, porches, unfinished space, and below-grade area are excluded from gross living area.' },
    { q: 'Does square footage include the basement?', a: 'A finished basement is measured but reported as below-grade area, not gross living area, because under ANSI Z765 a level with any part below ground on any side is below grade.' },
    { q: 'Does square footage include the garage?', a: 'No. A garage is never finished living area, even when it is attached, heated, and drywalled.' },
    { q: 'Do closets and bathrooms count in square footage?', a: 'Yes. Any finished space on a finished floor counts, including closets, hallways, bathrooms, and pantries.' },
  ],
};

const P = 'what-counts-as-square-footage';
const basementSrc = [src.fnma, src.fnmaAnsi, src.hirl];

export const countsQuestions = [
  {
    slug: 'does-a-finished-basement-count-as-square-footage',
    pillar: P,
    question: 'Does a finished basement count as square footage?',
    metaTitle: 'Does a Finished Basement Count as Square Footage? | The Appraisal Answer',
    description: 'What is included in the square footage of a house? A counts / does not count table for every space (basements, garages, attics, porches, ADUs) under ANSI Z765.',
    published: D, verdict: BELOW,
    shortAnswer: '**Not as gross living area.** A finished basement is measured and reported on an appraisal, but as **below-grade finished area** on its own line, because under ANSI Z765 any level with part of it below ground, even 1 inch on one side, is below grade in its entirety. It still adds value; it just is not added to the house\'s GLA.',
    body: [
      { heading: 'Why the basement is kept separate', paragraphs: [
        'Appraisers compare houses on above-grade GLA. If basements were mixed in, a 1,800 sq ft ranch with a finished basement would be compared to 3,600 sq ft two-story houses and the numbers would stop meaning anything. The all-sides grade rule draws the line in the same place for every house, which is why every basement entry in the [What counts guide](/what-counts-as-square-footage) lands on the same answer.',
      ] },
      { heading: 'What it is worth instead', paragraphs: [
        'The appraiser values the finished basement as a separate adjustment, typically a fraction of the per-square-foot value of above-grade space, with more for a walkout or a full bath. Listings, tax records, and Zillow often add the basement into a "total" figure, which is where the confusion starts. If you are wondering whether anything can change that, the honest answer is in [how to make a basement count](/how-to-make-a-basement-count-as-square-footage).',
      ] },
      { heading: 'Markets that treat the basement as a lower level', paragraphs: [
        'In hilly areas, a lot of houses are built into the slope: the lower level is below grade at the front and fully exposed at the rear, with a patio, full windows, and a door at ground level. In those markets, buyers, agents, and the MLS often do not call that space a basement at all. They call it a **lower level** and pay about the same per square foot for it as they do for the floors above.',
        'ANSI Z765 does not change for the market. The level is still reported as below-grade finished area because part of it is underground. What changes is the **adjustment**: where the market pays as much for the lower level as for above-grade space, the appraiser supports that with local sales and adjusts accordingly, so the value comes out the same even though the square footage sits on a different line. Fannie Mae allows exactly this as long as the appraiser explains it and treats the comparables the same way. The same logic applies to [hillside home lower levels](/does-a-hillside-home-lower-level-count-as-square-footage).',
      ] },
      { heading: 'Unfinished basements', paragraphs: [
        'Unfinished basement area is reported as below-grade **unfinished** area. It is not living area of any kind, above or below grade.',
      ] },
    ],
    faq: [
      { q: 'When can you count basement square footage?', a: 'When the level has no part below ground on any side. At that point it is not a basement under ANSI; it is a ground floor. A basement that is below ground anywhere is always below-grade area.' },
    ],
    sources: basementSrc,
    related: ['how-to-make-a-basement-count-as-square-footage', 'does-a-walkout-basement-count-as-square-footage'],
  },
  {
    slug: 'how-to-make-a-basement-count-as-square-footage',
    pillar: P,
    question: 'How do you make a basement count as square footage?',
    metaTitle: 'How to Make a Basement Count as Square Footage | What Works',
    description: 'How to make a basement count as square footage: you cannot move it above grade, but a finished basement still adds value. What actually raises the appraisal.',
    published: D, verdict: DEP,
    shortAnswer: '**You cannot turn a basement into gross living area** by finishing it, adding windows, or adding a walkout; under ANSI Z765 the level stays below grade as long as any part of it is below ground. What you can do is make it **finished below-grade area**, which appraisers value separately and buyers pay for.',
    body: [
      { heading: 'What actually adds value', list: [
        '**Finish it fully:** drywall, finished floor, finished ceiling, heat. Partial finishes get partial credit.',
        '**Add a full bathroom.** Basement baths are one of the largest below-grade adjustments.',
        '**Meet code for any bedroom** with an egress window; a legal bedroom below grade is worth more than a "bonus room" but still [does not count as GLA](/does-a-basement-bedroom-count-as-square-footage).',
        '**Get the permits.** Unpermitted finished basements get discounted or ignored by lenders.',
        '**Keep it dry.** Moisture is the first thing an appraiser looks for down there.',
      ] },
      { heading: 'The one real exception', paragraphs: [
        'If a lower level sits entirely above ground on every side (some hillside and split-level homes), it is not below grade at all under ANSI\'s all-sides rule and counts as GLA. That is a fact about the site, not something a remodel can create.',
      ] },
    ],
    sources: basementSrc,
    related: ['does-a-finished-basement-count-as-square-footage', 'does-a-walkout-basement-count-as-square-footage'],
  },
  {
    slug: 'does-a-walkout-basement-count-as-square-footage',
    pillar: P,
    question: 'Does a walkout basement count as square footage?',
    metaTitle: 'Does a Walkout Basement Count as Square Footage? | Still Below Grade',
    description: 'Does a walkout basement count as square footage? No. It is below grade under ANSI Z765 because the front is still underground. Why, and why it is still worth more.',
    published: D, verdict: BELOW,
    shortAnswer: '**No, not as gross living area.** A walkout basement is open to the ground on one side, but it is still buried on the others, and ANSI Z765 puts any level with part of it below ground in the **below-grade** column. It is reported as finished below-grade area and valued separately, usually higher than a standard basement.',
    body: [
      { heading: 'Why "walkout" does not mean "above grade"', paragraphs: [
        'The all-sides rule in ANSI Z765 looks at every side of the level. A walkout has a door and full windows on the downhill side and a foundation wall in the dirt on the uphill side. One buried side is enough, and so is one inch: ANSI sets no minimum depth, so a floor slab even 1 inch below the finished ground on any side makes the whole level below grade.',
      ] },
      { heading: 'Is a walkout basement considered above grade anywhere?', paragraphs: [
        'In hilly markets where most houses have a lower level that is buried at the front and open at the rear, market participants often treat that space as a regular floor of the house and pay the same per square foot for it as for above-grade space. The appraiser reports it below grade and then adjusts to match what the market actually pays, which can be a full above-grade rate.',
        'Some local MLS systems and tax assessors treat walkouts as living area, and some markets price them close to above-grade space. An appraiser can adjust for that in value, but on a Fannie Mae appraisal the square footage still goes on the below-grade line. The same split applies to any [finished basement](/does-a-finished-basement-count-as-square-footage), walkout or not.',
      ] },
    ],
    sources: basementSrc,
    related: ['does-a-daylight-basement-count-as-square-footage', 'does-a-finished-basement-count-as-square-footage'],
  },
  {
    slug: 'does-a-daylight-basement-count-as-square-footage',
    pillar: P,
    question: 'Does a daylight or lookout basement count as square footage?',
    metaTitle: 'Does a Daylight Basement Count as Square Footage? | Lookout Basements Too',
    description: 'Does a daylight or lookout basement count as square footage? No. Windows above ground do not change the ANSI rule; the level is still partly below grade.',
    published: D, verdict: BELOW,
    shortAnswer: '**No.** A daylight (or lookout) basement has windows that sit above ground because the foundation is raised or the lot slopes, but the floor and part of the walls are still below grade. Under ANSI Z765 it is **below-grade finished area**, like any other basement. It is valued a step above a windowless basement, not as living area.',
    body: [
      { heading: 'Daylight vs. lookout vs. walkout', list: [
        '**Lookout:** windows above grade on one or more sides, no exterior door at floor level.',
        '**Daylight:** larger windows, often a full wall of glass on the low side; sometimes a door.',
        '**Walkout:** a door at floor level to the outside on the low side. A [walkout basement](/does-a-walkout-basement-count-as-square-footage) is the strongest version of the same case.',
      ], after: ['All three fail ANSI\'s all-sides rule the same way. The names describe light and access, not grade.'] },
    ],
    sources: basementSrc,
    related: ['does-a-walkout-basement-count-as-square-footage', 'do-egress-windows-count-as-square-footage'],
  },
  {
    slug: 'does-a-basement-bedroom-count-as-square-footage',
    pillar: P,
    question: 'Does a basement bedroom count as square footage?',
    metaTitle: 'Does a Basement Bedroom Count as Square Footage? | Legal Bedroom vs GLA',
    description: 'Does a basement bedroom count as square footage? It counts as below-grade area, not GLA, even as a legal bedroom with egress. How appraisers report it.',
    published: D, verdict: BELOW,
    shortAnswer: '**Not as gross living area.** A basement bedroom, even a fully legal one with an egress window and closet, is below grade under ANSI Z765 and is reported as **below-grade finished area**. Its bedroom status matters for the room count and for value, but it never moves the square footage above grade.',
    body: [
      { heading: 'Two separate questions', paragraphs: [
        '"Is it a legal bedroom?" is a **building code** question: egress, minimum size, ceiling height, heat. "Does it count as GLA?" is an **ANSI grade** question. A room can pass the first and fail the second, which is exactly what a good basement bedroom does. ANSI Z765 has no bedroom rules of its own; it only measures.',
      ] },
      { heading: 'How it shows up on the appraisal', paragraphs: [
        'Fannie Mae forms report above-grade bedrooms in the room count and below-grade bedrooms in the basement description ("2 bedrooms, 1 bath below grade"). A listing that says "4 bedrooms" for a house with two upstairs and two in the basement will be written up as a 2-bedroom with a finished basement containing two bedrooms.',
      ] },
    ],
    sources: [src.fnma, src.fnmaAnsi],
    related: ['do-egress-windows-count-as-square-footage', 'does-a-finished-basement-count-as-square-footage'],
  },
  {
    slug: 'does-a-split-level-lower-floor-count-as-square-footage',
    pillar: P,
    question: 'Does the lower floor of a split-level home count as square footage?',
    metaTitle: 'Split-Level Square Footage | Does the Lower Level Count as GLA?',
    description: 'Split-level square footage: the lower level counts as GLA only if no part of it is below ground on any side. How appraisers apply the ANSI grade rule to split levels.',
    published: D, verdict: DEP,
    shortAnswer: '**It depends on the grade, not the layout.** The lower level of a split-level or bi-level home counts as gross living area only if **no part of it is below the ground on any side**. Most split-levels have a lower level that is a few feet into the ground, which makes it below-grade area under ANSI Z765 even though it has full-size windows and a family room.',
    body: [
      { heading: 'Why split-levels cause arguments', paragraphs: [
        'The lower level of a split-level looks and lives like the rest of the house: same finishes, same ceiling height, full windows. Buyers and MLS listings count it. The all-sides rule in ANSI Z765 does not care how it lives; it looks at where the ground is. A lower level that is 3 feet down on the front is below grade, and so is one that is 1 inch down. ANSI has no minimum depth; any part below ground on any side puts the whole level below grade.',
        'Fannie Mae allows the appraiser to explain that the market treats the lower level as living area and to adjust value accordingly, while still reporting the square footage below grade.',
      ] },
      { heading: 'The bi-level (raised ranch) case', paragraphs: [
        'A bi-level has its entry between floors and its lower level partly buried; it is treated the same way. A [raised ranch](/does-a-raised-ranch-lower-level-count-as-square-footage) is the same problem with a different floor plan.',
      ] },
    ],
    sources: basementSrc,
    related: ['does-a-raised-ranch-lower-level-count-as-square-footage'],
  },
  {
    slug: 'does-a-raised-ranch-lower-level-count-as-square-footage',
    pillar: P,
    question: 'Does the lower level of a raised ranch count as square footage?',
    metaTitle: 'Raised Ranch Square Footage | Does the Lower Level Count as GLA?',
    description: 'Raised ranch square footage: the lower level is usually below grade under ANSI Z765 and reported separately, even with full windows. When it is above grade instead.',
    published: D, verdict: DEP,
    shortAnswer: '**Usually not as gross living area.** A raised ranch (bi-level) has a lower level set partway into the ground, so under ANSI Z765 it is **below-grade** finished area even when it holds bedrooms, a family room, and full-size windows. Only if the lower level sits fully above ground on every side does it count as GLA.',
    body: [
      { heading: 'How appraisers report a raised ranch', paragraphs: [
        'Typically as a one-story house with a finished basement: the upper floor is the GLA, and the lower level is finished below-grade area with its own room count. Buyers used to seeing "2,200 sq ft" on the listing are surprised by an appraisal showing 1,100 above grade plus 1,100 below. The value can still come out the same; the split is a reporting rule from ANSI\'s grade test, not a discount.',
      ] },
    ],
    sources: basementSrc,
    related: ['does-a-split-level-lower-floor-count-as-square-footage', 'does-a-hillside-home-lower-level-count-as-square-footage'],
  },
  {
    slug: 'does-a-hillside-home-lower-level-count-as-square-footage',
    pillar: P,
    question: 'Does the lower level of a hillside or earth-berm home count as square footage?',
    metaTitle: 'Hillside Home Square Footage | Lower Levels and Earth-Berm Houses',
    description: 'Hillside and earth-berm home square footage: a lower level built into the slope is below grade under ANSI Z765 however open the downhill side is. The one exception.',
    published: D, verdict: DEP,
    shortAnswer: '**Usually not as gross living area.** A hillside home\'s lower level is built into the slope, so part of it is below ground on the uphill side and it is **below-grade** area under ANSI Z765, however open the downhill side is. An earth-berm home, buried on three sides by design, is below grade for the same reason. The level counts as GLA only if the ground is below the floor on every side.',
    body: [
      { heading: 'The all-sides rule on a slope', paragraphs: [
        'It only takes one side, and it only takes an inch. ANSI has no minimum depth, so a level that is 1 inch below the finished ground on the uphill side is below grade in its entirety. A lower level with a 20-foot wall of glass facing the view and a retaining wall of dirt on the back is below grade. The ANSI rule is deliberately blunt so that every measurer gets the same answer.',
      ] },
      { heading: 'When the lower level is really above grade', paragraphs: [
        'Some hillside houses are built on piers or stepped foundations so that the lower level sits fully above the finished ground on all sides, with crawl space or open air beneath the uphill edge. That level is above grade and counts. The appraiser has to look at the actual ground line on each side, not the house style.',
      ] },
      { heading: 'How hillside markets value the lower level', paragraphs: [
        'In neighborhoods where nearly every house steps down the slope, buyers and agents rarely think of the lower level as a basement. It is a lower level, with the same finishes and the same view as the main floor, and sales show buyers paying about the same per square foot for it. The appraiser still reports it as below-grade finished area under ANSI, but supports an adjustment equal to above-grade space when the local sales prove that is what the market pays. The square footage line and the value conclusion are two different things.',
      ] },
    ],
    sources: basementSrc,
    related: ['does-a-raised-ranch-lower-level-count-as-square-footage', 'does-a-daylight-basement-count-as-square-footage'],
  },
  {
    slug: 'do-egress-windows-count-as-square-footage',
    pillar: P,
    question: 'Do egress windows make a basement count as square footage?',
    metaTitle: 'Egress Windows and Square Footage | Safety Rule, Not a GLA Ticket',
    description: 'Do egress windows make a basement count as square footage? No. Egress is a code safety rule for bedrooms; it does not change whether a level is below grade.',
    published: D, verdict: NO,
    shortAnswer: '**No.** An egress window makes a basement room a **legal bedroom** under the building code; it does not make the basement **above grade** under ANSI Z765. The grade test is about where the ground sits against the walls, and a window well is an exception to the grade, not a change to it. The room stays below-grade finished area.',
    body: [
      { heading: 'What egress windows do change', list: [
        'Whether a basement room can be **counted and marketed as a bedroom**.',
        'The **value** an appraiser gives the below-grade area, since a legal bedroom is worth more than a bonus room.',
        '**Safety and insurance** posture.',
      ], after: ['None of that touches the square footage line. That is why a [basement bedroom](/does-a-basement-bedroom-count-as-square-footage) can be perfectly legal and still sit below grade, and why egress is not on the list of things that [make a basement count](/how-to-make-a-basement-count-as-square-footage).'] },
    ],
    sources: [src.fnmaAnsi, src.hud],
    related: ['does-a-basement-bedroom-count-as-square-footage'],
  },
  {
    slug: 'does-a-finished-attic-count-as-square-footage',
    pillar: P,
    question: 'Does a finished attic count as square footage?',
    metaTitle: 'Does a Finished Attic Count as Square Footage? | The 7-Foot Ceiling Test',
    description: 'Does a finished attic count as square footage? Yes if half of it has a 7-foot ceiling, only the part over 5 feet counts, and it has a real stair. The math, worked.',
    published: D, verdict: DEP,
    shortAnswer: '**Yes, if it passes two tests.** Under ANSI Z765 a finished attic counts as gross living area when (1) at least **half** of its finished floor area has a ceiling of **7 feet** or more, with only the area over **5 feet** counted, and (2) it is reached from the house by a **finished stairway**, not a pull-down ladder or a hatch. Fail either test and none of it counts.',
    body: [
      { heading: 'The ceiling math, worked', paragraphs: [
        'A finished attic room is 24 by 14 feet (336 sq ft). The ridge runs down the middle. Headroom is 7 feet or more across the center 8 feet of width (192 sq ft, 57%), so the room qualifies. Headroom is 5 feet or more across the center 11 feet (264 sq ft). **264 sq ft counts**; the 72 sq ft under the eaves does not. The same ceiling-height math decides the other attic-style spaces in the [What counts guide](/what-counts-as-square-footage).',
      ] },
      { heading: 'Access', paragraphs: [
        'A pull-down stairway or scuttle hole fails ANSI\'s finished-connection rule no matter how well the attic is finished. A permanent stair with finished walls fixes it. This is the exact scenario on many real estate license exams.',
      ] },
      { heading: 'Unfinished attics', paragraphs: [
        'Unfinished attic space is never living area, above or below the ceiling line.',
      ] },
    ],
    faq: [
      { q: 'Does the attic count as a story?', a: 'Only when it counts as living area. A finished attic that passes the ceiling and access tests is reported as a half story, which is why a Cape Cod with a finished upstairs is a 1.5-story house. An attic that fails either test, or is unfinished, is not a story at all; the house is described by its full floors and the attic is just storage space under the roof.' },
    ],
    sources: [src.hirl, src.fnmaAnsi],
    related: ['does-a-cape-cod-second-floor-count-as-square-footage'],
  },
  {
    slug: 'does-a-bonus-room-over-a-garage-count-as-square-footage',
    pillar: P,
    question: 'Does a bonus room over a garage count as square footage?',
    metaTitle: 'Does a Bonus Room Over a Garage Count as Square Footage? | Access Decides',
    description: 'Does a bonus room over a garage count as square footage? Yes if finished, 7-foot ceiling, and reached through the house. No if the only stair is in the garage.',
    published: D, verdict: DEP,
    shortAnswer: '**Yes, if you reach it through the house.** A finished bonus room over an attached garage counts as gross living area under ANSI Z765 when it is finished like the rest of the house, meets the **7-foot ceiling** rule (with the sloped-ceiling allowance), and is entered from **finished space inside the house**. If the only way up is a stair inside the garage or from outside, it fails the finished-connection rule and does not count.',
    body: [
      { heading: 'Common ways bonus rooms fail', list: [
        'Stair rises from the garage floor (unfinished space).',
        'Knee-wall ceilings that put less than half the room at 7 feet, which fails the ANSI ceiling rule.',
        'Unheated or only a space heater; not finished to the house standard.',
        'Over a **detached** garage: then it is a separate structure and is [reported separately](/does-a-garage-apartment-count-as-square-footage).',
      ] },
      { heading: 'The garage below still never counts', paragraphs: [
        'Counting the room above does not pull the garage in. The [garage itself](/does-a-garage-count-as-square-footage) never counts, whatever is above it.',
      ] },
    ],
    sources: [src.hirl, src.fnmaAnsi],
    related: ['does-a-garage-count-as-square-footage', 'does-a-finished-attic-count-as-square-footage'],
  },
  {
    slug: 'does-a-cape-cod-second-floor-count-as-square-footage',
    pillar: P,
    question: 'Does a Cape Cod second floor count as square footage?',
    metaTitle: 'Cape Cod Second Floor Square Footage | Knee Walls and the 7-Foot Rule',
    description: 'Does a Cape Cod second floor count as square footage? Partly. Under ANSI Z765 only area with 5 feet of headroom counts and half must reach 7 feet. Dormers explained.',
    published: D, verdict: DEP,
    shortAnswer: '**Partly.** A Cape Cod\'s second floor sits under the roof slope, so ANSI Z765\'s sloped-ceiling rule applies: at least **half** the finished floor area must have a **7-foot** ceiling, and only the area with **5 feet** or more of headroom counts. A typical Cape loses 20 to 35% of its upstairs footprint to the knee walls; dormers win some of it back.',
    body: [
      { heading: 'Why the upstairs is smaller than the downstairs', paragraphs: [
        'The first floor is measured to the exterior walls. The second floor is measured to where the ceiling hits 5 feet, which is well inside the exterior walls on both eave sides. A 30 by 26 foot Cape (780 sq ft down) commonly measures **500 to 620 sq ft** up. The sloped-ceiling rule behind those numbers is the same one that governs every attic-type space in the [What counts guide](/what-counts-as-square-footage).',
      ] },
      { heading: 'Dormers', paragraphs: [
        'A shed dormer across the back raises the ceiling over its whole width to full height, which both adds countable area and helps the room clear the half-at-7-feet test. Small gable dormers add only their own footprint.',
      ] },
    ],
    sources: [src.hirl, src.fnmaAnsi],
    related: ['does-a-finished-attic-count-as-square-footage'],
  },
  {
    slug: 'does-a-loft-count-as-square-footage',
    pillar: P,
    question: 'Does a loft count as square footage?',
    metaTitle: 'Does a Loft Count as Square Footage? | Loft Floors vs Open-to-Below',
    description: 'Does a loft count as square footage? The loft floor does, if finished with a 7-foot ceiling and a real stair. The open-to-below space it overlooks does not.',
    published: D, verdict: DEP,
    shortAnswer: '**The loft floor counts; the opening it overlooks does not.** Under ANSI Z765 a finished loft with a **7-foot ceiling** reached by a permanent stair is gross living area, measured to its railing or edge. The **open-to-below** area (the two-story space it looks down into) is counted once, on the floor below, and never on the loft level.',
    body: [
      { heading: 'What disqualifies a loft', list: [
        'Ceiling under 7 feet over more than half the floor, which fails the ANSI ceiling rule.',
        'Access by ladder or ship\'s stair with no finished stairway (fails ANSI\'s finished-connection rule).',
        'Unfinished storage loft in a garage or barn.',
      ] },
      { heading: 'Two-story foyers and great rooms', paragraphs: [
        'The volume over a two-story living room is not floor. It is counted on the first floor only. A second-floor hallway that bridges across it is counted for its own width. Same principle as stairs: count floor, not air.',
      ] },
    ],
    sources: [src.hirl, src.fnmaAnsi],
    related: ['does-a-finished-attic-count-as-square-footage'],
  },
  {
    slug: 'does-a-garage-count-as-square-footage',
    pillar: P,
    question: 'Does a garage count as square footage?',
    metaTitle: 'Does a Garage Count as Square Footage? | Attached or Heated, Still No',
    description: 'Does a garage count as square footage? No. Under ANSI Z765 a garage is never living area, even attached, heated, or drywalled. Why Zillow sometimes includes it.',
    published: D, verdict: NO,
    shortAnswer: '**No, never.** A garage is not finished living area under ANSI Z765, so it is never part of gross living area, whether it is attached, heated, insulated, drywalled, or has an epoxy floor. Its area is reported separately on the appraisal as garage space. Only a **completed conversion** into a finished room, connected to the house, changes that.',
    body: [
      { heading: 'Does Zillow include the garage in square footage?', paragraphs: [
        'Sometimes, by accident. Zillow and similar sites pull square footage from tax records and MLS feeds, and some assessors record "total building area" including the garage. That is why a listing can show a number 400 to 600 sq ft larger than the appraisal. The appraisal is the one measured to a standard.',
      ] },
      { heading: 'Heated garages and workshops', paragraphs: [
        'Heat does not make space living area. Adding a heater does not change that; [heat alone is not enough](/does-heated-space-count-as-square-footage). A garage used as a workshop is still a garage.',
      ] },
      { heading: 'Conversions', paragraphs: [
        'A garage fully converted to a finished room with a finished floor, ceiling, heat, and a finished connection to the house is evaluated as a room, not a garage. Details and the lending catch: [garage conversions](/does-a-garage-conversion-count-as-square-footage).',
      ] },
    ],
    faq: [
      { q: 'Does an attached garage count as square footage?', a: 'No. Attachment does not matter; a garage is not finished living area under ANSI Z765 and is reported separately.' },
      { q: 'Does a heated garage count as square footage?', a: 'No. Heat alone does not make a space finished living area.' },
    ],
    sources: [src.hirl, src.fnma],
    related: ['does-a-garage-conversion-count-as-square-footage', 'does-a-bonus-room-over-a-garage-count-as-square-footage', 'does-heated-space-count-as-square-footage'],
  },
  {
    slug: 'does-a-garage-conversion-count-as-square-footage',
    pillar: P,
    question: 'Does a garage conversion count as square footage?',
    metaTitle: 'Does a Garage Conversion Count as Square Footage? | When It Counts',
    description: 'Does a garage conversion count as square footage? Yes when fully finished and connected to the house. The permit and market problems that can sink its value.',
    published: D, verdict: DEP,
    shortAnswer: '**Yes, when the conversion is complete.** A former garage counts as gross living area under ANSI Z765 once it is a **finished room**: finished floor at house level, finished walls and ceiling, heat, a 7-foot ceiling, and a **finished connection** to the rest of the house. A garage with drywall and a rug but a garage door and a slab step-down is still a garage.',
    body: [
      { heading: 'The lending catch', paragraphs: [
        'ANSI does not care about permits, but lenders do. An **unpermitted** conversion may be measured and then given little or no value, and FHA can require it be restored or permitted. In markets where covered parking is expected, an appraiser may also find the conversion hurts value even when it adds GLA. The lender side of that is the same as for any [unpermitted addition](/does-an-unpermitted-addition-count-as-square-footage).',
      ] },
      { heading: 'Checklist for a conversion that counts', list: [
        'Garage door removed and the opening framed and finished.',
        'Floor raised or finished to living standard, no step-down slab.',
        'Heated and cooled like the rest of the house.',
        'Door or opening into finished space inside the house.',
        'Permits on file.',
      ] },
    ],
    sources: [src.fnma, src.hud],
    related: ['does-a-garage-count-as-square-footage', 'does-an-unpermitted-addition-count-as-square-footage'],
  },
  {
    slug: 'does-a-sunroom-count-as-square-footage',
    pillar: P,
    question: 'Does a sunroom count as square footage?',
    metaTitle: 'Does a Sunroom Count as Square Footage? | 3-Season and 4-Season Rooms',
    description: 'Does a sunroom count as square footage? Only a 4-season room finished and heated like the house counts under ANSI Z765. 3-season rooms do not. How to tell them apart.',
    published: D, verdict: DEP,
    shortAnswer: '**Only if it is finished and heated like the rest of the house.** A **four-season** sunroom on a permanent foundation with insulated walls, house-standard heating and cooling, finished floor and ceiling, and a 7-foot ceiling counts as gross living area under ANSI Z765. A **three-season room** or enclosed porch that is unheated, uninsulated, or finished to a lower standard does not; it is reported as a porch.',
    body: [
      { heading: 'Three-season vs. four-season', table: { head: ['Feature', 'Three-season (does not count)', 'Four-season (counts)'], rows: [
        ['Heating and cooling', 'None, or a space heater', 'Ducted or permanent, same as the house'],
        ['Walls and glass', 'Single-pane, screens, aluminum panels', 'Insulated walls, insulated glass'],
        ['Floor', 'Deck boards or slab', 'Finished floor at house level'],
        ['Foundation', 'Deck piers', 'Permanent foundation'],
      ] } },
      { heading: 'Manufactured sunroom kits', paragraphs: [
        'Most aluminum-and-glass sunroom kits are three-season rooms even when the owner adds a heater. Appraisers judge by construction and finish level, not by the thermostat. A space heater does not get it there either; [heat alone is not enough](/does-heated-space-count-as-square-footage).',
      ] },
    ],
    sources: [src.hirl, src.fnmaAnsi],
    related: ['does-a-screened-porch-count-as-square-footage', 'does-heated-space-count-as-square-footage'],
  },
  {
    slug: 'does-a-screened-porch-count-as-square-footage',
    pillar: P,
    question: 'Does a screened porch count as square footage?',
    metaTitle: 'Does a Screened Porch Count as Square Footage? | Decks and Balconies',
    description: 'Does a screened porch count as square footage? No. Screened porches, decks, balconies, and covered patios are not finished area under ANSI Z765. How they are valued.',
    published: D, verdict: NO,
    shortAnswer: '**No.** A screened porch is not enclosed, finished, year-round living space, so it is not gross living area under ANSI Z765. The same is true of **decks, balconies, covered patios, and open porches**. They are measured and listed separately on the appraisal and given their own value, which is real but much smaller per square foot than living area.',
    body: [
      { heading: 'Is a screened porch considered living space?', paragraphs: [
        'Not by any appraisal standard. Screens are not walls, and a porch is not conditioned. Enclosing it with glass and heat can make it a sunroom, which is a different question: [does a sunroom count?](/does-a-sunroom-count-as-square-footage).',
      ] },
      { heading: 'Balconies', paragraphs: [
        'A balcony on a house or condo is never GLA. Some condo listings quote "total area" including balconies; the appraisal will not. Condos are a gap in the standard itself, which Fannie Mae fills with its own guidance.',
      ] },
      { heading: 'Does a porch add square footage on the listing?', paragraphs: [
        'Listing agents sometimes count enclosed porches. Buyers should treat any such number as marketing until the appraiser measures it.',
      ] },
    ],
    sources: [src.hirl, src.fnma],
    related: ['does-a-sunroom-count-as-square-footage', 'does-a-breezeway-count-as-square-footage'],
  },
  {
    slug: 'does-a-breezeway-count-as-square-footage',
    pillar: P,
    question: 'Does a breezeway count as square footage?',
    metaTitle: 'Does a Breezeway Count as Square Footage? | Open vs Enclosed Connectors',
    description: 'Does a breezeway count as square footage? Only when enclosed, finished, and heated like the house. An open breezeway is not GLA and does not connect a room to the house.',
    published: D, verdict: DEP,
    shortAnswer: '**Only if it is enclosed and finished.** A breezeway that is walled in, heated, and finished to the house standard counts as gross living area under ANSI Z765 like any hallway. An **open or screened** breezeway does not count, and, importantly, it does **not** create a finished connection: a finished room on the far side of an open breezeway is still a separate structure.',
    body: [
      { heading: 'Why the breezeway decides more than its own area', paragraphs: [
        'ANSI\'s finished-connection rule needs finished space all the way from the house to the room. An enclosed breezeway can turn a garage apartment or guest suite into part of the house; an open one leaves it [reported separately](/does-a-garage-apartment-count-as-square-footage).',
      ] },
    ],
    sources: [src.hirl, src.fnmaAnsi],
    related: ['does-a-screened-porch-count-as-square-footage'],
  },
  {
    slug: 'does-an-unpermitted-addition-count-as-square-footage',
    pillar: P,
    question: 'Does an unpermitted addition count as square footage?',
    metaTitle: 'Unpermitted Addition Square Footage | Does It Count on an Appraisal?',
    description: 'Does an unpermitted addition count as square footage? ANSI measures it like any finished area, but appraisers must report it and lenders may give it no value.',
    published: D, verdict: DEP,
    shortAnswer: '**For measuring, yes. For value and lending, it is a problem.** ANSI Z765 has no permit rule: a finished, above-grade, connected addition is measured and included in gross living area. But Fannie Mae and FHA require the appraiser to **report** unpermitted work, and the lender may require permits, give the area reduced or zero value, or decline the loan.',
    body: [
      { heading: 'Will an appraiser report unpermitted work?', paragraphs: [
        'Yes, if it is apparent. Appraisers compare the house to public records and the sketch; an extra 300 sq ft that the assessor does not know about gets a comment. They are not code inspectors, but they are required to describe the property accurately and to note anything that affects marketability or safety.',
      ] },
      { heading: 'How it affects the appraisal', list: [
        '**Conventional (Fannie Mae):** the appraiser can include the area if it is well built and typical for the market, must disclose the permit status, and may adjust value down. The lender decides whether to accept it.',
        '**FHA:** HUD 4000.1 lets the appraiser include unpermitted space that is of quality workmanship, but may require it to be permitted or corrected.',
        '**Any loan:** if the work is unsafe or clearly substandard, it is excluded and may have to be fixed before closing.',
      ] },
    ],
    sources: [src.fnma, src.hud],
    related: ['does-a-garage-conversion-count-as-square-footage', 'does-an-in-law-suite-count-as-square-footage'],
  },
  {
    slug: 'does-an-adu-count-as-square-footage',
    pillar: P,
    question: 'Does an ADU count as square footage?',
    metaTitle: 'Does an ADU Count as Square Footage? | Attached vs Detached Accessory Units',
    description: 'Does an ADU count as square footage? An attached ADU with a finished connection can; a detached ADU never joins the main house GLA and is reported on its own.',
    published: D, verdict: DEP,
    shortAnswer: '**Detached, no. Attached, sometimes.** Under ANSI Z765 a **detached** accessory dwelling unit is a separate structure, measured and reported on its own and never added to the main house\'s gross living area. An **attached** ADU (a converted wing or basement unit) can count only if it is finished, above grade, and connected to the house through finished space; a unit with its own outside entry and no interior connection is reported separately.',
    body: [
      { heading: 'How appraisers report an ADU', paragraphs: [
        'Fannie Mae asks for the ADU\'s square footage, room count, and rental income on their own lines, and requires the appraiser to say whether it is a legal unit. A basement ADU is below-grade area regardless. The ADU is valued as an accessory unit, which in many markets is a large adjustment, separate from the GLA math.',
      ] },
      { heading: 'Why the GLA line matters less than people think', paragraphs: [
        'Buyers looking for an ADU pay for the unit, not for 600 extra square feet of GLA. Keeping it separate lets the appraiser compare the house to houses and the unit to units. A detached [guest house or garage apartment](/does-a-garage-apartment-count-as-square-footage) is handled the same way.',
      ] },
    ],
    sources: [src.fnma, src.fnmaAnsi],
    related: ['does-a-garage-apartment-count-as-square-footage', 'does-an-in-law-suite-count-as-square-footage'],
  },
  {
    slug: 'does-a-garage-apartment-count-as-square-footage',
    pillar: P,
    question: 'Does a guest house or garage apartment count as square footage?',
    metaTitle: 'Guest House and Garage Apartment Square Footage | Separate Structure',
    description: 'Does a guest house, casita, or garage apartment count as square footage? No. Detached structures are measured and reported separately under ANSI Z765.',
    published: D, verdict: NO,
    shortAnswer: '**No, not as part of the house.** A guest house, casita, or apartment over a detached garage is a **separate structure** under ANSI Z765. Its finished area is measured and reported on its own line, never added to the main house\'s gross living area. If the garage is attached and the apartment is reached through finished space in the house, it is a [bonus room](/does-a-bonus-room-over-a-garage-count-as-square-footage) and can count.',
    body: [
      { heading: 'How it is valued', paragraphs: [
        'As an accessory building or unit, based on what buyers in the market pay for one, not on a per-square-foot GLA rate. A 600 sq ft casita with a kitchen and bath can add far more than 600 sq ft of GLA would; it just shows up on a different line. If it has its own kitchen and entrance, it is really an [ADU](/does-an-adu-count-as-square-footage), and the same reporting applies.',
      ] },
    ],
    sources: [src.fnma, src.hirl],
    related: ['does-an-adu-count-as-square-footage', 'does-a-shed-count-as-square-footage'],
  },
  {
    slug: 'does-an-in-law-suite-count-as-square-footage',
    pillar: P,
    question: 'Does an in-law suite count as square footage?',
    metaTitle: 'Does an In-Law Suite Count as Square Footage? | Attached vs Separate',
    description: 'Does an in-law suite count as square footage? Yes when it is attached, above grade, finished, and has an interior connection. Basement and detached suites do not.',
    published: D, verdict: DEP,
    shortAnswer: '**Yes, if it is part of the house.** An in-law suite that is attached, above grade, finished, and reached through finished space inside the house counts as gross living area under ANSI Z765, kitchenette and all. A suite in the **basement** is below-grade area, and a suite in a **detached** building is a separate structure.',
    body: [
      { heading: 'Interior connection is the test', paragraphs: [
        'Many in-law suites have their own exterior door, which is fine as long as there is also a door into the house through finished space. If the only access is from outside, ANSI\'s finished-connection rule treats it like an [ADU](/does-an-adu-count-as-square-footage) and it is reported separately.',
      ] },
      { heading: 'Second kitchens and zoning', paragraphs: [
        'A second kitchen can raise zoning questions (is this a two-unit property?) and permit questions. Those affect value and lending, not the measurement. If the suite was built without a permit, the [unpermitted addition](/does-an-unpermitted-addition-count-as-square-footage) rules apply on top.',
      ] },
    ],
    sources: [src.fnma, src.fnmaAnsi],
    related: ['does-an-adu-count-as-square-footage', 'does-a-basement-bedroom-count-as-square-footage'],
  },
  {
    slug: 'does-a-shed-count-as-square-footage',
    pillar: P,
    question: 'Does a shed, pool house, or outbuilding count as square footage?',
    metaTitle: 'Do Sheds and Pool Houses Count as Square Footage? | Outbuildings Explained',
    description: 'Does a shed, pool house, workshop, or finished outbuilding count as square footage? No. Under ANSI Z765 every detached structure is reported separately.',
    published: D, verdict: NO,
    shortAnswer: '**No.** Sheds, pool houses, workshops, barns, and any other **detached** building are separate structures under ANSI Z765 and are never added to the house\'s gross living area, even when fully finished, heated, and plumbed. They are described and valued on their own as site improvements or accessory buildings.',
    body: [
      { heading: 'Finished pool houses and studios', paragraphs: [
        'A finished pool house with a bath is valued as an accessory building, and if it has a kitchen it may be an [ADU](/does-an-adu-count-as-square-footage). Either way it is measured separately. A backyard office pod is the same.',
      ] },
      { heading: 'How the appraisal shows it', paragraphs: [
        'Outbuildings appear in the site or improvements description with their size and condition, and get a lump-sum adjustment against comparable sales that lack them. A basic shed adds far less than a finished studio with power and plumbing, but neither one is GLA.',
        'The one way an outbuilding joins the house is an enclosed, finished connector. An enclosed, finished [breezeway](/does-a-breezeway-count-as-square-footage) is the one thing that can change that.',
      ] },
    ],
    sources: [src.hirl, src.fnma],
    related: ['does-a-garage-apartment-count-as-square-footage', 'does-an-adu-count-as-square-footage'],
  },
  {
    slug: 'does-a-bay-window-count-as-square-footage',
    pillar: P,
    question: 'Does a bay window count as square footage?',
    metaTitle: 'Does a Bay Window Count as Square Footage? | Floor and Ceiling Decide',
    description: 'Does a bay window count as square footage? Yes if it has a floor at room level and a 7-foot ceiling; a box bay or window seat with no floor does not.',
    published: D, verdict: DEP,
    shortAnswer: '**Yes, if it has a floor.** Because ANSI Z765 measures to the exterior walls, a bay window that extends the room\'s **floor** to the outside wall of the bay, with a ceiling of at least **7 feet**, is included in gross living area. A **box bay** or window seat that projects from the wall above floor level, with no floor beneath it at room level, is not.',
    body: [
      { heading: 'How appraisers handle it', paragraphs: [
        'The bay is measured as a small bump in the exterior footprint. On a sketch it adds a few square feet, which is why bay windows show up as odd angles on appraisal drawings. That is a direct result of ANSI measuring from the outside of the walls.',
      ] },
      { heading: 'Bay window vs. bow window vs. box bay', list: [
        '**Bay window:** three panels angled out from the wall, usually with a floor extension. Counts if the floor is at room level.',
        '**Bow window:** a curved run of four or more panels; same test, floor decides.',
        '**Box bay or garden window:** a shelf-like box above floor height. Does not count.',
      ], after: ['A window seat built into a bay with floor beneath it counts; the seat is just furniture on countable floor.'] },
    ],
    sources: [src.hirl],
    related: ['does-a-cantilever-count-as-square-footage'],
  },
  {
    slug: 'does-a-cantilever-count-as-square-footage',
    pillar: P,
    question: 'Does a cantilevered floor count as square footage?',
    metaTitle: 'Does a Cantilever Count as Square Footage? | Overhangs Under ANSI Z765',
    description: 'Does a cantilevered floor count as square footage? Yes. Under ANSI Z765 each floor is measured to its own exterior, so the overhang counts even with nothing beneath it.',
    published: D, verdict: YES,
    shortAnswer: '**Yes.** ANSI Z765 measures each floor to its own exterior walls, so a second floor that overhangs the first by two feet is measured to the overhang and the whole floor counts as gross living area. The fact that there is open air or a porch roof beneath it does not matter. A roof overhang or eave with no floor above it does not count.',
    body: [
      { heading: 'Measuring an overhang', paragraphs: [
        'Because you cannot walk around a cantilevered second floor, the appraiser measures it from inside and adds the wall thickness, or measures the overhang from below. Garrison-style colonials and modern boxes with cantilevered upper floors are the usual cases. They count because ANSI measures the exterior, and a cantilever has an exterior.',
      ] },
      { heading: 'What does not count as a cantilever', list: [
        'Roof eaves and soffits: no floor above them.',
        'A porch roof or carport under the upper floor: the upper floor counts, the covered area below does not.',
        'A cantilevered deck or balcony: not enclosed, so it is a [deck](/does-a-screened-porch-count-as-square-footage), not GLA.',
      ] },
    ],
    sources: [src.hirl],
    related: ['does-a-bay-window-count-as-square-footage', 'does-a-chimney-count-as-square-footage'],
  },
  {
    slug: 'does-a-chimney-count-as-square-footage',
    pillar: P,
    question: 'Does a chimney count as square footage?',
    metaTitle: 'Does a Chimney Count as Square Footage? | Interior vs Exterior Fireplaces',
    description: 'Does a chimney count as square footage? A chimney inside the exterior walls is part of the footprint and counts. An exterior chimney bumped out from the wall does not.',
    published: D, verdict: DEP,
    shortAnswer: '**Inside the walls, yes; bumped out from the wall, no.** ANSI Z765 measures the exterior of the house, so a fireplace and chimney that sit **inside** the exterior wall line are part of the footprint and are counted like a closet. An exterior chimney that projects **outside** the wall is not living area and is not measured into the square footage.',
    body: [
      { heading: 'Fireplace bump-outs', paragraphs: [
        'A fireplace built into a small bump-out of the exterior wall is a judgment call: if the bump-out has floor and ceiling at room level (a real alcove), it is measured like a [bay window](/does-a-bay-window-count-as-square-footage); if it is just masonry, it is not. Either way it is a few square feet, which is why the standard treats it simply.',
      ] },
    ],
    sources: [src.hirl],
    related: ['does-a-cantilever-count-as-square-footage', 'do-closets-count-as-square-footage'],
  },
  {
    slug: 'do-closets-count-as-square-footage',
    pillar: P,
    question: 'Do closets, hallways, and bathrooms count as square footage?',
    metaTitle: 'Do Closets Count as Square Footage? | Hallways, Bathrooms and Pantries Too',
    description: 'Do closets count in square footage? Yes, with hallways, bathrooms, pantries, and stairs. ANSI Z765 measures the whole finished floor to the outside walls.',
    published: D, verdict: YES,
    shortAnswer: '**Yes.** Closets, hallways, bathrooms, pantries, entries, and stairs all count as gross living area under ANSI Z765. The standard measures the entire finished floor to the outside of the exterior walls; it does not add up rooms. Interior walls, closets, and every square foot between them are in the number.',
    body: [
      { heading: 'Why this surprises people', paragraphs: [
        'Room dimensions in a listing (12 by 14 bedroom, 10 by 12 office) add up to far less than the house\'s square footage because they leave out closets, halls, baths, stairs, and every wall. A 2,000 sq ft house often has only 1,400 to 1,500 sq ft of "room" area. The gap is wall thickness, which ANSI counts on purpose.',
      ] },
      { heading: 'What does not count on a finished floor', paragraphs: [
        'Open-to-below areas, unfinished storage, and any attached garage space. The exceptions are open air, like the hole a [loft](/does-a-loft-count-as-square-footage) looks down into, and space that is not finished, like a [garage](/does-a-garage-count-as-square-footage).',
      ] },
    ],
    sources: [src.hirl, src.fnmaAnsi],
    related: ['does-a-laundry-room-count-as-square-footage'],
  },
  {
    slug: 'does-a-laundry-room-count-as-square-footage',
    pillar: P,
    question: 'Do laundry rooms, mechanical rooms, and under-stair storage count as square footage?',
    metaTitle: 'Do Laundry and Mechanical Rooms Count as Square Footage? | Utility Space',
    description: 'Do laundry rooms, mechanical rooms, and under-stair storage count as square footage? Yes when finished and on a finished, above-grade floor. Unfinished space does not.',
    published: D, verdict: DEP,
    shortAnswer: '**Yes, if finished and on a finished floor.** A laundry room, mechanical closet, or under-stair storage space that is finished (walls, floor, ceiling) and sits on an above-grade finished level counts as gross living area under ANSI Z765. The same rooms in a basement are below-grade area, and an **unfinished** utility room (bare studs, slab) on any level does not count.',
    body: [
      { heading: 'The furnace room test', paragraphs: [
        'A furnace room does not have to be pretty, but it has to be finished to the house standard: drywalled, with a finished floor and ceiling. A concrete-floored mechanical room with exposed framing off a finished hallway is excluded from the finished area even though it is inside the exterior walls.',
      ] },
    ],
    sources: [src.hirl],
    related: ['do-closets-count-as-square-footage', 'does-heated-space-count-as-square-footage'],
  },
  {
    slug: 'does-heated-space-count-as-square-footage',
    pillar: P,
    question: 'Does heated space automatically count as square footage?',
    metaTitle: 'Does Heated Space Count as Square Footage? | Heat Is Not the Test',
    description: 'Does heated space count as square footage? Not by itself. Heat is one part of finished area under ANSI Z765; garages, porches, and basements stay out of GLA.',
    published: D, verdict: NO,
    shortAnswer: '**No, not automatically.** Heat is one ingredient of finished area, not the test. Under ANSI Z765 a space must be **finished** (walls, floor, ceiling), **above grade**, **7 feet tall**, and **connected** through finished space to count as gross living area. A heated garage, a heated three-season room, and a heated basement all fail at least one of those and stay out of GLA.',
    body: [
      { heading: 'Where the "heated square footage" idea comes from', paragraphs: [
        'Some MLS systems and assessors use "heated square feet" as a shorthand for living area, and in older Southern practice it was common. It is a rough proxy, not a standard, and it overcounts anything heated that is not finished. Appraisals working to ANSI do not use it.',
      ] },
      { heading: 'The reverse question', paragraphs: [
        'Can unheated space count? No. Suitable for year-round use means conditioned. A finished but unheated room is not finished area either. A heated [sunroom](/does-a-sunroom-count-as-square-footage) and a heated [garage](/does-a-garage-count-as-square-footage) are the two places this comes up most.',
      ] },
    ],
    sources: [src.hirl, src.fnmaAnsi],
    related: ['does-a-garage-count-as-square-footage', 'does-a-sunroom-count-as-square-footage'],
  },
];

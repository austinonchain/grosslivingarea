// /glossary hub + /glossary/<term-slug> pages. Terms come from Austin's Wikipedia entity map (2026-09-21).
// Zoning and floor area ratio are in at Austin's request (2026-09-21), glossary only: the articles still stay ANSI-only.
// Term pages end with a "Further reading" Wikipedia link, the one exception to the no-external-links rule (Austin, 2026-09-21).
// `wikipedia` also feeds DefinedTerm sameAs.
// `short` is the one-line hub summary, `definition` the lede, `more` two paragraphs on how the term relates to GLA.
const D = '2026-09-21';

export const glossaryIndex = {
  kind: 'glossaryIndex',
  slug: 'glossary',
  title: 'Gross Living Area Glossary',
  metaTitle: 'Gross Living Area Glossary | Terms Defined',
  description: 'Plain definitions of the terms behind home measurement and appraisal: gross living area, ANSI, USPAP, basements, square feet, and the groups that set the rules.',
  published: D,
  intro: [
    'Plain definitions of the terms that come up when a house is measured and appraised: the measurements themselves, the parts of a house that cause trouble, and the groups that write the rules.',
  ],
};

const terms = [
  {
    slug: 'gross-living-area',
    term: 'Gross living area',
    wikipedia: null,
    metaTitle: 'Gross Living Area (GLA) | Definition',
    description: 'Gross living area (GLA) is the finished, above-grade living space of a house, measured to the outside of the walls. Here is what counts and what does not.',
    short: 'The finished, above-grade living space of a house, measured to the outside of the exterior walls.',
    definition: 'Gross living area, or GLA, is the total finished, above-grade living space in a house, measured to the outside face of the exterior walls. It is the size figure appraisers use to compare one home with another.',
    more: [
      'In the United States the measuring rules come from ANSI Z765, and Fannie Mae requires that standard on most single-unit appraisals for loan applications dated April 1, 2022 or later. To count, a space has to be finished for year-round living, sit entirely above the ground on every side, meet the ceiling height rules, and connect to the rest of the house through finished area.',
      'Garages, unfinished rooms, porches, and basements are left out, finished basements included. The appraisal still reports them, each on its own line, so the size of the home stays comparable while the extra space is valued separately.',
    ],
  },
  {
    slug: 'american-measurement-standard',
    term: 'American Measurement Standard',
    wikipedia: 'https://en.wikipedia.org/wiki/American_Measurement_Standard',
    metaTitle: 'American Measurement Standard | Definition',
    description: 'The American Measurement Standard (AMS) is a voluntary guide for measuring square footage in homes. Here is what it covers and how it relates to ANSI Z765.',
    short: 'A voluntary guide for measuring, calculating, and reporting square footage in homes.',
    definition: 'The American Measurement Standard, or AMS, is a voluntary guide for measuring, calculating, and reporting square footage in residential dwellings. Its 2020 edition was compiled by a consensus of real estate agents, appraisers, assessors, home builders, and architects.',
    more: [
      'Like ANSI Z765, the AMS measures from the exterior dimensions of a house. It sorts all of a home\'s space into eight reporting categories and sets out definitions for finished square footage and gross living area, with many illustrations and worked examples.',
      'A state appraisal board approved the AMS for use in January 2019. It is a separate document from ANSI Z765, and on loans sold to Fannie Mae, ANSI Z765 is the standard appraisers are required to follow.',
    ],
  },
  {
    slug: 'real-estate-appraisal',
    term: 'Real estate appraisal',
    wikipedia: 'https://en.wikipedia.org/wiki/Real_estate_appraisal',
    metaTitle: 'Real Estate Appraisal | Why Size Matters',
    description: 'A real estate appraisal is an appraiser\'s opinion of what a property is worth. Here is how it works and why gross living area is the size figure it relies on.',
    short: 'An appraiser\'s opinion of what a property is worth, built on comparisons with similar sales.',
    definition: 'A real estate appraisal is an appraiser\'s opinion of what a property is worth, usually its market value. Most home appraisals are ordered by a lender before it approves a mortgage.',
    more: [
      'Size is one of the main facts an appraisal rests on. The appraiser compares the home with recent sales of similar homes nearby, and gross living area is the figure used to line those sales up. Differences in size then turn into adjustments to the comparable sales.',
      'That is why measuring rules matter. If one house is measured with its basement and another without, the comparison breaks. ANSI Z765 exists so that appraisers measure every house the same way.',
    ],
  },
  {
    slug: 'american-national-standards-institute',
    term: 'American National Standards Institute',
    wikipedia: 'https://en.wikipedia.org/wiki/American_National_Standards_Institute',
    metaTitle: 'ANSI (American National Standards Institute)',
    description: 'The American National Standards Institute (ANSI) is the private nonprofit that accredits U.S. standards. Here is what it does and how ANSI Z765 got its name.',
    short: 'The private nonprofit that accredits American standards, including ANSI Z765.',
    definition: 'The American National Standards Institute, or ANSI, is a private nonprofit organization, founded in 1918, that oversees the development of voluntary standards in the United States. It does not write most standards itself. It accredits the groups that do and approves their work as American National Standards.',
    more: [
      'The square footage standard for houses carries its name: ANSI Z765. Home Innovation Research Labs is the secretariat that develops and sells it, and editions have come out in 1996, 2003, 2013, and 2021.',
      'ANSI also approves measuring standards for other kinds of buildings, including the office standard developed with BOMA. The ANSI name on a standard means it went through that consensus process, not that the institute wrote the rules.',
    ],
  },
  {
    slug: 'square-foot',
    term: 'Square foot',
    wikipedia: 'https://en.wikipedia.org/wiki/Square_foot',
    metaTitle: 'Square Foot | Definition and Conversions',
    description: 'A square foot is the area of a square one foot on each side, about 0.0929 square meters. Here is how home size is reported in square feet and why it varies.',
    short: 'The unit American homes are measured in, equal to about 0.0929 square meters.',
    definition: 'A square foot is the area of a square that measures one foot on each side. It equals 144 square inches, or about 0.0929 square meters.',
    more: [
      'In the United States, home size is almost always stated in square feet, and gross living area on an appraisal is reported in whole square feet. ANSI Z765 has measurements taken to the nearest inch or tenth of a foot, with the final area rounded once, at the end.',
      'The unit says nothing about what was measured. The same house can be described as 1,800 square feet or 2,600 square feet depending on whether the basement and garage are included, which is why the measuring standard matters more than the number.',
    ],
  },
  {
    slug: 'building-envelope',
    term: 'Building envelope',
    wikipedia: 'https://en.wikipedia.org/wiki/Building_envelope',
    metaTitle: 'Building Envelope | Definition',
    description: 'The building envelope is the walls, roof, foundation, windows, and doors between inside and out. Here is why its exterior walls set the square footage line.',
    short: 'The walls, roof, and foundation that separate a home\'s inside from the outdoors.',
    definition: 'The building envelope is the physical barrier between the conditioned inside of a building and the outdoors: its exterior walls, roof, foundation, windows, and doors.',
    more: [
      'For square footage, the exterior walls of the envelope set the boundary. ANSI Z765 measures gross living area to the outside finished surface of those walls, so the thickness of the walls is part of the total.',
      'The envelope also explains why some spaces fall out of living area. A screened porch or an unheated three-season room sits outside the conditioned envelope, and space that is not heated and finished for year-round use is not counted, even when it has a roof and walls.',
    ],
  },
  {
    slug: 'real-estate',
    term: 'Real estate',
    wikipedia: 'https://en.wikipedia.org/wiki/Real_estate',
    metaTitle: 'Real Estate | Definition and Home Size',
    description: 'Real estate is land and anything permanently attached to it, like houses. Here is why home size matters in real estate and why listings and appraisals differ.',
    short: 'Land and the buildings permanently attached to it, plus the business of trading them.',
    definition: 'Real estate is land plus anything permanently attached to it, such as houses and other buildings. The term also covers the business of buying, selling, and renting that property.',
    more: [
      'Residential real estate is where gross living area matters most. Listings, appraisals, and tax records all describe homes by their size, and buyers often compare prices per square foot from one home to the next.',
      'Those sources do not always measure the same way. A listing might include a finished basement that the appraisal leaves out. ANSI Z765 gives appraisers one method, so the size on an appraisal means the same thing from one house to the next.',
    ],
  },
  {
    slug: 'basement',
    term: 'Basement',
    wikipedia: 'https://en.wikipedia.org/wiki/Basement',
    metaTitle: 'Basement | Why It Is Not Gross Living Area',
    description: 'A basement is a level of a house partly or fully below ground. Here is why ANSI Z765 never counts it as gross living area, even when finished or a walkout.',
    short: 'A level of a house partly or fully below ground, reported apart from living area.',
    definition: 'A basement is a level of a house that sits partly or entirely below the ground. Some are unfinished storage and mechanical space, and others are finished into bedrooms, family rooms, and bathrooms.',
    more: [
      'Under ANSI Z765, a basement is never part of gross living area. If any part of a level is below the ground on any side, the whole level is below grade, so a walkout basement with a full-height back wall is still a basement.',
      'Finished basement space is not ignored. The appraiser measures it and reports it on its own line, separate from gross living area, and it can still add to the home\'s value. It just is not compared with the above-ground living space of other homes.',
    ],
  },
  {
    slug: 'single-family-detached-home',
    term: 'Single-family detached home',
    wikipedia: 'https://en.wikipedia.org/wiki/Single-family_detached_house',
    metaTitle: 'Single-Family Detached Home | Definition',
    description: 'A single-family detached home is a freestanding house for one household. Here is why it is the simplest case for ANSI Z765 and how other home types differ.',
    short: 'A freestanding house for one household, the property type ANSI Z765 was written for.',
    definition: 'A single-family detached home is a freestanding house built for one household, with no walls shared with another dwelling. It is the most common type of home in the United States.',
    more: [
      'ANSI Z765 was written for single-family houses, both detached and attached, such as townhouses. On a detached home every exterior wall can be measured from outside, which makes it the simplest case for the standard.',
      'Other property types follow different rules. Condo units are measured from the interior of the unit, and two-to-four-unit buildings fall outside Fannie Mae\'s ANSI requirement and are reported on a different appraisal form.',
    ],
  },
  {
    slug: 'international-property-measurement-standards',
    term: 'International Property Measurement Standards',
    wikipedia: 'https://en.wikipedia.org/wiki/International_Property_Measurement_Standards',
    metaTitle: 'IPMS | International Measurement Standards',
    description: 'The International Property Measurement Standards (IPMS) measure buildings the same way in every country. Here is who publishes them and if U.S. homes use them.',
    short: 'Standards for measuring buildings the same way in every country.',
    definition: 'The International Property Measurement Standards, or IPMS, are a set of standards for measuring buildings the same way in every country. They are published by the International Property Measurement Standards Coalition, a group of professional and nonprofit organizations that first met in May 2013.',
    more: [
      'The coalition started with a standard for offices and then moved on to other building types. The goal is to let an investor or lender compare a building in one country with a building in another without the measurements meaning different things.',
      'American home appraisals do not use IPMS. For single-family houses in the United States, ANSI Z765 is the standard, and it is the one Fannie Mae requires.',
    ],
  },
  {
    slug: 'square-meter',
    term: 'Square meter',
    wikipedia: 'https://en.wikipedia.org/wiki/Square_metre',
    metaTitle: 'Square Meter | Definition and Conversion',
    description: 'A square meter is the metric unit of area, about 10.764 square feet. Here is how to convert square meters to square feet and how ANSI Z765 handles metric.',
    short: 'The metric unit of area, equal to about 10.764 square feet.',
    definition: 'A square meter is the area of a square that measures one meter on each side. It is the standard unit of area in the metric system and equals about 10.764 square feet.',
    more: [
      'Most countries report home size in square meters. ANSI Z765 allows metric measurement too, and in that case finished area is reported to the nearest tenth of a square meter instead of the nearest whole square foot.',
      'To convert, multiply square meters by 10.764 to get square feet, or multiply square feet by 0.0929 to get square meters. A 2,000 square foot house is about 186 square meters.',
    ],
  },
  {
    slug: 'appraisal-institute',
    term: 'Appraisal Institute',
    wikipedia: 'https://en.wikipedia.org/wiki/Appraisal_Institute',
    metaTitle: 'Appraisal Institute | Definition',
    description: 'The Appraisal Institute is a professional association of appraisers known for the MAI and SRA designations. Here is what it does and what it does not set.',
    short: 'A professional association of real estate appraisers, known for the MAI and SRA designations.',
    definition: 'The Appraisal Institute is a professional association of real estate appraisers. It was formed in 1991 when two older appraisal groups merged, and it awards designations such as MAI and SRA to members who meet its education and experience requirements.',
    more: [
      'It publishes textbooks, courses, and a journal on appraisal practice, and many appraisers take its classes for continuing education.',
      'The institute does not set the square footage rules. Those come from ANSI Z765 for the measuring method and from lenders such as Fannie Mae for when the standard is required. Its role is teaching and professional standing, not writing the measuring method.',
    ],
  },
  {
    slug: 'uspap',
    term: 'Uniform Standards of Professional Appraisal Practice',
    wikipedia: 'https://en.wikipedia.org/wiki/Uniform_Standards_of_Professional_Appraisal_Practice',
    metaTitle: 'USPAP | Appraisal Standards Explained',
    description: 'USPAP is the set of ethical and performance standards U.S. appraisers follow. Here is who writes it, what it asks of appraisers, and why it skips measuring.',
    short: 'The ethical and performance standards U.S. appraisers follow when they appraise property.',
    definition: 'The Uniform Standards of Professional Appraisal Practice, or USPAP, are the ethical and performance standards for appraisers in the United States. They are written by the Appraisal Standards Board of The Appraisal Foundation.',
    more: [
      'USPAP requires appraisers to identify the characteristics of a property that matter to the assignment and to report them in a way that is not misleading. Size is one of those characteristics, so a clear, consistent measurement is part of doing the job right.',
      'USPAP does not say how to measure a house. It leaves that to other sources. For loans sold to Fannie Mae the method is ANSI Z765, and the appraiser states on the report which standard was used.',
    ],
  },
  {
    slug: 'appraisal-foundation',
    term: 'The Appraisal Foundation',
    wikipedia: 'https://en.wikipedia.org/wiki/The_Appraisal_Foundation',
    metaTitle: 'The Appraisal Foundation | Definition',
    description: 'The Appraisal Foundation is the nonprofit behind USPAP and appraiser qualifications in the U.S. Here is what its boards do and where measuring rules come from.',
    short: 'The nonprofit that writes USPAP and sets qualifications for U.S. appraisers.',
    definition: 'The Appraisal Foundation is a nonprofit organization responsible for appraisal standards and appraiser qualifications in the United States. It was founded in 1987 and is based in Washington, D.C.',
    more: [
      'Two boards do most of the work. The Appraisal Standards Board writes and updates USPAP, and the Appraiser Qualifications Board sets the minimum education and experience that states require before licensing or certifying an appraiser.',
      'Congress gave the foundation this role in 1989, after the savings and loan crisis. It does not publish a square footage method; measuring rules for homes come from ANSI Z765.',
    ],
  },
  {
    slug: 'mortgage',
    term: 'Mortgage',
    wikipedia: 'https://en.wikipedia.org/wiki/Mortgage_loan',
    metaTitle: 'Mortgage | Why It Needs an Appraisal',
    description: 'A mortgage is a loan secured by a home. Here is why lenders order appraisals and how Fannie Mae made ANSI Z765 the square footage standard for most home loans.',
    short: 'A loan secured by a home, and the reason most home appraisals are ordered.',
    definition: 'A mortgage is a loan used to buy or refinance a property, with the property itself pledged as security. If the borrower stops paying, the lender can foreclose and take the property.',
    more: [
      'Before a lender approves a mortgage, it usually orders an appraisal to confirm that the home is worth enough to back the loan. The appraisal reports the home\'s gross living area along with its value.',
      'Lender rules are why ANSI Z765 is so widely used. Fannie Mae has required the standard on most single-unit appraisals for loan applications dated April 1, 2022 or later. FHA, VA, and USDA loans do not require it.',
    ],
  },
  {
    slug: 'boma',
    term: 'Building Owners and Managers Association',
    wikipedia: 'https://en.wikipedia.org/wiki/Building_Owners_and_Managers_Association',
    metaTitle: 'BOMA | Building Owners and Managers Association',
    description: 'BOMA is a trade group for commercial property owners, known for office measuring standards. Here is what those standards cover and why homes do not use them.',
    short: 'A commercial real estate group whose standards measure office and other buildings.',
    definition: 'The Building Owners and Managers Association, or BOMA, is a trade group for commercial property owners and managers. It was founded in 1907 and is best known for its standards for measuring office and other commercial buildings.',
    more: [
      'BOMA\'s office standard is approved as an American National Standard through ANSI, and many commercial leases use it to define rentable and usable area. It deals with things houses do not have, such as shared lobbies, corridors, and elevator shafts.',
      'BOMA standards do not apply to homes. A house is measured under ANSI Z765 instead, which reports one gross living area figure rather than dividing space among tenants.',
    ],
  },
  {
    slug: 'house',
    term: 'House',
    wikipedia: 'https://en.wikipedia.org/wiki/House',
    metaTitle: 'House | Definition and Gross Living Area',
    description: 'A house is a building made for people to live in. Here is which parts of a house count toward gross living area and which ones an appraisal lists separately.',
    short: 'A building people live in, and the thing gross living area measures.',
    definition: 'A house is a building made for people to live in, usually by one household. In real estate the word most often means a single-family home rather than an apartment or condo unit.',
    more: [
      'Gross living area describes the house itself, not the land under it. Lot size is a separate figure on an appraisal, so a small house on a large lot and a large house on a small lot are compared on each measure separately.',
      'Not every part of a house counts. The living area includes the finished rooms above ground, while the garage, basement, attic storage, and porches are reported on their own lines.',
    ],
  },
  {
    slug: 'mezzanine',
    term: 'Mezzanine',
    wikipedia: 'https://en.wikipedia.org/wiki/Mezzanine_(architecture)',
    metaTitle: 'Mezzanine | Does It Count as Square Footage?',
    description: 'A mezzanine is a partial floor open to the level below, like a loft. Here is when its floor counts as gross living area under ANSI Z765 and when it is left out.',
    short: 'A partial floor open to the level below, like a loft.',
    definition: 'A mezzanine is an intermediate floor between two main floors, usually open on one side to the space below. In homes the same idea shows up as a loft or a balcony overlooking a two-story room.',
    more: [
      'Under ANSI Z765, the floor of a finished loft counts as gross living area if it meets the ceiling height rules and is reached by a permanent stair. The open air it looks down into does not count, because there is no floor there.',
      'A loft reached only by a ladder is left out, no matter how well it is finished.',
    ],
  },
  {
    slug: 'floor-area-ratio',
    term: 'Floor area ratio',
    wikipedia: 'https://en.wikipedia.org/wiki/Floor_area_ratio',
    metaTitle: 'Floor Area Ratio (FAR) | Definition',
    description: 'Floor area ratio (FAR) is a building\'s total floor area divided by its lot area. Here is how it is worked out and why it is a different number from GLA.',
    short: 'A building\'s total floor area divided by the area of its lot.',
    definition: 'Floor area ratio, or FAR, is a building\'s total floor area divided by the area of the lot it sits on. A 2,000 square foot house on a 10,000 square foot lot has a floor area ratio of 0.2.',
    more: [
      'Local rules often use FAR to cap how much building can go on a lot. The floor area in that math follows the local rule\'s own definition, which may count garages, basements, or other space that gross living area leaves out.',
      'So FAR and gross living area are different numbers for different jobs. FAR is about how much building a lot can hold. Gross living area, measured under ANSI Z765, is about how much finished living space a house has, and it is the figure an appraiser uses to compare homes.',
    ],
  },
  {
    slug: 'architecture',
    term: 'Architecture',
    wikipedia: 'https://en.wikipedia.org/wiki/Architecture',
    metaTitle: 'Architecture | How Plans Relate to GLA',
    description: 'Architecture is the design of buildings, where floor plans and wall lines are set. Here is why plan area and gross living area often differ for the same house.',
    short: 'The design of buildings, where floor plans and wall lines are set.',
    definition: 'Architecture is the art and practice of designing buildings. Architects decide how a building\'s spaces are arranged, how big each one is, and where its walls, floors, and roof go.',
    more: [
      'An architect\'s floor plans are often the first place a home\'s size appears. Plan area and gross living area can differ, though, because plans may count garages, porches, or unfinished space that ANSI Z765 leaves out.',
      'Design choices also decide what counts later. A sloped ceiling, a two-story foyer, or a room reached only through the garage can each shrink the gross living area of a house even when the plans show plenty of floor.',
    ],
  },
  {
    slug: 'zoning',
    term: 'Zoning',
    wikipedia: 'https://en.wikipedia.org/wiki/Zoning',
    metaTitle: 'Zoning | Definition and Square Footage',
    description: 'Zoning is the set of local rules on how land can be used and how big buildings can be. Here is how zoning limits use floor area and why they differ from GLA.',
    short: 'Local rules that control how land can be used and what can be built on it.',
    definition: 'Zoning is the set of local rules that divides land into districts and controls how each one can be used, such as for homes, shops, or industry. Zoning rules also limit how big buildings can be, how tall, and how close to the lot lines.',
    more: [
      'Some of those limits are written in terms of floor area, through measures such as floor area ratio or a maximum house size. Each rule defines floor area its own way, and those definitions often differ from gross living area.',
      'Zoning does not change how an appraiser measures a house. Gross living area follows ANSI Z765 in every part of the country, whatever the local zoning allows. Whether a space is permitted is a separate question, handled outside the measurement.',
    ],
  },
];

export const glossaryTerms = terms.map((t) => ({ ...t, kind: 'glossary', slug: `glossary/${t.slug}`, published: D }));

export function getGlossaryTerm(slug) {
  return glossaryTerms.find((t) => t.slug === slug) || null;
}

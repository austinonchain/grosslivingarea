// /faq hub + /faq/<question-slug> pages. FAQ pages are pure Q&A: breadcrumb, question, answer.
// No links, images, dates, or related blocks. `answer` is the lede; `more` is one or two short paragraphs.
// Whole answer (answer + more) runs 120 to 150 words.
const D = '2026-09-21';

export const faqIndex = {
  kind: 'faqIndex',
  slug: 'faq',
  title: 'Gross Living Area FAQ',
  metaTitle: 'Gross Living Area FAQ | Questions Answered',
  description: 'Short answers to common questions about gross living area and square footage: what it includes, what it leaves out, and how gross area and net area differ.',
  published: D,
  intro: [
    'Short answers to common questions about gross living area and square footage. Every answer follows ANSI Z765, the measuring standard Fannie Mae requires on most home appraisals.',
  ],
};

const entries = [
  {
    slug: 'does-gross-living-area-include-the-garage',
    question: 'Does gross living area include the garage?',
    metaTitle: 'Does GLA Include the Garage? | The ANSI Answer',
    description: 'No. A garage never counts as gross living area under ANSI Z765, even attached, heated, or drywalled. Here is why, and the one exception that changes the answer.',
    answer: 'No. A garage is never part of gross living area under ANSI Z765, whether it is attached, heated, insulated, or finished with drywall. The appraiser measures it and reports it on its own line as garage space.',
    more: [
      'The reason is the finished-area test. Living area has to be finished for year-round living and connected to the rest of the house through finished space. A garage is built for cars and storage, so it fails no matter how nice it is inside.',
      'The one exception is a completed conversion. If the garage has been turned into a finished room with a finished floor, ceiling, heat, and a finished doorway into the house, the appraiser treats it as a room. Listings sometimes include the garage by mistake when the number comes from tax records, which is one reason a listing can be larger than the appraisal.',
    ],
  },
  {
    slug: 'gross-floor-area-vs-gross-square-footage',
    question: 'What is the difference between gross floor area and gross square footage?',
    metaTitle: 'Gross Floor Area vs Gross Square Footage | Explained',
    description: 'Gross floor area and gross square footage usually mean the same total, measured to the outside walls. What differs is who defines them and what gets left out.',
    answer: 'In everyday use there is usually no difference. Both mean the total floor area of a building measured to the outside of its exterior walls, counting every floor. What changes is who defines the term and what they choose to leave out.',
    more: [
      'Gross floor area is the phrase you see most in commercial property and building plans. Gross square footage is the same idea stated in square feet, and people often use it for houses. Neither has one national definition, so the lease, contract, or standard that uses the number decides whether basements, garages, or mechanical space are in it.',
      'Gross living area is narrower than both. It keeps the exterior measurement but counts only finished, above-grade living space, so garages, unfinished areas, and basements are left out even though they sit inside the building.',
    ],
  },
  {
    slug: 'how-do-you-calculate-gross-area',
    question: 'How do you calculate gross area?',
    metaTitle: 'How to Calculate Gross Area | Step by Step',
    description: 'To calculate gross area, measure outside the exterior walls, split the footprint into rectangles, and add every floor. Here is how gross living area differs.',
    answer: 'Measure the outside of the exterior walls, break the footprint into rectangles, multiply length by width for each one, and add them up. Do the same for every floor and add the floors together. That total is the gross area.',
    more: [
      'Measure to the nearest inch or tenth of a foot, work out each rectangle, and round only the final total. Odd shapes like bay windows or angled walls get their own small rectangles or triangles.',
      'Gross living area starts from the same exterior numbers and then takes things out. Subtract the garage, unfinished rooms, the open space above a staircase or two-story foyer, and any area with ceilings below the ANSI height limits. Below-grade finished space is reported separately instead of added in. What is left is the figure an appraiser puts on the GLA line.',
    ],
  },
  {
    slug: 'what-does-gross-area-mean',
    question: 'What does gross area mean?',
    metaTitle: 'What Does Gross Area Mean? | Plain Definition',
    description: 'Gross area is the total floor area of a building measured to the outside of its exterior walls. Here is how it compares with net area and gross living area.',
    answer: 'Gross area is the total floor area of a building measured to the outside face of its exterior walls. It includes the walls themselves and every space inside them, finished or not, on every floor.',
    more: [
      'The word gross works the way it does with income: it is the whole amount before anything is taken out. Net area is what remains after deductions, usually the space inside the walls that people can actually use.',
      'For houses, the more useful number is gross living area. It is still measured from the outside of the walls, but ANSI Z765 limits it to finished living space above ground. A house with a big garage and a basement can have a gross area far larger than its gross living area, and the appraisal reports that extra space on separate lines.',
    ],
  },
  {
    slug: 'what-does-gross-living-area-include',
    question: 'What does gross living area include?',
    metaTitle: 'What Does Gross Living Area Include? | Full List',
    description: 'Gross living area includes every finished, above-grade room connected to the house, closets and stairs included. Here is what it covers and what it leaves out.',
    answer: 'Gross living area includes every finished, above-grade space in a house that connects to the rest of the home through finished area, measured to the outside of the exterior walls. That covers bedrooms, bathrooms, kitchens, hallways, closets, and stairs.',
    more: [
      'It also includes the thickness of the exterior and interior walls, finished attic rooms that meet the ANSI ceiling height rules and are reached by a permanent stair, and finished rooms over a garage when a finished hall or stair connects them to the house.',
      'It leaves out garages, unfinished spaces, porches, decks, the open space above a staircase or foyer, and anything below grade, even a nicely finished basement. Below-grade finished area still appears on the appraisal, just on its own line, so it is compared separately when the appraiser looks at similar homes.',
    ],
  },
  {
    slug: 'does-gross-square-footage-include-exterior-walls',
    question: 'Does gross square footage include exterior walls?',
    metaTitle: 'Does Gross Square Footage Include Walls? | Yes',
    description: 'Yes. Gross square footage is measured to the outside of the exterior walls, so the walls count. Here is how much they add and the one case where it differs.',
    answer: 'Yes. Gross square footage is measured to the outside face of the exterior walls, so the walls are part of the total. Gross living area under ANSI Z765 works the same way.',
    more: [
      'On a typical framed house the exterior walls are 6 to 8 inches thick once you count siding and drywall. On a 40 by 30 foot house that adds roughly 80 to 100 square feet compared with measuring inside each room. Brick or stone walls add more.',
      'ANSI uses the exterior because it is the one boundary two measurers can find the same way. Adding up room sizes misses the walls, closets, and halls, which is why a room-by-room total always comes out smaller than the appraisal. Condo units are the main exception: Fannie Mae has appraisers measure them from the interior of the unit.',
    ],
  },
  {
    slug: 'gross-area-vs-net-area',
    question: 'What is the difference between gross area and net area?',
    metaTitle: 'Gross Area vs Net Area | What Each Measures',
    description: 'Gross area is the full floor area to the outside of the walls. Net area takes out walls and unusable space. Here is how each works and where GLA fits between.',
    answer: 'Gross area is the full floor area measured to the outside of the exterior walls. Net area is what is left after you take out the walls and other space nobody can use, so it is always the smaller number.',
    more: [
      'What counts as unusable depends on the property. In an office building, net area usually leaves out the exterior walls, stairwells, elevator shafts, and mechanical rooms. Commercial leases often define their own version, and many follow the measuring standards published by BOMA.',
      'Houses work differently. An appraisal does not report a net figure at all. Gross living area under ANSI Z765 is a gross measurement, taken to the outside of the walls, but it only counts finished living space above ground. It keeps the walls and drops the garage, the basement, and any unfinished rooms.',
    ],
  },
  {
    slug: 'is-a-bathroom-considered-living-space',
    question: 'Is a bathroom considered a living space?',
    metaTitle: 'Is a Bathroom Living Space? | Yes, Here Is Why',
    description: 'Yes. A finished bathroom is living space and part of gross living area, like closets and halls. Here is how basement baths work and why baths count twice.',
    answer: 'Yes. A finished bathroom counts as living space and is part of gross living area, the same as bedrooms, closets, and hallways. ANSI Z765 measures the whole finished floor instead of picking rooms, so every bathroom on an above-grade floor is in the total.',
    more: [
      'The same goes for half baths, powder rooms, and laundry rooms, as long as they are finished and above grade. A bathroom in a basement follows the basement: it is finished area, but it goes on the below-grade line of the appraisal, not into gross living area.',
      'Bathrooms are also counted on their own. Appraisal forms list the number of full and half baths above grade, because buyers pay for them apart from size. So a bathroom shows up twice, once inside the square footage and once in the bath count.',
    ],
  },
  {
    slug: 'what-is-not-included-in-square-footage-of-a-house',
    question: 'What is not included in the square footage of a house?',
    metaTitle: 'What Is Not Included in Square Footage? | The List',
    description: 'Square footage leaves out garages, unfinished space, basements, porches, and low-ceiling rooms. Here is the full list and how appraisers still report them.',
    answer: 'Under ANSI Z765, the square footage of a house leaves out garages, unfinished space, anything below grade, and outdoor areas like porches, decks, and patios. Space with ceilings too low to meet the height rules is left out too.',
    more: [
      'A few exclusions surprise people. A finished basement is not included, even a walkout, because part of it is below ground. Neither is a three-season porch, a finished room you can only reach through the garage or by a pull-down ladder, or the open air above a staircase or two-story entry.',
      'Excluded does not mean ignored. The appraiser still measures most of these spaces and reports them on their own lines, such as basement area, garage space, and porches, and they can still add value. They just stay out of the single living area number used to compare similar homes.',
    ],
  },
  {
    slug: 'gross-living-area-vs-square-footage',
    question: 'What is the difference between gross living area and square footage?',
    metaTitle: 'Gross Living Area vs Square Footage | Explained',
    description: 'Square footage is any area in square feet. Gross living area is one exact measure of finished, above-grade space. Here is why the two numbers so often differ.',
    answer: 'Square footage is any area measured in square feet. Gross living area is one specific measurement: the finished, above-grade living space of a house, measured to the outside of the exterior walls under ANSI Z765.',
    more: [
      'When people say a house has a certain square footage, they could mean several numbers. A listing may use tax records that include a basement or garage. A builder may count everything under the roof. A room-by-room total taken inside comes out smaller because it skips the walls.',
      'Gross living area is the version an appraiser uses, and on most loans Fannie Mae buys it has to follow ANSI Z765. It leaves out basements, garages, and unfinished space so that houses can be compared fairly. That is why the appraisal number is often smaller than the listing.',
    ],
  },
  {
    slug: 'what-is-considered-finished-square-footage',
    question: 'What is considered finished square footage?',
    metaTitle: 'What Is Finished Square Footage? | The ANSI Tests',
    description: 'Finished square footage is space built for year-round living: finished, heated, tall enough, and connected. Here are the ANSI tests and how GLA is different.',
    answer: 'Finished square footage is space built for year-round living: finished walls, floor, and ceiling, heated, and connected to the rest of the house through other finished space. Under ANSI Z765 it also needs a ceiling at least 7 feet high, or 6 feet 4 inches under beams and ducts.',
    more: [
      'Finished area and living area are not quite the same thing. A finished basement is finished square footage, but because it is below grade it is reported apart from gross living area. Only above-grade finished space counts as gross living area.',
      'Heat alone does not make a space finished. A heated garage, an unheated sunroom with drywall, and an attic room reached by a pull-down ladder each fail at least one test, so none of them count.',
    ],
  },
  {
    slug: 'why-is-appraisal-square-footage-different-from-listing',
    question: 'Why is the square footage on my appraisal different from the listing?',
    metaTitle: 'Appraisal vs Listing Square Footage | Why They Differ',
    description: 'An appraisal measures gross living area under ANSI Z765, which leaves out basements and garages that listings often include. Here are the usual causes of a gap.',
    answer: 'Usually because the two numbers measure different things. The appraiser measures gross living area under ANSI Z765, which leaves out basements, garages, and unfinished space. A listing often uses a number from tax records, the builder, or the seller that may include them.',
    more: [
      'The most common gaps are a finished basement counted in the listing, a garage picked up from the assessor\'s building area, and a finished room reached only through the garage or by a ladder. Each one is real space, but none of them is gross living area.',
      'Smaller differences come from how the house was measured. An appraiser measures to the outside of the exterior walls and rounds only at the end, so two careful measurements usually land within 1 to 2 percent of each other. A gap of 10 percent or more almost always means someone counted a space differently.',
    ],
  },
];

export const faqEntries = entries.map((e) => ({ ...e, kind: 'faq', slug: `faq/${e.slug}`, published: D }));

export function getFaq(slug) {
  return faqEntries.find((e) => e.slug === slug) || null;
}

// Every encyclopedia entry lives here. One object per question page.
// Pillars and questions are added once Austin provides the pillar list.
//
// Shape:
// {
//   slug: 'does-a-finished-basement-count-as-square-footage',
//   pillar: 'below-grade',
//   question: 'Does a finished basement count as square footage?',
//   shortAnswer: 'No, not under ANSI Z765. ...',   // one paragraph, shown first
//   body: [ ...sections ],
//   related: ['slug', 'slug'],
// }

export const pillars = [];

export const questions = [];

export function getQuestion(slug) {
  return questions.find((q) => q.slug === slug) || null;
}

export function getPillar(slug) {
  return pillars.find((p) => p.slug === slug) || null;
}

export function questionsForPillar(pillarSlug) {
  return questions.filter((q) => q.pillar === pillarSlug);
}

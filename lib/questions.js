// Every encyclopedia entry lives in lib/content/*.js, one file per pillar.
// URL scheme is flat: /<pillar-slug> and /<question-slug>.
import { ansiPillar, ansiQuestions } from './content/ansi';
import { countsPillar, countsQuestions } from './content/counts';
import { basementStateQuestions } from './content/basement-states';

export const pillars = [ansiPillar, countsPillar];
export const questions = [...ansiQuestions, ...countsQuestions, ...basementStateQuestions];

export function getQuestion(slug) {
  return questions.find((q) => q.slug === slug) || null;
}
export function getPillar(slug) {
  return pillars.find((p) => p.slug === slug) || null;
}
// Pillar listings show hand-written questions only; state pages are listed on their parent question page.
export function questionsForPillar(pillarSlug) {
  return questions.filter((q) => q.pillar === pillarSlug && q.kind !== 'state');
}
export function stateQuestionsFor(parentSlug) {
  return questions.filter((q) => q.kind === 'state' && q.parent === parentSlug);
}

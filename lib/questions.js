// Every encyclopedia entry lives in lib/content/*.js, one file per pillar.
// URL scheme is flat: /<pillar-slug> and /<question-slug>.
import { ansiPillar, ansiQuestions } from './content/ansi';
import { countsPillar, countsQuestions } from './content/counts';

export const pillars = [ansiPillar, countsPillar];
export const questions = [...ansiQuestions, ...countsQuestions];

export function getQuestion(slug) {
  return questions.find((q) => q.slug === slug) || null;
}
export function getPillar(slug) {
  return pillars.find((p) => p.slug === slug) || null;
}
export function questionsForPillar(pillarSlug) {
  return questions.filter((q) => q.pillar === pillarSlug);
}

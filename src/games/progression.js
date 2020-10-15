import gameArc from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameConditions = 'What number is missing in the progression?';

function genProgression() {
  const progression = [];
  progression.push(getRandomNumber(1, 100));
  const step = getRandomNumber(1, 10);

  for (let i = 0; i < 9; i += 1) {
    const newNum = progression[i] + step;
    progression.push(newNum);
  }
  return progression;
}

function getQustnAndCorAnswer() {
  const progression = genProgression();

  const indexToDelete = getRandomNumber(1, 10) - 1;
  const correctAnswer = progression[indexToDelete].toString();
  progression[indexToDelete] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
}

export default () => gameArc(gameConditions, getQustnAndCorAnswer);

import gameArc from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameConditions = 'What number is missing in the progression?';

function genProgression(firstElem, indexToDelete, stepAmount) {
  const progression = [firstElem];

  for (let i = 0; i < 9; i += 1) {
    const newNum = progression[i] + stepAmount;
    progression.push(newNum);
  }
  const correctAnswer = progression[indexToDelete].toString();
  progression[indexToDelete] = '..';

  return [progression, correctAnswer];
}

function getQustnAndCorAnswer() {
  const firstElem = getRandomNumber(1, 100);
  const stepAmount = getRandomNumber(1, 10);
  const indexToDelete = getRandomNumber(0, 9);
  const [progression, correctAnswer] = genProgression(firstElem, indexToDelete, stepAmount);

  const question = progression.join(' ');

  return [question, correctAnswer];
}

export default () => gameArc(gameConditions, getQustnAndCorAnswer);

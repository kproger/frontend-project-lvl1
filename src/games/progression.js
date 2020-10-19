import gameArc from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameConditions = 'What number is missing in the progression?';

const genProgression = (firstElem, indexToDelete, step) => {
  const result = [];

  for (let i = 0; i < 10; i += 1) {
    const currentElem = firstElem + step * i;
    const elem = i === indexToDelete ? '..' : currentElem;
    result.push(elem);
  }

  return result.join(' ');
}

const getQustnAndCorAnswer = () => {
  const firstElem = getRandomNumber(1, 100);
  const stepAmount = getRandomNumber(1, 10);
  const indexToDelete = getRandomNumber(0, 9);
  const question = genProgression(firstElem, indexToDelete, stepAmount);
  const correctAnswer = (firstElem + stepAmount * indexToDelete).toString();

  return [question, correctAnswer];
}

export default () => gameArc(gameConditions, getQustnAndCorAnswer);

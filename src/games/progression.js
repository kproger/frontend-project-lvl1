import gameArc from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameConditions = 'What number is missing in the progression?';
const progressionLength = 10;

const genProgression = (firstElem, indexToHide, step, progresLen) => {
  const result = [];

  for (let i = 0; i < progresLen; i += 1) {
    const currentElem = firstElem + step * i;
    const elem = i === indexToHide ? '..' : currentElem;
    result.push(elem);
  }

  return result.join(' ');
};

const getQustnAndCorAnswer = () => {
  const firstElem = getRandomNumber(1, 100);
  const stepAmount = getRandomNumber(1, 10);
  const hiddenElemIndex = getRandomNumber(0, 9);
  const question = genProgression(firstElem, hiddenElemIndex, stepAmount, progressionLength);
  const correctAnswer = (firstElem + stepAmount * hiddenElemIndex).toString();

  return [question, correctAnswer];
};

export default () => gameArc(gameConditions, getQustnAndCorAnswer);

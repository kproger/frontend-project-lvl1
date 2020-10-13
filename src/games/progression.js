import gameArc from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameConditions = 'What number is missing in the progression?';
const getRandomStepOfProgression = () => getRandomNumber(10, 1);

function getQustnAndCorAnswer() {
  const progressionArr = [];
  const step = getRandomStepOfProgression();
  progressionArr.push(getRandomNumber(100, 1));

  for (let i = 0; i < 9; i += 1) {
    const newNumb = progressionArr[i] + step;
    progressionArr.push(newNumb);
  }
  const deletedNumbIndex = getRandomStepOfProgression() - 1;
  const correctAnswer = progressionArr[deletedNumbIndex].toString();
  progressionArr[deletedNumbIndex] = '..';
  const question = progressionArr.join(' ');

  return [question, correctAnswer];
}

export default () => gameArc(gameConditions, getQustnAndCorAnswer);

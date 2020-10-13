import gameArc from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

function getQuesAndAnswer() {
  const question = getRandomNumber(100, 1);
  const correctAnswer = getCorrectAnswer(question);

  return [question, correctAnswer];
}

export default () => gameArc(gameConditions, getQuesAndAnswer);

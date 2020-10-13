import gameArc from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameConditions = 'Find the greatest common divisor of given numbers.';

function generateQuestion() {
  return `${getRandomNumber(100, 1)} ${getRandomNumber(100, 1)}`;
}

function getGcd([num1, num2]) {
  for (let i = num1; i >= 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i.toString();
    }
  }
  return 1;
}

function getQuestAndCorrectAnswer() {
  const question = generateQuestion();
  const correctAnswer = getGcd(question.split(' '));

  return [question, correctAnswer];
}

export default () => gameArc(gameConditions, getQuestAndCorrectAnswer);

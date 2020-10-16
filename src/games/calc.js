import gameArc from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameConditions = 'What is the result of the expression?';

function getRandomSign() {
  const signs = ['+', '-', '*'];

  return signs[getRandomNumber(0, signs.length - 1)];
}

function calculateExpression(num1, num2, sign) {
  switch (sign) {
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    default:
      throw new Error(`Unknown sign ${sign}!`);
  }
}

function genQuestionAndRightAnswer() {
  const num1 = getRandomNumber(1, 30);
  const num2 = getRandomNumber(1, 30);
  const sign = getRandomSign();

  const question = `${num1} ${sign} ${num2}`;
  const correctAnswer = calculateExpression(num1, num2, sign).toString();

  return [question, correctAnswer];
}

export default () => gameArc(gameConditions, genQuestionAndRightAnswer);

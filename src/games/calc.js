import gameArc from '../index.js';
import getRandomNumber from '../utils.js';

const gameConditions = 'What is the result of the expression?';

function getRandomSign() {
  const signs = ['+', '-', '*'];

  return signs[getRandomNumber(0, 2)];
}

function calculateExpression(num1, num2, sign) {
  let result;

  switch (sign) {
    case '*':
      result = num1 * num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '+':
      result = num1 + num2;
      break;
    default:
      throw new Error(`Unknown sign ${sign}!`);
  }
  return result;
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

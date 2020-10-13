import gameArc from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameConditions = 'What is the result of the expression?';

function getRandomSign() {
  const signs = {
    1: '+',
    2: '-',
    3: '*',
  };

  return signs[Math.ceil(Math.random() * 3)];
}

function count(num1, num2, sign) {
  if (sign === '*') {
    return num1 * num2;
  } if (sign === '-') {
    return num1 - num2;
  }
  return num1 + num2;
}

function getQuesAndAnswer() {
  const num1 = getRandomNumber(30, 1);
  const num2 = getRandomNumber(30, 1);
  const sign = getRandomSign();

  const question = `${num1} ${sign} ${num2}`;
  const correctAnswer = count(num1, num2, sign).toString();

  return [question, correctAnswer];
}

export default () => gameArc(gameConditions, getQuesAndAnswer);

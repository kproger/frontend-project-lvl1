#!/usr/bin/env node

import gameArc from '../src/index.js';

const gameConditions = 'Find the greatest common divisor of given numbers.';

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

function generateQuestion() {
  return `${getRandomNumber()} ${getRandomNumber()}`;
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

gameArc(gameConditions, getQuestAndCorrectAnswer);

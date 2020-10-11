#!/usr/bin/env node

import gameArc from '../src/index.js';

const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no"';

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

const isEven = (num) => num % 2 === 0;

const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

function getQuesAndAnswer() {
  const question = getRandomNumber();
  const correctAnswer = getCorrectAnswer(question);

  return [question, correctAnswer];
}

gameArc(gameConditions, getQuesAndAnswer);

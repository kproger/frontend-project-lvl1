#!/usr/bin/env node

import gameArc from '../index.js';

const gameConditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getRandomNumber() {
  return Math.floor(Math.random() * (25 - 1 + 1)) + 1;
}

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const getCorrectAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

function getQuesAndCorrAnsw() {
  const question = getRandomNumber();
  const correctAnswer = getCorrectAnswer(question);

  return [question, correctAnswer];
}

export default gameArc(gameConditions, getQuesAndCorrAnsw);

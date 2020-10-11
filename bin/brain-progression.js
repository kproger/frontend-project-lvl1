#!/usr/bin/env node

import gameArc from '../src/index.js';

const gameConditions = 'What number is missing in the progression?';
function getRandomStepOfProgression() {
  return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

function getQustnAndCorAnswer() {
  const progressionArr = [];
  const step = getRandomStepOfProgression();
  progressionArr.push(getRandomNumber());

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

gameArc(gameConditions, getQustnAndCorAnswer);

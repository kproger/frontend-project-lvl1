import gameArc from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameConditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function getQuesAndCorrAnsw() {
  const question = getRandomNumber(1, 25);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
}

export default () => gameArc(gameConditions, getQuesAndCorrAnsw);

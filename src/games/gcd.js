import gameArc from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameConditions = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const genQuestAndCorrectAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();

  return [question, correctAnswer];
}

export default () => gameArc(gameConditions, genQuestAndCorrectAnswer);

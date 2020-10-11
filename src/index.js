import promptly from 'promptly';

async function runBasicOfTheGame(gameConditions, getQsnAndCorAnswer) {
  console.log('Welcome to The Brain Games!');
  const userName = await promptly.prompt('May I have your name?:');
  console.log(`Hello, ${userName}!`);
  console.log(gameConditions);

  let rightAnswersCounter = 0;
  const maxNumOfRounds = 3;

  for (rightAnswersCounter; rightAnswersCounter < maxNumOfRounds; rightAnswersCounter += 1) {
    const [question, correctAnswer] = getQsnAndCorAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = await promptly.prompt('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}`);
}

export default runBasicOfTheGame;

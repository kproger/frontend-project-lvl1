import promptly from 'promptly';

export default async (gameConditions, getQsnAndCorAnswer) => {
  console.log('Welcome to The Brain Games!');
  const userName = await promptly.prompt('May I have your name?:', { default: 'Anonimus' });
  console.log(`Hello, ${userName}!`);
  console.log(gameConditions);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getQsnAndCorAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = await promptly.prompt('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}`);
};

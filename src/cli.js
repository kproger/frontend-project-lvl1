import promptly from 'promptly';

export default async () => {
  console.log('May I have your name?');
  const name = await promptly.prompt('Your answer: ');

  return console.log(`Hello, ${name}!`);
};

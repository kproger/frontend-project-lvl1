#!/usr/bin/env node

import promptly from 'promptly';

let userName;

async function toGreetUser() {
    console.log('Welcome to The Brain Games!');
    userName = await promptly.prompt('May I have your name?:');

    console.log(`Hello, ${userName}!`);
    runGameIsEven();
}

function getRandomNumber() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

const isEven = num => num % 2 === 0;

function checkUserAnswer(numb, answer) {
    if (answer === 'yes') {
        answer = true;
    } else if (answer === 'no') {
        answer = false
    } else {
        return false
    }

    if (isEven(numb) && answer) {
        return true
    } else if(!isEven(numb) && !answer) {
        return true
    } else {
        return false
    }
}

async function runGameIsEven () {
    const gameRules = 'Answer \"yes\" if the number is even, otherwise answer \"no\"';
    let correctAnswersCounter = 0;
    let flag = true;
    console.log(gameRules)

     askUser(correctAnswersCounter, flag)
}

const getCorrectAnswer = num => isEven(num) ? 'yes' : 'no';

async function askUser(counter, flag) {
    let randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    let userAnswer = await promptly.prompt('Your answer: ');
    const correctAnswer = getCorrectAnswer();
    
    if (checkUserAnswer(randomNumber, userAnswer) && counter < 2) {
        console.log('Correct!')
        return askUser(counter + 1, flag)
    } else if (checkUserAnswer(randomNumber, userAnswer) && counter === 2) {
        return console.log(`Congratulations, ${userName}!`)
    }else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`)
        return flag = false
    }
}
toGreetUser()
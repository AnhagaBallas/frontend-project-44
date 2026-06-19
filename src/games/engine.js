// src/games/engine.js
import readlineSync from 'readline-sync';
import greeting from '../cli.js';

const ROUNDS_COUNT = 3;

const runEngine = (description, generateQuestion) => {
  const name = greeting();
  console.log(description);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, correctAnswer] = generateQuestion();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runEngine;
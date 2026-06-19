// src/games/calc.js
import runEngine from './engine.js';

const GAME_DESCRIPTION = 'What is the result of the expression?';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const OPERATORS = ['+', '-', '*'];

const calculate = (a, operator, b) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateQuestion = () => {
  const a = getRandomInt(1, 50);
  const b = getRandomInt(1, 50);
  const operator = OPERATORS[getRandomInt(0, OPERATORS.length - 1)];
  const correctAnswer = calculate(a, operator, b);
  return [`${a} ${operator} ${b}`, correctAnswer];
};

const runGame = () => runEngine(GAME_DESCRIPTION, generateQuestion);

export default runGame;
// src/games/even.js
import runEngine from './engine.js';

const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (n) => n % 2 === 0;

const generateQuestion = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const runGame = () => runEngine(GAME_DESCRIPTION, generateQuestion);

export default runGame;
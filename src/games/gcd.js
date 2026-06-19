// src/games/gcd.js
import runEngine from './engine.js';

const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const generateQuestion = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  const correctAnswer = getGcd(a, b);
  return [`${a} ${b}`, correctAnswer];
};

const runGame = () => runEngine(GAME_DESCRIPTION, generateQuestion);

export default runGame;
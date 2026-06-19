// src/games/prime.js
import runEngine from './engine.js';

const GAME_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (n) => {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
};

const generateQuestion = () => {
  const number = getRandomInt(2, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const runGame = () => runEngine(GAME_DESCRIPTION, generateQuestion);

export default runGame;
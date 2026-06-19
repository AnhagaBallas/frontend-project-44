// src/games/progression.js
import runEngine from './engine.js';

const GAME_DESCRIPTION = 'What number is missing in the progression?';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateQuestion = () => {
  const length = getRandomInt(5, 10);
  const step = getRandomInt(1, 10);
  const start = getRandomInt(1, 20);
  const hiddenIndex = getRandomInt(0, length - 1);

  const progression = Array.from({ length }, (_, i) => start + i * step);
  const correctAnswer = progression[hiddenIndex];

  const question = progression
    .map((num, i) => (i === hiddenIndex ? '..' : num))
    .join(' ');

  return [question, correctAnswer];
};

const runGame = () => runEngine(GAME_DESCRIPTION, generateQuestion);

export default runGame;
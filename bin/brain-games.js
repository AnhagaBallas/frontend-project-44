const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//НАЧАЛО  ВСПОМОГАТЕЛЬНЫЙ ФУНКЦИЙ
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}
function calculation(num1, num2, operation) {
  let answer;
  switch (operation) {
    case `+`:
      answer = num1 + num2;
      break;
    case `-`:
      answer = num1 - num2;
      break;
    case `*`:
      answer = num1 * num2;
      break;
    case `/`:
      answer = num1 / num2;
      break;
  }
  return answer;
}
function isEven(number) {
  return number % 2 === 0;
}
function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }
  return true;
}
//Создание арифмитической прогресии.
function generateArithmeticProgression() {
  const maxAttempts = 10;
  const length = 8;
  const maxNumber = 100;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const start = Math.floor(Math.random() * (maxNumber - length * 2)) + 1;
    const maxDiff = Math.min(20, maxNumber - start);

    if (maxDiff < 1) continue;

    const diff = Math.floor(Math.random() * maxDiff) + 1;

    const sequence = [];
    for (let i = 0; i < length; i++) {
      const num = start + i * diff;
      if (num > maxNumber) {

        return generateArithmeticProgression();
      }
      sequence.push(num);
    }

    return sequence;
  }

  return [1, 5, 9, 13, 17, 21, 25, 29];
}
//КОНЕЦ ВСПОМОГАТЕЛЬНЫХ ФУНКЦИЙ
//Игра с недостающим звеном в прогресии.
async function brainProgression() {
  const name = await ask('May I have your name? ');
  console.log(`Hello ${name}`);
  console.log("What number is missing in this progression?");
  const totalQuestions = 3;
  for (let i = 0; i < totalQuestions; i++) {
    const num1 = Math.floor(Math.random() * 2) + 1;
    let progression = generateArithmeticProgression();
    const num2 = Math.floor(Math.random() * 8);
    const correctAnswer = progression[num2];
    progression[num2] = `..`;

    console.log(`Question: ${progression}`);
    const answerStr = await ask('Your answer: ');
    const answer = parseInt(answerStr, 10);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answerStr}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      rl.close();
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
  rl.close();
}
//Игра на определение простого числа.
async function brainPrime() {
  const name = await ask('May I have your name? ');
  console.log(`Hello ${name}`);
  console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'.");
  const totalQuestions = 3;
  for (let i = 0; i < totalQuestions; i++) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    let correctAnswer;
    if (isPrime(num1)) {
      correctAnswer = `yes`;
    } else {
      correctAnswer = `no`;
    }
    console.log(`Question: ${num1}`);
    const answerStr = await ask('Your answer: ');
    const answer = answerStr.trim();
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answerStr}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      rl.close();
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
  rl.close();
}
//Игра на определение целого числа.
async function brainEven() {
  const name = await ask('May I have your name? ');
  console.log(`Hello ${name}`);
  console.log("Answer 'yes' if number even otherwise answer 'no'");
  const totalQuestions = 3;
  for (let i = 0; i < totalQuestions; i++) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    let correctAnswer;
    if (isEven(num1)) {
      correctAnswer = `yes`;
    } else {
      correctAnswer = `no`;
    }
    console.log(`Question: ${num1}`);
    const answerStr = await ask('Your answer: ');
    const answer = answerStr.trim();
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answerStr}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      rl.close();
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
  rl.close();
}
//Игра с решением случайного примера.
async function brainCalc() {
  const name = await ask('May I have your name? ');
  console.log(`Hello ${name}`);
  console.log('What is the result of the expression?');
  const operators = ['+', '-', '*', '/'];
  const totalQuestions = 3;
  for (let i = 0; i < totalQuestions; i++) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const mathOperation = Math.floor(Math.random() * 3) + 1;
    const correctAnswer = calculation(num1, num2, operators[mathOperation]);
    console.log(`Question: ${num1} ${operators[mathOperation]} ${num2}`);
    const answerStr = await ask('Your answer: ');
    const answer = parseInt(answerStr, 10);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answerStr}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      rl.close();
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
  rl.close();
}
//Игра на определение общего делителя.
async function brainGcd() {
  const name = await ask('May I have your name? ');
  console.log(`Hello ${name}`);
  console.log('Find the greatest common divisor of given numbers.');

  const totalQuestions = 3;
  for (let i = 0; i < totalQuestions; i++) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = gcd(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    const answerStr = await ask('Your answer: ');
    const answer = parseInt(answerStr, 10);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answerStr}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      rl.close();
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
  rl.close();
}

//Базовая команда.
async function brainGames() {
  const name = await ask('May I have your name? ');
  console.log(`Hello ${name}`);
  rl.close();
}





rl.question('Введите команду: ', async (comand) => {
  switch (comand.trim()) {
    case 'brain - games':
      await brainGames();
      break;
    case 'brain-gcd':
      await brainGcd();
      break;
    case `brain - calc`:
      await brainCalc();
      break;
    case `brain-even`:
      await brainEven();
      break;
    case `brain-prime`:
      await brainPrime();
      break;
    case `brain-progression`:
      await brainProgression();
      break;
    case `logout`:
      break;
    default:
      console.log('Команда не распознана');
      rl.close();
  }
});

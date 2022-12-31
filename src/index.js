import readlineSync from 'readline-sync';
import greeting from './cli.js';

const settings = {
  iterations: 3,
  numberDepth: 100,
  progressionDepth: 10,
  progressionStep: 10,
};

const getRandomNumber = (depth) => Math.ceil(Math.random() * depth);

const main = (gameRule, questions, rightAnswers) => {
  const userName = greeting();
  console.log(gameRule);

  for (let i = 0; i < settings.iterations; i += 1) {
    console.log(`Question: ${questions[i]}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== rightAnswers[i]) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswers[i]}'.\nLet's try again, ${userName}`);
      process.exit();
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export { main, getRandomNumber, settings };

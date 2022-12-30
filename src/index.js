import readlineSync from 'readline-sync';
import greeting from './cli.js';

const settings = {
  iterations: 3,
  numberDepth: 100,
};

const main = (entryWords, questions, results) => {
  const userName = greeting();
  console.log(entryWords);

  for (let i = 0; i < settings.iterations; i += 1) {
    console.log(`Question: ${questions[i]}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== results[i]) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${results[i]}'.\nLet's try again, ${userName}`);
      process.exit();
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export { main, settings };

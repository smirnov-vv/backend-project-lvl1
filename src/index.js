import readlineSync from 'readline-sync';

const settings = {
  iterations: 3,
  numberDepth: 100,
  progressionDepth: 10,
  progressionStep: 10,
};

const getRandomNumber = (depth) => Math.ceil(Math.random() * depth);

const prepareData = (checkFunction) => {
  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < settings.iterations; i += 1) {
    const number = getRandomNumber(settings.numberDepth);
    questions.push(number);
    rightAnswers.push(checkFunction(number));
  }
  return [questions, rightAnswers];
};

const main = (gameRule, questions, rightAnswers) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRule);

  for (let i = 0; i < settings.iterations; i += 1) {
    console.log(`Question: ${questions[i]}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== rightAnswers[i]) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswers[i]}'.\nLet's try again, ${userName}!`);
      process.exit();
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export {
  main, getRandomNumber, prepareData, settings,
};

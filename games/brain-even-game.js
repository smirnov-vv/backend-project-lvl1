import { main, settings } from '../src/index.js';

export default () => {
  const entryWords = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getRandomNumber = (depth) => Math.round(Math.random() * depth);

  const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

  const questions = [];
  const results = [];
  for (let i = 0; i < settings.iterations; i += 1) {
    const number = getRandomNumber(settings.numberDepth);
    questions.push(number);
    results.push(isEven(number));
  }

  main(entryWords, questions, results);
};

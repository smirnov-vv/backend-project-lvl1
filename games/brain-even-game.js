import { main, getRandomNumber, settings } from '../src/index.js';

export default () => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

  const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

  // Prepare data for the game
  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < settings.iterations; i += 1) {
    const number = getRandomNumber(settings.numberDepth);
    questions.push(number);
    rightAnswers.push(isEven(number));
  }

  main(gameRule, questions, rightAnswers);
};

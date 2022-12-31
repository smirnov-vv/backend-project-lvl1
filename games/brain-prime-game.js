import { main, getRandomNumber, settings } from '../src/index.js';

export default () => {
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const rightResult = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < settings.iterations; i += 1) {
    const number = getRandomNumber(settings.numberDepth);
    questions.push(number);
    rightAnswers.push(rightResult(number));
  }

  main(gameRule, questions, rightAnswers);
};

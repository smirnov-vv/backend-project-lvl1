import { main, prepareData } from '../src/index.js';

export default () => {
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const isPrime = (num) => {
    const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return num > 1 ? 'yes' : 'no';
  };

  const [questions, rightAnswers] = prepareData(isPrime);

  main(gameRule, questions, rightAnswers);
};

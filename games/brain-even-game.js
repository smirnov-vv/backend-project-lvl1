import { main, prepareData } from '../src/index.js';

export default () => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

  const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

  const [questions, rightAnswers] = prepareData(isEven);

  main(gameRule, questions, rightAnswers);
};

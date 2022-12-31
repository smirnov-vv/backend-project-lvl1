import { main, getRandomNumber, settings } from '../src/index.js';

export default () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';

  const rightResult = (firstNumber, secondNumber) => {
    for (let i = firstNumber; i > 0; i -= 1) {
      if (firstNumber % i === 0 && secondNumber % i === 0) {
        return `${i}`;
      }
    }
    return '1';
  };

  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < settings.iterations; i += 1) {
    const firstNumber = getRandomNumber(settings.numberDepth);
    const secondNumber = getRandomNumber(settings.numberDepth);
    questions.push(`${firstNumber} ${secondNumber}`);
    rightAnswers.push(rightResult(firstNumber, secondNumber));
  }

  main(gameRule, questions, rightAnswers);
};

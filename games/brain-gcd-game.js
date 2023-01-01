import { main, getRandomNumber, settings } from '../src/index.js';

export default () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';

  const getGCD = (firstNumber, secondNumber) => {
    if (!secondNumber) { // secondNumber === 0;
      return `${firstNumber}`;
    }
    return getGCD(secondNumber, firstNumber % secondNumber);
  };

  // Prepare data for the game
  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < settings.iterations; i += 1) {
    const firstNumber = getRandomNumber(settings.numberDepth);
    const secondNumber = getRandomNumber(settings.numberDepth);
    questions.push(`${firstNumber} ${secondNumber}`);
    rightAnswers.push(getGCD(firstNumber, secondNumber));
  }

  main(gameRule, questions, rightAnswers);
};

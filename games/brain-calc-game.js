import { main, settings } from '../src/index.js';

export default () => {
  const entryWords = 'What is the result of the expression?';

  const getRandomNumber = (depth) => Math.round(Math.random() * depth);

  const getRandomSign = () => {
    const mathOperations = ['+', '-', '*'];
    return mathOperations[Math.floor(Math.random() * mathOperations.length)];
  };

  const rightResult = (firstNumber, mathSign, secondNumber) => {
    switch (mathSign) {
      case '+':
        return `${firstNumber + secondNumber}`;
      case '-':
        return `${firstNumber - secondNumber}`;
      case '*':
        return `${firstNumber * secondNumber}`;
      default:
        return null;
    }
  };

  const questions = [];
  const results = [];
  for (let i = 0; i < settings.iterations; i += 1) {
    const firstNumber = getRandomNumber(settings.numberDepth);
    const secondNumber = getRandomNumber(settings.numberDepth);
    const mathSign = getRandomSign();
    questions.push(`${firstNumber} ${mathSign} ${secondNumber}`);
    results.push(rightResult(firstNumber, mathSign, secondNumber));
  }

  main(entryWords, questions, results);
};

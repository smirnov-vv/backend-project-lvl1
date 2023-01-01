import { main, getRandomNumber, settings } from '../src/index.js';

export default () => {
  const gameRule = 'What is the result of the expression?';

  const getRandomSymbol = () => {
    const mathSymbols = ['+', '-', '*'];
    return mathSymbols[getRandomNumber(mathSymbols.length) - 1];
  };

  const rightResult = (firstNumber, mathSymbol, secondNumber) => {
    switch (mathSymbol) {
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

  // Prepare data for the game
  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < settings.iterations; i += 1) {
    const firstNumber = getRandomNumber(settings.numberDepth);
    const secondNumber = getRandomNumber(settings.numberDepth);
    const mathSymbol = getRandomSymbol();
    questions.push(`${firstNumber} ${mathSymbol} ${secondNumber}`);
    rightAnswers.push(rightResult(firstNumber, mathSymbol, secondNumber));
  }

  main(gameRule, questions, rightAnswers);
};

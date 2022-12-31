import { main, getRandomNumber, settings } from '../src/index.js';

export default () => {
  const gameRule = 'What number is missing in the progression?';

  const makeProgression = () => {
    const progressionDepth = getRandomNumber(settings.progressionDepth) + 4;
    const progressionStep = getRandomNumber(settings.progressionStep);
    const firstNumber = getRandomNumber(settings.numberDepth);
    const result = [firstNumber];
    for (let i = 1; i < progressionDepth; i += 1) {
      const prevNumber = result[result.length - 1];
      result.push(prevNumber + progressionStep);
    }
    console.log(`progression: ${result.join(' ')}`);
    return result;
  };

  const makeQuestionAndAnswer = (progression) => {
    const question = progression;
    const hideNumber = getRandomNumber(question.length) - 1;
    const rightAnswer = question[hideNumber];
    question[hideNumber] = '..';
    console.log(`question:    ${question.join(' ')}`);
    console.log(`rightAnswer: ${rightAnswer}`);
    return [question.join(' '), `${rightAnswer}`];
  };

  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < settings.iterations; i += 1) {
    const progression = makeProgression();
    const [question, rightAnswer] = makeQuestionAndAnswer(progression);
    questions.push(question);
    rightAnswers.push(rightAnswer);
  }

  main(gameRule, questions, rightAnswers);
};

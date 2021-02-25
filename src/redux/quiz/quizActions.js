import {SET_QUIZ, MARKED_ANSWERS} from './quizTypes';

let mAnswers = [];
for (let i = 0; i < 10; i++) {
  mAnswers[i] = '';
}

export const setQuiz = (quiz = {}) => {
  return {
    type: SET_QUIZ,
    payload: quiz
  }
}

export const markedAnswers = (answerArray = mAnswers) => {
  return {
    type: MARKED_ANSWERS,
    payload: answerArray
  }
}
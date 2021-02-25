import {SET_QUIZ, MARKED_ANSWERS, SET_CATEGORY, SET_QUESTION_COUNT, SET_GUEST_USER, SET_DIFFICULTY} from './quizTypes';

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

export const setCategory = (category = 31) => {
  return {
    type: SET_CATEGORY,
    payload: category
  }
}

export const setQuestionCount = (count = 10) => {
  return {
    type: SET_QUESTION_COUNT,
    payload: count
  }
}

export const setGuestUser = (user = "guest") => {
  return {
    type: SET_GUEST_USER,
    payload: user
  }
}

export const setDifficulty = (difficulty = "easy") => {
  return {
    type: SET_DIFFICULTY,
    payload: difficulty
  }
}

export const markedAnswers = (answerArray = mAnswers) => {
  return {
    type: MARKED_ANSWERS,
    payload: answerArray
  }
}
import {MARKED_ANSWERS, SET_CATEGORY, SET_DIFFICULTY, SET_GUEST_USER, SET_QUESTION_COUNT, SET_QUIZ} from './quizTypes';


let mAnswers = [];
for (let i = 0; i < 10; i++) {
  mAnswers[i] = '';
}

const initialState = {
  markedAnswers: mAnswers,
  quiz: {},
  questionCount: 10,
  user: "Guest",
  category: 31,
  difficulty: "easy"
}

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case MARKED_ANSWERS: return {
      ...state,
      markedAnswers: action.payload 
    }
    case SET_QUIZ: return {
      ...state,
      quiz: action.payload 
    }
    case SET_QUESTION_COUNT: return {
      ...state,
      questionCount: action.payload
    }
    case SET_GUEST_USER: return {
      ...state,
      user: action.payload
    }
    case SET_CATEGORY: return {
      ...state,
      category: action.payload
    }
    case SET_DIFFICULTY: return {
      ...state,
      difficulty: action.payload
    }
    default: return state;
  }
}

export default quizReducer;
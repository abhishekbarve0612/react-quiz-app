import {MARKED_ANSWERS, SET_QUIZ} from './quizTypes';


let mAnswers = [];
for (let i = 0; i < 10; i++) {
  mAnswers[i] = '';
}

const initialState = {
  markedAnswers: mAnswers
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
    default: return state;
  }
}

export default quizReducer;
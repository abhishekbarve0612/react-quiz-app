import {combineReducers} from 'redux';
import quizReducer from './quiz/quizReducer';
import scoreReducer from './score/scoreReducer';

export default combineReducers({
  quiz: quizReducer,
  score: scoreReducer
})
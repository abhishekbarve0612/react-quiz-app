import {createStore} from 'redux';
import scoreReducer from './score/scoreReducer';

const store = createStore(scoreReducer);

export default store;
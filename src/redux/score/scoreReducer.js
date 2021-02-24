import { INCREMENT_SCORE } from "./scoreTypes";

const initialState = {
  totalScore: 0
}

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_SCORE: return {
      ...state,
      totalScore: action.payload
    }
    default:
      return state;
  }
}

export default scoreReducer;
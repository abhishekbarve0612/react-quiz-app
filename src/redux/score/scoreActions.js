import { INCREMENT_SCORE } from "./scoreTypes";

export const incrementScore = (score = 0) => {
  return {
    type: INCREMENT_SCORE,
    payload: score
  }
}
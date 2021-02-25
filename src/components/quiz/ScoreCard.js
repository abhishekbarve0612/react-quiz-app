import { useSelector } from "react-redux";
import React from 'react';
import './style.css';
import { Link } from "react-router-dom";


const ScoreCard = () => {
  const score = useSelector(state => state.score.totalScore);
  const qCount = useSelector(state => state.quiz.questionCount);
  const user = useSelector(state => state.quiz.user);
  return ( 
    <div className="scorecard">
      <div className="res">
        Congratulations! {user} <br/>
        You Scored: {score} out of {qCount} <br/>
        Your Success % is {(score / qCount * 100).toFixed(2)} %
      </div>
      <Link to="/react-quiz-app/">Go Back To Home</Link>
    </div>
   );
}
 
export default ScoreCard;
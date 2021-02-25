import { useSelector } from "react-redux";
import React from 'react';
import './style.css';
import { Link } from "react-router-dom";


const ScoreCard = () => {
  const score = useSelector(state => state.score.totalScore);
  const user = useSelector(state => state.quiz.user);
  return ( 
    <div className="scorecard">
      <div className="res">
        Congratulations! {user} <br/>
        You Scored: {score}
      </div>
      <Link to="/react-quiz-app/">Go Back To Home</Link>
    </div>
   );
}
 
export default ScoreCard;
import { useSelector } from "react-redux";
import React from 'react';
import './style.css';


const ScoreCard = () => {
  const score = useSelector(state => state.score.totalScore);
  return ( 
    <div className="scorecard">
      <div className="res">
        You Scored: {score}
      </div>
    </div>
   );
}
 
export default ScoreCard;
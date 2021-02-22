import React from 'react';
import './style.css';
const QuizInfoCard = ({name, creator, date, attemptCount, topScorer}) => {
  return ( 
    <div className="quiz-info">
      <div className="quiz-info-head">
        <div className="quiz-name">
        {name}
        </div>
        <div className="quiz-attempt">
          <button>Attempt Now</button>
        </div>
      </div>
      <div className="quiz-details">
      <div className="attempted-by">
        Attempted By: {attemptCount}
      </div>
      <div className="creator">
        Created By: {creator}
      </div>
      <div className="created-date">
        Created On: {date}
      </div>
      <div className="top-scorer">
        Top Scorer: {topScorer}
      </div>
      </div>
     
    </div>
   );
}
 
export default QuizInfoCard;
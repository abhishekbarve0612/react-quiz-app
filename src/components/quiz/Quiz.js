import React from 'react';
import QuestionAnswer from './QuestionAnswer';
import QuizNavbar from './QuizNavbar';

const Quiz = () => {
  return ( 
    <div className="quiz">
      <div className="quiz-header">
        <div className="quiz-title">
          Quiz Title
        </div>
        <div className="quiz-creator">
          Quiz Creator
        </div>
        <div className="quiz-score">
          Current Score: 0
        </div>
      </div>
      <div className="quiz-body">
        <QuestionAnswer />
        <QuizNavbar />
      </div>
    </div>
   );
}
 
export default Quiz;
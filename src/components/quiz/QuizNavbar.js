import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './style.css';
const QuizNavbar = () => {
  const qn = useParams();
  const questionCount = useSelector(state => state.quiz.questionCount);
  let qno = parseInt(qn.qn);
  let prev = null, next = null;
  if (qno > 0) prev = qno-1;
  if (qno < questionCount-1) next = qno+1;
  return ( 
    <div className="quiz-nav">
      { qno > 0
        &&
        <Link className="previous primary-color" to={`/react-quiz-app/quiz/${qn.qid}/${prev}`}>
        <span>Previous</span>
      </Link>}
      {next && <Link className="next primary-color" to={`/react-quiz-app/quiz/${qn.qid}/${next}`}>
      <span>Next</span>
      </Link>}
      <Link className="submit success-color" to="/react-quiz-app/quiz/result">
      <span>Submit</span>
      </Link>
      <Link className="close danger-color" to="/react-quiz-app/">
      <div>Close</div>
      </Link>
    </div>
   );
}
 
export default QuizNavbar;
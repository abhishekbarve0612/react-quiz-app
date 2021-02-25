import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.css';
const QuizNavbar = () => {
  const qn = useParams();
  let qno = parseInt(qn.qn);
  let prev = null, next = null;
  if (qno > 0) prev = qno-1;
  if (qno < 9) next = qno+1;
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
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
        <Link to={`/react-quiz-app/quiz/${prev}`}>
        <button className="previous">Previous</button>
      </Link>}
      {next && <Link to={`/react-quiz-app/quiz/${next}`}>
      <button className="next">Next</button>
      </Link>}
      <div className="submit">Submit</div>
      <div className="close">Close</div>
    </div>
   );
}
 
export default QuizNavbar;
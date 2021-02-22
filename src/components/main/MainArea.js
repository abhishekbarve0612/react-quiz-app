import react from 'react';
import Quiz from '../quiz/Quiz';
import QuizList from '../quiz/QuizList';
import './Main.css';
const MainArea = ({quizOn}) => {
  return ( 
      <div className="main-area">
        {
          quizOn? <Quiz /> : <QuizList />
        }
      </div>
      
   );
}
 
export default MainArea;
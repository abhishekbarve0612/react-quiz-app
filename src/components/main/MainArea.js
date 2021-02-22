import react from 'react';
import Quiz from '../quiz/Quiz';
import QuizList from '../quiz/QuizList';
import './Main.css';
const MainArea = () => {
  return ( 
      <div className="main-area">
        <QuizList />
      </div>
      
   );
}
 
export default MainArea;
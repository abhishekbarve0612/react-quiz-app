import react from 'react';
import Quiz from '../quiz/Quiz';
import QuizList from '../quiz/QuizList';
import useFetch from '../../customHooks/useFetch';
import './Main.css';
import Sidebar from './Sidebar';
import QuestionNavigator from '../quiz/QuestionNavigator';
const MainArea = ({quizOn}) => {

  const API_URL = "https://opentdb.com/api.php?amount=10&category=31&difficulty=easy";
  const { data: quiz, isLoading, error} = useFetch(API_URL);
  return ( 
    <>
    {quizOn? quiz && <QuestionNavigator quiz={quiz} /> :<Sidebar />}
    <div className="main-area">
        {quiz && <>
        {
          quizOn? <Quiz quiz={quiz} isLoading={isLoading} error={error} /> : <QuizList />
        }
        </>}
        
      </div>
      
    </>
      
   );
}
 
export default MainArea;
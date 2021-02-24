import react, { useEffect, useState } from 'react';
import Quiz from '../quiz/Quiz';
import QuizList from '../quiz/QuizList';
import useFetch from '../../customHooks/useFetch';
import './Main.css';
import Sidebar from './Sidebar';
import QuestionNavigator from '../quiz/QuestionNavigator';
import { useParams } from 'react-router-dom';
const MainArea = ({quizOn, category}) => {
  const urlParam = useParams();
  const API_URL = `https://opentdb.com/api.php?amount=10&category=${urlParam.qid}&difficulty=easy`;
  const { data:quiz, isLoading, error} = useFetch(API_URL);
  return ( 
    <>
    {quizOn? <QuestionNavigator/> :<Sidebar />}
    <div className="main-area">
        {
          quizOn? <Quiz /> : <QuizList />
        }

        
      </div>
      
    </>
      
   );
}
 
export default MainArea;
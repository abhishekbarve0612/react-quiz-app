import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useHistory, Router, Switch, Route } from "react-router-dom";
import QuestionAnswer from './QuestionAnswer';
import QuizNavbar from './QuizNavbar';
import moduleName from '../../customHooks/useFetch';
import useFetch from '../../customHooks/useFetch';

const Quiz = ({quiz, isLoading, error}) => {
  let markedAnswers = [];
  for (let i = 0; i < 5; i++) {
    const obj = {
      i: []
    }
    markedAnswers.push(obj);
  }




  return ( 
      <div className="quiz">
        {isLoading && <div>Content Is Loading</div>}
        {error && <div>Error {error} </div>}
      <div className="quiz-header">
        {quiz && <div className="quiz-title">
          Quiz Title: {quiz['results'][0].category}
        </div>}
        <div className="quiz-creator">
          Quiz Creator
        </div>
        <div className="quiz-score">
          Top Score: 0
        </div>
      </div>
            
      {quiz && <div className="quiz-body">
        <QuestionAnswer  question={quiz['results']} markedAnswers={markedAnswers} />
        <QuizNavbar />
        </div>}
      
    </div>
   
    );
}
 
export default Quiz;
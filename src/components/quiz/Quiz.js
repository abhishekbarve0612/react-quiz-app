import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useHistory, Router, Switch, Route } from "react-router-dom";
import QuestionAnswer from './QuestionAnswer';
import QuizNavbar from './QuizNavbar';
import moduleName from '../../customHooks/useFetch';
import useFetch from '../../customHooks/useFetch';

const Quiz = () => {
  
  const urlParam = useParams();
  const API_URL = `https://opentdb.com/api.php?amount=10&category=${urlParam.qid}&difficulty=easy`;
  const { data:quiz, isLoading, error} = useFetch(API_URL);
  let markedAnswers = [];
  for (let i = 0; i < 10; i++) {
    markedAnswers[i] = new Set();
  }
  const [mAnswers, setMAnswers] = useState(markedAnswers);
  const markAnswer = (e, qno) => {
    let tempArray = [...mAnswers];
    tempArray[qno].add("Abisek");
    if (e.target.nodeName == "INPUT" || e.target.nodeName == "SPAN"){
      let parent = e.target.parentElement;
      let check = parent.children;
      if (parent.classList.contains("marked")){
          parent.classList.remove("marked");
          check[0].checked = false;
          tempArray[qno].delete(parent.getAttribute("value"));
        } else{
          parent.classList.add("marked");
          check[0].checked = true;
          tempArray[qno].add(parent.getAttribute("value"));
        }
    } else {
      let element = e.target;
      let check = e.target.children;
      if (element.classList.contains("marked")){
          element.classList.remove("marked");
          check[0].checked = false;
          tempArray[qno].delete(element.getAttribute("value"));
        } else{
          element.classList.add("marked");
          check[0].checked = true;
          tempArray[qno].add(element.getAttribute("value"));
        }
    }
    setMAnswers(tempArray);
  }

  const checkIfMarked = (qno, value, element) => {
      const check = element.children;
      if (mAnswers[qno].has(value)){
        element.classList.add("marked");
        check[0].checked = true;
      } else {
        element.classList.remove("marked");
        check[0].checked = false;
      }
  }

  useEffect(() => {
    
    
  })


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
        <QuestionAnswer  question={quiz['results']} checkIfMarked={checkIfMarked} markAnswer={markAnswer} markedAnswers={markedAnswers} />
        <QuizNavbar />
        </div>}
      
    </div>
   
    );
}
 
export default Quiz;
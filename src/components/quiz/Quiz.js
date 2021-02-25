import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useHistory, Router, Switch, Route } from "react-router-dom";
import QuestionAnswer from './QuestionAnswer';
import QuizNavbar from './QuizNavbar';
import moduleName from '../../customHooks/useFetch';
import useFetch from '../../customHooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { incrementScore, markedAnswers, setQuiz, setCategory } from '../../redux';

const Quiz = () => {
  const totalScore = useSelector(state => state.score.totalScore);
  const markedAnswersFromStore = useSelector(state => state.quiz.markedAnswers);
  const fetchedQuiz = useSelector(state => state.quiz.quiz);
  const questionCount = useSelector(state => state.quiz.questionCount);
  const category = useSelector(state => state.quiz.category);
  const difficulty = useSelector(state => state.quiz.difficulty);
  const dispatch = useDispatch();
  const urlParam = useParams();
  console.log(questionCount + " " + difficulty);
  dispatch(setCategory(urlParam.qid));
  const API_URL = `https://opentdb.com/api.php?amount=${questionCount}&category=${category}&difficulty=${difficulty}`;
  console.log(API_URL);
  const { data:quiz, isLoading, error} = useFetch(API_URL);
  dispatch(setQuiz(quiz));
  const shuffleArr =  (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
    }
  }
  let optionsArray = [];
  if (quiz != null){
    for(let i = 0; i < quiz['results'].length; i++){
      let options = [
        ...quiz['results'][i]['incorrect_answers'],
        quiz['results'][i]['correct_answer']
      ];
      shuffleArr(options);
      optionsArray.push(options);
    }
    console.log(optionsArray + "randomized");
    console.log(quiz['results'] + " Original");
  }

  const markAnswer = (e, qno) => {
    let tempArray = [...markedAnswersFromStore];
    if (e.target.nodeName == "INPUT" || e.target.nodeName == "SPAN"){
      let parent = e.target.parentElement;
      let check = parent.children;
      if (parent.classList.contains("marked")){
          parent.classList.remove("marked");
          check[0].checked = false;
          tempArray[qno] = '';
        } else{
          parent.classList.add("marked");
          check[0].checked = true;
          tempArray[qno] = parent.getAttribute("value");
        }
    } else {
      let element = e.target;
      let check = e.target.children;
      if (element.classList.contains("marked")){
          element.classList.remove("marked");
          check[0].checked = false;
          tempArray[qno] = '';
        } else{
          element.classList.add("marked");
          check[0].checked = true;
          tempArray[qno] = element.getAttribute("value");
        }
    }
    dispatch(markedAnswers(tempArray));
  }

  const computeScore = () => {
    if (quiz){
      const qno = urlParam.qn;
      const correctAnswers = quiz['results'];
      console.log("Checkin correct answers");
      console.log(correctAnswers);
      let correct_answers = [];

      let count = 0;
      for (const obj of quiz['results']) {
        
        correct_answers[count] = obj.correct_answer;
        count++;
      }
      console.log(correct_answers);
      let score = 0;
      for (let i = 0; i < correct_answers.length; i++) {
        if (correct_answers[i] == markedAnswersFromStore[i]) score++;
      }
      console.log("Total Score Till Now: " + score);
      dispatch(incrementScore(score));
    }
  }

  const checkIfMarked = (qno, value, element) => {
      const check = element.children;
      if (markedAnswersFromStore[qno] == value){
        element.classList.add("marked");
        check[0].checked = true;
      } else {
        element.classList.remove("marked");
        check[0].checked = false;
      }
  }

  useEffect(() => {
    computeScore();
    
  })


  return ( 
      <div className="quiz">
        {isLoading && <div>Content Is Loading</div>}
        {error && <div>Error {error} </div>}
      <div className="quiz-header">
        {quiz != null && <div className="quiz-title">
          Quiz Title: {category}
        </div>}
        <div className="quiz-creator">
          Quiz Creator
        </div>
        <div className="quiz-score">
          Top Score: 0
        </div>
      </div>
            
      {quiz && <div className="quiz-body">
        <QuestionAnswer  question={quiz['results']} checkIfMarked={checkIfMarked} markAnswer={markAnswer} optionsArray={optionsArray} markedAnswers={markedAnswersFromStore} />
        <QuizNavbar />
        </div>}
      
    </div>
   
    );
}


 
export default Quiz;
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Option from './Option';

const QuestionAnswer = ({markedAnswers, question, markAnswer, checkIfMarked, optionsArray}) => {
  const qn = useParams().qn;
  const quest = question[qn];
  let answers = new Set();
  const shuffleArr =  (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
    }
  }
  let options = [
    ...quest['incorrect_answers'],
    quest['correct_answer']
  ];
  useEffect(() => {
    
  console.log(options + " -----");
  shuffleArr(options);
  console.log(options);
  }, []);
  return ( 
    <>
    
      <div className="question">
        <div className="q">Q</div>
          <div dangerouslySetInnerHTML={{ __html: quest.question}}></div>
          </div>
          <div className="options">
          {optionsArray[qn].map((opt, index) => (
              
              <Option key={index} checkIfMarked={checkIfMarked}  value={opt} markAnswer={markAnswer} markedAnswers={markedAnswers} qno={qn} />
          ))}
          </div>
    </>
   );
}
 
export default QuestionAnswer;
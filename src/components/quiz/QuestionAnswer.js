import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Option from './Option';

const QuestionAnswer = ({markedAnswers, question, markAnswer, checkIfMarked, optionsArray}) => {
  const qn = useParams().qn;
  const quest = question[qn];
  console.log(question + "[[[[[[[[[[[[[[[[[");

  useEffect(() => {
    
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
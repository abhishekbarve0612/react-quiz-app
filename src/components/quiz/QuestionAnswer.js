import React from 'react';
import { useParams } from 'react-router-dom';
import Option from './Option';

const QuestionAnswer = ({markedAnswers, question, qno}) => {
  const qn = useParams().qn;
  const quest = question[qn];
  let answers = new Set();
  let options = [
    ...quest['incorrect_answers'],
    quest['correct_answer']
  ]
  return ( 
    <>
    
      <div className="question">
        <div className="q">Q</div>
          <div dangerouslySetInnerHTML={{ __html: quest.question}}></div>
          </div>
          <div className="options">
          {options.map((opt, index) => (
              <Option key={index}  value={opt} answers={answers} markedAnswers={markedAnswers} qno={qn} />
          ))}
          </div>
    </>
   );
}
 
export default QuestionAnswer;
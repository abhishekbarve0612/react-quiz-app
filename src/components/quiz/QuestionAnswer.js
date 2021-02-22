import React from 'react';

const QuestionAnswer = () => {
  return ( 
    <>
      <div className="question">
        <div className="q">Q</div>
        <div>
            
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat nesciunt, odit tempore nisi voluptatibus ea quos? Nihil sapiente pariatur aspernatur, sit illo enim vitae, tempora recusandae impedit sequi officia? Nam?
        </div>
          </div>
          <div className="options">
            <div className="option">
              <input type="checkbox" name="op1" id="op1"/>
              Option !</div>
            <div className="option">
              <input type="checkbox" name="opii" id="op2"/>
              Option !!</div>
            <div className="option">
              <input type="checkbox" name="opiii" id="op3"/>
              Option !!!</div>
            <div className="option">
              <input type="checkbox" name="opiv" id="op4"/>
              Option !V</div>
          </div>
    </>
   );
}
 
export default QuestionAnswer;
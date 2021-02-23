import React, {useRef} from 'react';

const Option = ({value, markedAnswers, qno, answers, options}) => {
  const markRef = useRef(null);
  const markAnswer = () => {
    console.log(markedAnswers);
    const check =  markRef.current.children;
    if (markRef.current.classList.contains("marked")){
      markRef.current.classList.remove("marked");
      check[0].checked = false;
      answers.delete(check[1].innerText);
    } else{
      markRef.current.classList.add("marked");
      check[0].checked = true;
      answers.add(check[1].innerText);
    }
    let tempAnswers = [...markedAnswers];
    let answerObj = {
      qno: answers
    }
    tempAnswers[qno] = answerObj;
    markedAnswers = [...tempAnswers];
    console.log(markedAnswers);
  }
  return ( 
    <div className="option" ref={markRef}  onClick={markAnswer}>
        <input type="checkbox" />
        <span>{value}</span>
    </div>
   );
}
 
export default Option;
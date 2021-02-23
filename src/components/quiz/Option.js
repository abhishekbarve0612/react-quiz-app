import React, {useEffect, useRef} from 'react';

const Option = ({value, markedAnswers, qno, answers, options}) => {
  const ref = useRef(null);
  const markAnswer = (e) => {
    console.log(markedAnswers);
    if (e.target.nodeName == "INPUT" || e.target.nodeName == "SPAN"){
      let parent = e.target.parentElement;
      let check = parent.children;
      if (parent.classList.contains("marked")){
          parent.classList.remove("marked");
          check[0].checked = false;
          markedAnswers[qno].delete(check[1].innerText);
        } else{
          parent.classList.add("marked");
          check[0].checked = true;
          markedAnswers[qno].add(check[1].innerText);
        }
    } else {
        let element = e.target;
        let check = e.target.children;
        if (element.classList.contains("marked")){
            element.classList.remove("marked");
            check[0].checked = false;
            markedAnswers[qno].delete(check[1].innerText);
          } else{
            element.classList.add("marked");
            check[0].checked = true;
            markedAnswers[qno].add(check[1].innerText);
          }
      console.log("Clicked on div element" + e.target.nodeName);
    }
    console.log(markedAnswers);
  }

  

  useEffect(() => {
    console.log(ref + " ======");
    if (ref){
      let element = ref.current;
      let check = element.children
      if (markedAnswers[qno].has(ref.current.innerText)) {
        element.classList.add("marked");
        check[0].checked = true;
        console.log("Answer is marked--" + ref.current.innerText);
      } else{
        element.classList.remove("marked");
        check[0].checked = false;
      }
      console.log(ref.current.innerText);
    } 
  });
  return ( 
    <div className="option" ref={ref}  value={value}   onClick={markAnswer}>
        <input type="checkbox"  />
        <span>{value}</span>
    </div>
   );
}
 
export default Option;
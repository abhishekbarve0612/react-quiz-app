import React, {useEffect, useRef} from 'react';

const Option = ({value, markedAnswers, checkIfMarked, qno, markAnswer}) => {

  const ref = useRef(null);
  

  

  useEffect(() => {
    if (ref){
      let element = ref.current;
      checkIfMarked(qno, value, element);
    }
  });
  return ( 
    <div className="option" ref={ref}  value={value}   onClick={(e) => {markAnswer(e, qno)}}>
        <input type="checkbox"  />
        <span dangerouslySetInnerHTML={{ __html: value}}></span>
    </div>
   );
}
 
export default Option;
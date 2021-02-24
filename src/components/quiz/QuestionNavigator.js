import { Link, useParams } from "react-router-dom";

const QuestionNavigator = () => {
  const urlParam = useParams();
  
  let urlArray = [];
  for (let i = 0; i < 10; i++) {
    const url = `/react-quiz-app/quiz/${urlParam.qid}/${i}`;
    urlArray.push(url);
  }
  return ( 
    <div className="question-navigator">
      {urlArray.map((url, key) => (
        <Link key={key} to={url}>
          <span>Question {key+1}</span>
        </Link>
      ))}
  </div>
 
   );
}
 
export default QuestionNavigator;
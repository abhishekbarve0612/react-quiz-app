import { Link } from "react-router-dom";

const QuestionNavigator = ({quiz}) => {
  const len = quiz['results'].length;
  let urlArray = [];
  for (let i = 0; i < len; i++) {
    const url = `/react-quiz-app/quiz/${i}`;
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
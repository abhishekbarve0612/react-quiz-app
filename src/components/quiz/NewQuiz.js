
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import useFetch from '../../customHooks/useFetch';
import { setQuiz, setCategory, setDifficulty, setQuestionCount, setGuestUser } from '../../redux';
import './style.css';
const NewQuiz = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { data: categoryData, isLoading, error} = useFetch("https://opentdb.com/api_category.php");
  const questionCount = useRef(null), user = useRef(null), difficulty = useRef(null); 
  let categories = [];
  if (categoryData){
    for (const obj of categoryData['trivia_categories']) {
    categories.push(obj.id);
  }
  console.log(categories);
}
  const generateNewQuiz = (event) => {
    event.preventDefault();
    console.log(difficulty.current.value);
    let difLevel = "";
    if (difficulty.current.value != ""){
      switch(difficulty.current.value){
        case "1":
          difLevel = "easy";
          break;
        case "2":
          difLevel = "medium";
          break;
        case "3":
          difLevel = "hard";
          break;
        default:
          difLevel = "";
          break;
      }
      
    } 
    if (difLevel != "") 
      dispatch(setDifficulty(difLevel));
    const cat = categories[Math.floor(Math.random() * categories.length)];
    dispatch(setCategory(cat));
    if (questionCount.current.value > 0) dispatch(setQuestionCount(questionCount.current.value));
    if (user.current.value != "") dispatch(setGuestUser(user.current.value));

    history.push(`/react-quiz-app/quiz/${cat}/0`);
  }

  return ( 
    <div className="for-guest-user">
        <form action="#" onSubmit={generateNewQuiz}>
          <div className="form-input">
          <label htmlFor="name">Name:</label>
          <input type="text" ref={user} name="name" id="name"  />
          </div>
          <div className="form-input">
          <label htmlFor="questionCount">Enter Question Count:</label>
          <input type="number" ref={questionCount} name="questionCount" id="questionCount"/>
          </div>
          <div className="form-input">
          <label for="cars">Select Difficulty Level:</label>
            <select ref={difficulty} name="difficulty" id="difficulty">
              <option value="1">Easy</option>
              <option value="2">Intermediate</option>
              <option value="3">Difficult</option>
            </select> 
          </div>
          <div className="form-buttons">
          <button type="submit">ATTEMPT QUIZ</button>
          <button type="reset">RESET</button>
          <button >GO BACK</button>
          </div>
        </form>
    </div>
   );
}
 
export default NewQuiz;
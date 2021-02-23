import React from 'react';
import QuizInfoCard from './QuizInfoCard';

const QuizList = () => {
  return ( 
    <div className="quiz-list-category">
    <div className="categories">
      <div>Abhishek</div>
      <div>Anime</div>
      <div>Movies</div>
      <div>Technology</div>
      <div>Sports</div>
    </div>
    <div className="quiz-list">
      <QuizInfoCard 
      name="Abhishek's Quiz" 
      creator="Abhishek"
      date="12-02-2022"
      attemptCount={32}
      topScorer="Abhishek Barve"
      />
      
      <QuizInfoCard 
      name="Abhishek's Quiz" 
      creator="Abhishek"
      date="12-02-2022"
      attemptCount={32}
      topScorer="Abhishek Barve"
      />
      
      <QuizInfoCard 
      name="Abhishek's Quiz" 
      creator="Abhishek"
      date="12-02-2022"
      attemptCount={32}
      topScorer="Abhishek Barve"
      />
      
      <QuizInfoCard 
      name="Abhishek's Quiz" 
      creator="Abhishek"
      date="12-02-2022"
      attemptCount={32}
      topScorer="Abhishek Barve"
      />
      
    </div>
   </div>
    );
}
 
export default QuizList;
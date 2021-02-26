import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../customHooks/useFetch';
import CategoryButton from './CategoryButton';
import QuizInfoCard from './QuizInfoCard';

const QuizList = () => {
  const { data: categoryData, isLoading, error} = useFetch("https://opentdb.com/api_category.php");
  let categories;
  if (categoryData) categories = categoryData['trivia_categories'];
  return ( 
    <>
    
    <div className="quiz-list-category">
      <CategoryButton categories={categories} flag={false} />
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
      
      
    </div>
   
    </>
    );
}
 
export default QuizList;
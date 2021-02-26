import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './style.css';
const CategoryButton = ({categories, flag}) => {
  const [viewAll, setViewAll] = useState(flag);
  const viewAllButton = () => {
    flag = !viewAll;
    setViewAll(flag);
    console.log("View All button");
  }
  if (viewAll){
    return (
      <>
        {categories && <div className="categories">
      {
        categories.map((category, key) => ( 
          <Link key={key} to={`/react-quiz-app/quiz/${category.id}/0`}>
            <span>{category.name}</span>
          </Link>
        ))
      }
      <a className="view-more-toggle" onClick={viewAllButton}>
            <span>View Less</span>
          </a>
    </div>}
    </>
    )
  }
  return ( 
    <>
        {categories && <div className="categories">
          <Link key={0} to={`/react-quiz-app/quiz/${categories[0]['id']}/0`} >
            <span>{categories[0]['name']}</span>
          </Link>
          <Link key={1} to={`/react-quiz-app/quiz/${categories[1]['id']}/0`} >
            <span>{categories[1]['name']}</span>
          </Link>
          <Link key={2} to={`/react-quiz-app/quiz/${categories[2]['id']}/0`} >
            <span>{categories[2]['name']}</span>
          </Link>
          <Link key={3} to={`/react-quiz-app/quiz/${categories[3]['id']}/0`} >
            <span>{categories[3]['name']}</span>
          </Link>
          <a className="view-more-toggle" onClick={viewAllButton}>
            <span>View All</span>
          </a>
    </div>}
    </>
   );
}
 
export default CategoryButton;
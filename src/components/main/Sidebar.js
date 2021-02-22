import React from 'react';
import './Main.css';
import RankerCard from './RankerCard';
const Sidebar = () => {
  return ( 
    <div className="sidebar">
      <h3>Our Top Rankers!!</h3>
      <RankerCard name="Abhishek" rank={1} />
      <RankerCard name="Abhi" rank={2} />
      <RankerCard name="Abhishek Barve" rank={3} />
      <RankerCard name="Abhishek" rank={4} />
    </div>
   );
}
 
export default Sidebar;
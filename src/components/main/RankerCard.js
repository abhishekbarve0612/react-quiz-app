import React from 'react';

const RankerCard = ({rank, name}) => {
  return ( 
    <div className="ranker">
      <div className="rank">
        <div>
        Rank: {rank}
        </div>
      </div>
      <div className="name">
        <div>
        {name}
        </div>
      </div>
    </div>
   );
}
 
export default RankerCard;
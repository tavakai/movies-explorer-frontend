import React from 'react';

const MoreButton = ({handleShowMoreItems}) => {
  return (
      <div className="MoreButton">
          <button className="MoreButton__btn" onClick={handleShowMoreItems} >Ещё</button>
      </div>
  );
}

export default MoreButton;
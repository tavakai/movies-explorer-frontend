import React from 'react';

const Line = ({modifierClass}) => {
  return (
    <hr className={`${modifierClass ? modifierClass : 'line'}`} />
  );
};

export default Line;
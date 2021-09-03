import React from 'react';

const SectionTitle = ({titleValue, modifierClass}) => {
  return (
    <h2 className={`${modifierClass ? modifierClass : 'section__title'}`}>{titleValue}</h2>
  );
};

export default SectionTitle;
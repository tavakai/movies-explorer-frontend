import React from "react";

const FilterCheckbox = ({handleFilterShortItems, checked}) => {
  return (
      <label className="FilterCheckbox__switch">
        <input type="checkbox" checked={checked} onClick={handleFilterShortItems} />
        <span className="FilterCheckbox__slider"></span>
        <span className="FilterCheckbox__text">Короткометражки</span>
      </label>
  );
};

export default FilterCheckbox;

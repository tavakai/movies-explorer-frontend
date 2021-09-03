import React from "react";

const FilterCheckbox = () => {
  return (
      <label className="FilterCheckbox__switch">
        <input type="checkbox" />
        <span className="FilterCheckbox__slider"></span>
        <span className="FilterCheckbox__text">Короткометражки</span>
      </label>
  );
};

export default FilterCheckbox;

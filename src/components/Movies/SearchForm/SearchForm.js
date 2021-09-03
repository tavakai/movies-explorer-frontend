import React from 'react';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';
import Line from '../../Line/Line';

const SearchForm = () => {
  return (
    <section className="searchForm">
      <div className="content searchForm__content">
        <form className="searchForm__form">
          <fieldset className="seacrhForm__fieldset">
            <input className="searchFrom__input" placeholder="Фильм" type="text" required />
            <button className="searchForm__btn" type="submit" >Поиск</button>
          </fieldset>
        </form>
        <FilterCheckbox />
        <Line modifierClass="line_silver" />
      </div>
    </section>
  );
}

export default SearchForm;
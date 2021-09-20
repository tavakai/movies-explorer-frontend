import React from 'react';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';
import Line from '../../Line/Line';

const SearchForm = ({search,inputForm,inputValue,handleFilterShortItems}) => {
  return (
    <section className="searchForm">
      <div className="searchForm__content">
        <form className="searchForm__form" onSubmit={(e) => {
          e.preventDefault();
          search();
        }}>
          <fieldset className="seacrhForm__fieldset">
            <input value={inputValue} onChange={inputForm} className="searchFrom__input" placeholder="Фильм" type="text" required />
            <button className="searchForm__btn" type="submit">Поиск</button>
          </fieldset>
        </form>
        <FilterCheckbox handleFilterShortItems={handleFilterShortItems} />
        <Line modifierClass="line_silver" />
      </div>
    </section>
  );
}

export default SearchForm;
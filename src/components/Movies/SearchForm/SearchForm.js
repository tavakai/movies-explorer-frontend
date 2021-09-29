import React, {useState} from 'react';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';
import Line from '../../Line/Line';

const SearchForm = ({search,inputForm,inputValue,handleFilterShortItems}) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const submitForm = (e) => {
    e.preventDefault();
    if(inputValue.match(/^\s*$/i)) {
      setErrorMessage("Нужно ввести ключевое слово")
    } else {
      setErrorMessage(null);
      search();
    }
  }
  return (
    <section className="searchForm">
      <div className="searchForm__content">
        <form className="searchForm__form" noValidate onSubmit={submitForm}>
          <fieldset className="seacrhForm__fieldset">
            <input
            value={inputValue}
            onChange={inputForm}
            className="searchFrom__input"
            placeholder="Фильм"
            type="text"
            name="search"
            />
            {errorMessage && (
              <span className="searchForm__error">{errorMessage}</span>
            )}
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
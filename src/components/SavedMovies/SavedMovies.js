import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList';
import Header from '../Header/Header';

const SavedMovies = ({
  loggedIn,
  loading,
  savedCards,
  removeCard,
  inputForm,
  inputValue,
  searchResults,
  handleFilterShortItems,
  search
}) => {
  return (
    <section className="movies">
    <Header loggedIn={loggedIn} />
      <div className="movies__content">
        <SearchForm search={search} inputForm={inputForm} inputValue={inputValue} handleFilterShortItems={handleFilterShortItems} />
        <SavedMoviesCardList
          loading={loading}
          cards={searchResults}
          savedCards={savedCards}
          removeCard={removeCard}
          />
      </div>
      <Footer />
    </section>
    
  )
}

export default SavedMovies;
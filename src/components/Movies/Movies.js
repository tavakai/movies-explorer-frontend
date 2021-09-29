import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Movies = ({
  loggedIn,
  loading,
  search,
  inputForm,
  searchResults,
  inputValue,
  showItem,
  handleShowMoreItems,
  handleFilterShortItems,
  saveCard,
  savedCards,
  removeCard,
  shortFilter
}) => {
  
  return (
    <section className="movies">
    <Header loggedIn={loggedIn} />
      <div className="movies__content">
        <SearchForm
          search={search}
          inputForm={inputForm}
          inputValue={inputValue}
          handleFilterShortItems={handleFilterShortItems} />
        <MoviesCardList
          cards={searchResults}
          loading={loading}
          showItem={showItem}
          handleShowMoreItems={handleShowMoreItems}
          savedCards={savedCards}
          saveCard={saveCard}
          removeCard={removeCard}
          shortFilter={shortFilter} />
      </div>
      <Footer />
    </section>
    
  )
}

export default Movies;
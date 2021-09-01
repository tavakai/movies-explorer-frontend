import React from 'react';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const SavedMovies = () => {
  const savedMovies = true;
  return (
    <section className="savedMovies">
      <div className="savesMovies__content">
      <Navigation />
      <SearchForm />
      <MoviesCardList savedMovies={savedMovies} />
      <Footer />
      </div>
    </section>
  )
}

export default SavedMovies;
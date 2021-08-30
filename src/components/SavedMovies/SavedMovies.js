import React from 'react';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SavedMovies = () => {
  const savedMovies = true;
  return (
    <section className="savedMovies">
      <div className="savesMovies__content">
      <Header />
      <SearchForm />
      <MoviesCardList savedMovies={savedMovies} />
      <Footer />
      </div>
    </section>
  )
}

export default SavedMovies;
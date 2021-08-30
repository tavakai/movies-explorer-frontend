import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Movies = () => {
  return (
    <section className="movies">
      <div className="movies__content">
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
      </div>
    </section>
  )
}

export default Movies;
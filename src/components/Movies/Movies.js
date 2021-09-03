import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const Movies = () => {
  return (
    <section className="movies">
      <div className="movies__content">
      <Navigation />
      <SearchForm />
      <MoviesCardList />
      <Footer />
      </div>
    </section>
  )
}

export default Movies;
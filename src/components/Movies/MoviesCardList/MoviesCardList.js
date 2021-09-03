import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({savedMovies}) => {
  return (
    <section className="MoviesCardList">
      <div className="content MoviesCardList__content">
        <MoviesCard likeActive="card__like_active" savedMovies={savedMovies} />
        <MoviesCard likeActive="card__like_active" savedMovies={savedMovies} />
        <MoviesCard likeActive="card__like_active" savedMovies={savedMovies} />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <div className={savedMovies ? 'MoviesCardList__more_hide' : 'MoviesCardList__more'}>
          <button className="MoviesCardList__more-btn">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
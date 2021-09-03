import React from 'react';
import movieImg from '../../../images/movie example.png';

const MoviesCard = ({likeActive,savedMovies}) => {
  return (
    <div className="card">
      <img className="card__img" src={movieImg} alt="movie" />
      <h2 className="card__title">Gimme Danger: История Игги и The Stooges</h2>
        <div className="card__likes">
          <button type="button" className={`card__like ${savedMovies ? "card__delete-icon" : likeActive}`} />
        </div>
      <hr className="card__line" />
      <span className="card__duration">1ч 42м</span>
    </div>
  );
}

export default MoviesCard;
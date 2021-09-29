import React from 'react';
import * as moviesApi from '../../../utils/MoviesApi';

const MoviesCard = ({card, removeCard, img}) => {
  const imageSavedCard = `${moviesApi.base_url}${img}`;
  const movieNameRU = card.nameRU;
  const movieLink = card.trailer;
  const mins = card.duration % 60;
  const hours = (card.duration - mins) / 60;
  const movieDuration = `${hours}ч  ${mins}м`;
  return (
    <div className="card">
      <a href={movieLink} className="card__link-img">
        <img className="card__img" src={imageSavedCard} alt={movieNameRU} />
      </a>
      <a href={movieLink} className="card__link-title" target="_blank" rel="noreferrer">
        <h2 className="card__title">{movieNameRU}</h2>
      </a>
        <div className="card__likes">
          <button onClick={() => removeCard(card)} type="button" className="card__delete-icon" />
        </div>
      <hr className="card__line" />
      <span className="card__duration">{movieDuration}</span>
    </div>
  );
}

export default MoviesCard;
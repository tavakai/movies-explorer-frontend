import React from 'react';
import * as moviesApi from '../../../utils/MoviesApi';
import * as mainApi from '../../../utils/MainApi';

const SavedMoviesCard = ({card, saveCard, savedCards, isSaved, removeCard}) => {
  const image = `${moviesApi.base_url}${card.image.url}`;
  const imageSavedCard = `${moviesApi.base_url}${card.image}`;
  const movieNameRU = card.nameRU;
  const movieLink = card.trailerLink;
  const mins = card.duration % 60;
  const hours = (card.duration - mins) / 60;
  const movieDuration = `${hours}ч  ${mins}м`;
  return (
    <div className="card">
      <a href={movieLink} className="card__link-img">
        <img className="card__img" src={image} alt={movieNameRU} />
      </a>
      <a href={movieLink} className="card__link-title" target="_blank" rel="noreferrer">
        <h2 className="card__title">{movieNameRU}</h2>
      </a>
        <div className="card__likes">
          <button onClick={
            isSaved ? _ => removeCard(isSaved._id) : _ => saveCard(card)
            } type="button" className={`card__like ${isSaved && "card__like_active"}`} />
        </div>
      <hr className="card__line" />
      <span className="card__duration">{movieDuration}</span>
    </div>
  );
}

export default SavedMoviesCard;
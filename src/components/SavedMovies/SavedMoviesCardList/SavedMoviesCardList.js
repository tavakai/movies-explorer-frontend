import React from 'react';
import Preloader from "../../Preloader/Preloader";
import NotResults from '../../Movies/NotResults/NotResults';
import MoviesCard from '../MoviesCard/MoviesCard';

const SavedMoviesCardList = ({
  loading,
  showItem,
  removeCard,
  savedCards
}) => {
  return (
    <section className="MoviesCardList">
      {loading ? (
          <Preloader />
        ) : (
          <div className="MoviesCardList__content">
            {savedCards.slice(0, showItem).map((card) => {
              return <MoviesCard
              key={card.id}
              card={card}
              removeCard={removeCard}
              cards={savedCards.find(item => item.id === card.id)}
              img={card.image}
              />;
            })}
          </div>
        )}
        {savedCards.length === 0 ? <NotResults /> : null}
    </section>
  );
}

export default SavedMoviesCardList;
import React, {useEffect,useState} from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from "../../Preloader/Preloader";
import MoreButton from '../MoreButton/MoreButton';
import NotResults from '../NotResults/NotResults';

const MoviesCardList = ({
  cards,
  loading,
  showItem,
  handleShowMoreItems,
  savedCards,
  saveCard,
  removeCard,
  cardLike
}) => {
  const [moreButton, setMoreButton] = useState(false);
  
  useEffect(() => {
    if (showItem < cards.length) {
          setMoreButton(true);
        } else {
          setMoreButton(false);
        }
  }, [showItem, cards.length])
  return (
    <section className="MoviesCardList">
      {loading ? (
          <Preloader />
        ) : (
          <div className="MoviesCardList__content">
            {cards.slice(0, showItem).map((card) => {
              return <MoviesCard
              key={card.id}
              card={card}
              isSaved={savedCards.find(movie => 
                card.id === movie.id
              )}
              saveCard={saveCard}
              removeCard={removeCard}
              cardLike={cardLike}
              />;
            })}
          </div>
        )}
        {cards.length === 0 ? <NotResults /> : null}
        
        {moreButton ? <MoreButton handleShowMoreItems={handleShowMoreItems} /> : null}
    </section>
  );
}

export default MoviesCardList;
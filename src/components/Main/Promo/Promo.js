import React from 'react';
import promo__icon from '../../../images/intro-background-icon.png';

const Promo = () => {
  return (
    <section className="promo">
      <div className="content promo__content">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <img className="promo__icon" src={promo__icon} alt="background-logo" />
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      </div>
    </section>
  );
};

export default Promo;
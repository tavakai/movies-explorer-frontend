import React from 'react';
import Line from '../../Line/Line.js';
import arrowIcon from '../../../images/portfolio_arrow-icon.svg';
import SectionTitle from '../../SectionTitle/SectionTitle.js';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="content portfolio__content">
        <SectionTitle modifierClass="section__title_portfolio" titleValue="Портфолио" />
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a className="portfolio__item-link" href="https://tavakai.github.io/how-to-learn/">
              <span className="portfolio__text">Статичный сайт</span>
            </a>
            <img className="portfolio__icon" src={arrowIcon} alt="arrow icon" />
          </li>
          <Line modifierClass="line line_gray" />
          <li className="portfolio__item">
            <a className="portfolio__item-link" href="https://tavakai.github.io/russian-travel/index.html" >
              <span className="portfolio__text">Адаптивный сайт</span>
            </a>
            <img className="portfolio__icon" src={arrowIcon} alt="arrow icon" />
          </li>
          <Line modifierClass="line line_gray" />
          <li className="portfolio__item">
            <a className="portfolio__item-link" href="https://mesto.tavakaiam.nomoredomains.work/">
              <span className="portfolio__text">Одностраничное приложение</span>
            </a>
            <img className="portfolio__icon" src={arrowIcon} alt="arrow icon" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio;
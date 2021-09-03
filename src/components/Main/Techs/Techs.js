import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle.js';
import Line from '../../Line/Line.js';

const Techs = () => {
  return (
    <section className="techs">
      <div className="content techs__content">
        <SectionTitle titleValue="Технологии" />
        <Line />
        <div className="techs__technology">
          <h2 className="techs__title">7 технологий</h2>
          <p className="techs__subtitle">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className="techs__section">
            <li className="techs__section-item">
              <span className="techs__section-item_text">HTML</span>
            </li>
            <li className="techs__section-item">
              <span className="techs__section-item_text">CSS</span>
            </li>
            <li className="techs__section-item">
              <span className="techs__section-item_text">JS</span>
            </li>
            <li className="techs__section-item">
              <span className="techs__section-item_text">React</span>
            </li>
            <li className="techs__section-item">
              <span className="techs__section-item_text">Git</span>
            </li>
            <li className="techs__section-item">
              <span className="techs__section-item_text">Express.js</span>
            </li>
            <li className="techs__section-item">
              <span className="techs__section-item_text">mongoDB</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;
import React from "react";
import SectionTitle from '../../SectionTitle/SectionTitle.js';
import aboutMeImage from "../../../images/aboutMeImage.png";
import Line from '../../Line/Line.js';

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <div className="content aboutMe__content">
        <SectionTitle titleValue="Студент" />
        <Line />
        <div className="aboutMe__profile">
            <h2 className="aboutMe__name">Виталий</h2>
            <h3 className="aboutMe__job">Фронтенд-разработчик, 30 лет</h3>
            <p className="aboutMe__description">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <ul className="aboutMe__social">
              <li className="aboutMe__social-item">
                <a className="aboutMe__social-item_link" href="https://www.facebook.com/amyrga.tavakai" target="_blank" rel="noopener noreferrer" alt="social link">Facebook</a>
              </li>
              <li className="aboutMe__social-item">
                <a className="aboutMe__social-item_link" href="https://github.com/tavakai" target="_blank" rel="noopener noreferrer" alt="social link">Github</a>
              </li>
            </ul>
            <img className="aboutMe__img" src={aboutMeImage} alt="my avatar" />
          </div>
      </div>
    </section>
  );
};

export default AboutMe;

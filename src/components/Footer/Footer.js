import React from "react";
import Line from '../Line/Line.js';

const Footer = () => {
  return (
    <section className="footer">
      <div className="content footer__content">
        <p className="footer__caption">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <Line modifierClass="line_gray" />
        <ul className="footer__social-list">
          <li className="footer__social-item footer__social-item_сopyright">
            <span className="footer__social-link footer__social-link_сopyright">© 2020</span>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link" href="https://practicum.yandex.ru/" target="_blank" rel="noopener noreferrer" alt="Yandex.Practikum" >Яндекс.Практикум</a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link" href="https://github.com/tavakai" target="_blank" rel="noopener noreferrer" alt="Github" >Github</a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" alt="Facebook" >Facebook</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;

import logo from "../../images/logo.png";
import React from "react";
import btn_icon from "../../images/icon__COLOR_icon-main.svg";

const Navigation = () => {
  return (
    <nav className="nav content">
      <a href="/" className="nav__logo">
        <img className="nav__logo-main" src={logo} alt="header-logo" />
      </a>
      <input id="nav__menu-toggle" type="checkbox" />
        <label className="nav__menu-btn" htmlFor="nav__menu-toggle">
          <span></span>
        </label>
      <ul className="nav__bar">
        <li className="nav__item nav__item_first">
          <a className="nav__link" href="/">
            Главная
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link nav__link_active" href="/movies">
            Фильмы
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/saved-movies">
            Сохраненные фильмы
          </a>
        </li>
        <li className="nav__item nav__item_login">
        <form action="/profile" name="profile-btn">
          <button className="nav__btn">
          Аккаунт
          <div className="nav__icon-wrapper">
            <img className="nav__btn-icon" src={btn_icon} alt="icon-login" />
          </div>
        </button>
      </form>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

import logo from "../../images/logo.png";
import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import btn_icon from "../../images/icon__COLOR_icon-main.svg";

const Navigation = () => {
  const [isMain, setIsMain] = useState(false);
  const location = useLocation();
  useEffect(() => {
    location.pathname !== "/" ? setIsMain(false) : setIsMain(true)
  }, [location])
  return (
    <nav className="nav">
      <Link to="/" className="nav__logo">
        <img className="nav__logo-main" src={logo} alt="header-logo" />
      </Link>
      <input id="nav__menu-toggle" type="checkbox" />
        <label className="nav__menu-btn" htmlFor="nav__menu-toggle">
          <span></span>
        </label>
      <ul className="nav__bar">
        <li className="nav__item nav__item_first">
          <NavLink to="/" className={`nav__link ${isMain && "nav__link_white"}`} activeClassName="nav__link_active" href="/">
            Главная
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/movies" className={`nav__link ${isMain && "nav__link_white"}`} activeClassName="nav__link_active" href="/movies">
            Фильмы
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/saved-movies" className={`nav__link ${isMain && "nav__link_white"}`} activeClassName="nav__link_active" href="/saved-movies">
            Сохраненные фильмы
          </NavLink>
        </li>
        <li className="nav__item nav__item_login">
          <NavLink className="nav__btn" to="/profile">
          Аккаунт
          <div className="nav__icon-wrapper">
            <img className="nav__btn-icon" src={btn_icon} alt="icon-login" />
          </div>
        </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

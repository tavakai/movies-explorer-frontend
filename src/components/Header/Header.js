import logo from "../../images/logo.png";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Header = ({ loggedIn }) => {
  const location = useLocation();
  function checkLoggedin() {
    if (
      (loggedIn && location.pathname === "/") ||
      (!loggedIn && location.pathname === "/")
    ) {
      return `header`;
    } else if (loggedIn && location.pathname !== "/") {
      return `header header_bgWhite`;
    }
  }
  return (
    <section className={checkLoggedin()}>
      {loggedIn ? (
        <Navigation />
      ) : (
        <div className="header__content">
          <a href="/" className="header__logo">
            <img className="header__logo-main" src={logo} alt="header-logo" />
          </a>
          <div className="header__buttons">
            <NavLink to="/signup" className="header__signup">
              Регистрация
            </NavLink>
            <NavLink to="/signin" className="header__signin-btn">
              Войти
            </NavLink>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;

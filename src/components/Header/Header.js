import logo from '../../images/logo.png';
import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = ({loggedIn}) => {
  // Если пользователь залогинен
  loggedIn = false;
  return (
    <section className={`${loggedIn ? 'header_bgWhite' : 'header'}`}>
      <div className="content">
{loggedIn ? (
        <Navigation />
      ) : (
        <div className="header__content">
          <a href="/" className="header__logo">
            <img className="header__logo-main" src={logo} alt="header-logo" />
          </a>
          <div className="header__buttons">
            <a href="/signup" className="header__signup">Регистрация</a>
            <form action="/signin" className="header__signin">
              <button className="header__signin-btn">Войти</button>
            </form>
          </div>
        </div>
      )}
      </div>
      
    </section>
  );
}

export default Header;
import React from 'react';
import logo from '../../images/logo.png'

const Login = () => {
  return (
    <section className="login">
        <div className="content login__content">
          <form action="#" name="login" className="login__form">
            <a href="/" className="login__logo">
            <img src={logo} className="login__logo-img" alt="logo" />
            </a>
            <fieldset className="login__fieldset">
              <legend>
                <h2 className="login__title">Рады видеть!</h2>
              </legend>
              <p className="login__input-title">E-mail</p>
              <input type="email" className="login__input login__input_email" required placeholder="Введите email" autoComplete="username" />
              <p className="login__input-title">Пароль</p>
              <input type="password" className="login__input login__input_password" required placeholder="Введите пароль" autoComplete="current-password" />
              <p className="login__input-error">Что-то пошло не так...</p>
            </fieldset>
            <button type="submit" className="login__btn">Войти</button>
          </form>
          <span className="login__signup-text">Ещё не зарегистрированы?&nbsp;
            <a href="/signup" className="login__signup-btn">Регистрация</a>
          </span>
        </div>
    </section>
  )
}

export default Login;
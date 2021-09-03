import React from 'react';
import logo from '../../images/logo.png'

const Register = () => {
  return (
    <section className="register">
        <div className="content register__content">
          <form action="#" name="register" className="register__form">
            <a href="/" className="register__logo">
              <img src={logo} className="register__logo-img" alt="logo" />
            </a>
            <fieldset className="register__fieldset">
              <legend>
                <h2 className="register__title">Добро пожаловать!</h2>
              </legend>
              <p className="register__input-title">Имя</p>
              <input type="text" className="register__input register__input_name" required placeholder="Введите имя" />
              <p className="register__input-title">E-mail</p>
              <input type="email" className="register__input register__input_email" required placeholder="Введите email" autoComplete="username" />
              <p className="register__input-title">Пароль</p>
              <input type="password" className="register__input register__input_password" required placeholder="Введите пароль" autoComplete="current-password" />
              <p className="register__input-error">Что-то пошло не так...</p>
            </fieldset>
            <button type="submit" className="register__btn">Зарегистрироваться</button>
          </form>
          <span className="register__signin-text">Уже зарегистрированы?&nbsp;
            <a href="/signin" className="register__signin-btn">Войти</a>
          </span>
        </div>
    </section>
  )
}

export default Register;
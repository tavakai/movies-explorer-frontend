import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import Modal from '../Modal/Modal';

const Login = ({handleSubmit, responseStatus, modal}) => {
  const [userEmail, setUserEmail] = useState({
    email: "",
  });
  const [userPassword, setUserPassword] = useState({
    password: "",
  });
  const handleChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setUserPassword(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    handleSubmit({
      email: userEmail,
      password: userPassword,
    });
  };
  return (
    <section className="login">
        <div className="content login__content">
          <form action="#" name="login" className="login__form" onSubmit={submit}>
            <a href="/" className="login__logo">
            <img src={logo} className="login__logo-img" alt="logo" />
            </a>
            <fieldset className="login__fieldset">
              <legend>
                <h2 className="login__title">Рады видеть!</h2>
              </legend>
              <p className="login__input-title">E-mail</p>
              <input
              type="email"
              className="login__input login__input_email"
              required
              placeholder="Введите email"
              autoComplete="username"
              onChange={handleChangeEmail}
              />
              <p className="login__input-title">Пароль</p>
              <input
              type="password"
              className="login__input login__input_password"
              required
              placeholder="Введите пароль"
              autoComplete="current-password"
              onChange={handleChangePassword}
              />
              {/* <p className="login__input-error">Что-то пошло не так...</p> */}
            </fieldset>
            <button type="submit" className="login__btn">Войти</button>
          </form>
          <span className="login__signup-text">Ещё не зарегистрированы?&nbsp;
            <Link to="/signup" className="login__signup-btn">Регистрация</Link>
          </span>
        </div>
        <Modal isActive={modal} responseStatus={responseStatus} />
    </section>
  )
}

export default Login;
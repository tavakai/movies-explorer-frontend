import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import Modal from '../Modal/Modal';

const Register = ({handleSubmit, modal, responseStatus}) => {
  const [isValid, setIsValid] = useState(false);
  const [userName, setUserName] = useState({
    name: "",
  });
  const [userEmail, setUserEmail] = useState({
    email: "",
  });
  const [userPassword, setUserPassword] = useState({
    password: "",
  });
  const handleChangeName = (e) => {
    setUserName(e.target.value);
  };
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
      name: userName,
      password: userPassword,
    });
  };
  return (
    <section className="register">
        <div className="content register__content">
          <form action="#" name="register" className="register__form" onSubmit={submit} >
            <a href="/" className="register__logo">
              <img src={logo} className="register__logo-img" alt="logo" />
            </a>
            <fieldset className="register__fieldset">
              <legend>
                <h2 className="register__title">Добро пожаловать!</h2>
              </legend>
              <p className="register__input-title">Имя</p>
              <input
              type="text"
              className="register__input register__input_name"
              required
              placeholder="Введите имя"
              onChange={handleChangeName}
              minLength="2"
              maxLength="30"
              />
              <p className="register__input-title">E-mail</p>
              <input
              type="email"
              className="register__input register__input_email"
              required
              placeholder="Введите email"
              autoComplete="username"
              onChange={handleChangeEmail}
              />
              <p className="register__input-title">Пароль</p>
              <input
              type="password"
              className="register__input register__input_password"
              required placeholder="Введите пароль"
              autoComplete="current-password"
              onChange={handleChangePassword}
              />
            </fieldset>
            <button type="submit" disabled className="register__btn">Зарегистрироваться</button>
          </form>
          <span className="register__signin-text">Уже зарегистрированы?&nbsp;
            <Link to="/signin" className="register__signin-btn">Войти</Link>
          </span>
        </div>
        <Modal isActive={modal} responseStatus={responseStatus} />
    </section>
  )
}

export default Register;
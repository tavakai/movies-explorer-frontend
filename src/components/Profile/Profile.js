import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Profile = ({profileEditFn, signOut, loggedIn}) => {
  const contextUser = React.useContext(CurrentUserContext);
  const [userName, setUserName] = useState(contextUser.name);
  const [userEmail, setEmail] = useState(contextUser.email);
  const [editing, setEditing] = useState(false);
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handleSubmitForm = (e) => {
    e.preventDefault();
    profileEditFn({
      name: userName,
      email: userEmail
    })
  }
  const handleEditProfile = (e) => {
    e.preventDefault();
    setEditing(true);
  }
  const cancelEditing = (e) => {
    e.preventDefault();
    setEditing(false);
  }
  useEffect(() => {
    contextUser.name !== undefined && setUserName(contextUser.name);
    contextUser.email !== undefined && setEmail(contextUser.email);
  }, [contextUser]);
  return (
    <>
    <Header loggedIn={loggedIn} />
    <section className="profile">
      <div className="profile__content">
        <form action="#" className="profile__form" id="profile__edit" onSubmit={handleSubmitForm}>
          <fieldset className="profile__fieldset">
            <legend className="profile__legend">
              <h2 className="profile__title">Привет, {contextUser.name}</h2>
            </legend>
            <div className="profile__inputs">
              <span className="profile__input-title">Имя</span>
              <input
                type="text"
                className="profile__input profile__input_name"
                name="Имя"
                placeholder="Введите имя"
                value={userName}
                onChange={handleUserNameChange} />
              <hr className="profile__line" />
              <span className="profile__input-title">E-mail</span>
              <input
                type="email"
                className="profile__input profile__input_email"
                placeholder="Введите почту"
                value={userEmail}
                onChange={handleEmailChange} />
            </div>
          </fieldset>
          <span className="profile__notification-text">При обновлении профиля произошла ошибка.</span>
          {editing ? (
            <>
              <button className="profile__btn_submit" type="submit" form="profile__edit">Сохранить</button>
              <button
                className={`${!editing ? "profile__signout_hide" : "profile__signout_show"}`}
                type="button"
                onClick={cancelEditing}>
                Отменить
              </button>
            </>
          ) : (
            <button className="profile__btn" type="button" onClick={handleEditProfile}>Редактировать</button>
          )}
          <button
            className={`${editing ? "profile__signout_hide" : "profile__signout_show"}`}
            type="button"
            onClick={signOut}>
            Выйти из аккаунта
          </button>
        </form>

      </div>
    </section>
    </>
  )
}

export default Profile;
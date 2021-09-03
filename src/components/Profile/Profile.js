import React from 'react';
import Navigation from '../Navigation/Navigation';

const Profile = () => {
  return (
    <section className="profile">
      <Navigation />
        <div className="content profile__content">
          <form action="#" className="profile__form" id="profile__edit">
            <fieldset className="profile__fieldset">
              <legend className="profile__legend">
                <h2 className="profile__title">Привет, Виталий</h2>
              </legend>
              <div className="profile__inputs">
                <span className="profile__input-title">Имя</span>
                <input type="text" className="profile__input profile__input_name" name="Имя" placeholder="Введите имя" />
                <hr className="profile__line" />
                <span className="profile__input-title">E-mail</span>
                <input type="email" className="profile__input profile__input_email" placeholder="Введите почту" />
              </div>
            </fieldset>
            <span className="profile__notification-text">При обновлении профиля произошла ошибка.</span>
            <button className="profile__btn" type="submit" form="profile__edit">Редактировать</button>
          </form>
          <button className="profile__signout">Выйти из аккаунта</button>
          <div className="profile__notification">
          </div>
        </div>
    </section>
  )
}

export default Profile;
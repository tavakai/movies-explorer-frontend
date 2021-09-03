import React from 'react';

const NotFoundPage = () => {
  return (
    <section className="NotFoundPage">
      <div className="content NotFoundPage__content">
        <p className="NotFoundPage__error">404</p>
        <p className="NotFoundPage__text">Страница не найдена</p>
        <a href="/" className="NotFoundPage__btn-back">Назад</a>
      </div>
    </section>
  )
}

export default NotFoundPage;
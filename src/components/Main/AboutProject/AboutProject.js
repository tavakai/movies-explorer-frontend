import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import Line from '../../Line/Line';

const AboutProject = () => {
  return (
    <section className="aboutproject" id="aboutproject">
        <div className="content aboutproject__content">
        <SectionTitle titleValue="О проекте" />
      <Line />
          <div className="aboutproject__text">
          <h2 className="aboutproject__subtitle">Дипломный проект включал 5 этапов</h2>
          <h2 className="aboutproject__subtitle aboutproject__subtitle__second">На выполнение диплома ушло 5 недель</h2>
          <p className="aboutproject__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className="aboutproject__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        <div className="aboutproject__progress">
          <div className="aboutproject__progress-backend">
            <span className="aboutproject__progress-backend_text">1 неделя</span>
          </div>
          <div className="aboutproject__progress-frontend">
            <span className="aboutproject__progress-frontend_text">4 недели</span>
          </div>
        </div>
        <div className="aboutproject__progress-subtitle">
          <p className="aboutproject__progress-subtitle_backend">Back-end</p>
          <p className="aboutproject__progress-subtitle_frontend">Front-end</p>
        </div>
        </div>
    </section>
  )
}
export default AboutProject;
import Promo from "./Promo/Promo.js";
import Header from "../Header/Header.js";
import React from 'react';
import NavTab from "./NavTab/NavTab.js";
import AboutProject from './AboutProject/AboutProject.js';
import Techs from './Techs/Techs.js';
import AboutMe from './AboutMe/AboutMe.js';
import Portfolio from './Portfolio/Portfolio.js';
import Footer from '../Footer/Footer.js';

const Main = ({loggedIn, modal, responseStatus}) => {
  return (
    <main className="main">
      <Header loggedIn={loggedIn} modal={modal} responseStatus={responseStatus} />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
    )
}

export default Main;
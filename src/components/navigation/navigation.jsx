import React, { useState } from "react";
import s from "./navigation.module.scss";
import hamburger from "../../assets/images/svg/icon-hamburger.svg";
import logo from "../../assets/images/svg/logo-bookmark.svg";

import { MobileMenu } from "../menuMobile/menuMobile";

export const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen ? (
        <div>
          <div>
            <MobileMenu closeModal={closeModal} />
          </div>
        </div>
      ) : (
        <div className={s.display}>
          <img src={logo} alt="Logo" />
          <button className={s.btn} onClick={openModal}>
            <img src={hamburger} alt="Burger" />
          </button>
        </div>
      )}

      <div className={s.navdesktop}>
        <div>
          <img src={logo} alt="logo"></img>
        </div>
        <div>
          <a className={s.features} href="#features">
            Features
          </a>
          <a className={s.pricing} href="#download">
            Pricing
          </a>
          <a className={s.contact} href="#contact">
            Contact
          </a>
          <button className={s.btn}>Login</button>
        </div>
      </div>
    </div>
  );
};

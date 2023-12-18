import s from "./menuMobile.module.scss";

import logo2 from "../../assets/images/svg/logo-bookmark2.svg";

import close from "../../assets/images/svg/icon-close.svg";
import twitter from "../../assets/images/svg/icon-twitter.svg";
import facebook from "../../assets/images/svg/icon-facebook.svg";
export const MobileMenu = ({ closeModal }) => {
  return (
    <>
      <div className={s.bg}>
        <div className={s.firstlane}>
          <a href="#main">
            <img className={s.logo} src={logo2} alt="logo"></img>
          </a>
          <img
            className={s.close}
            src={close}
            alt="closebutton"
            onClick={closeModal}
          ></img>
        </div>
        <div>
          <a href="#features" className={s.features}>
            Features
          </a>
          <a href="#download" className={s.pricing}>
            Pricing
          </a>
          <a href="#contact" className={s.contact}>
            contact
          </a>
          <button className={s.login}>Login</button>
        </div>
        <div className={s.positionsocial}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={s.icon} src={facebook} alt="logofacebook" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={s.icon} src={twitter} alt="logotwitter" />
          </a>
        </div>
      </div>
    </>
  );
};

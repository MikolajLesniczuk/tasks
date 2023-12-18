import s from "./footer.module.scss";
import logo from "../../assets/images/svg/logo-bookmark2.svg";
import twitter from "../../assets/images/svg/icon-twitter.svg";
import facebook from "../../assets/images/svg/icon-facebook.svg";

export const Footer = () => {
  return (
    <>
      <div className={s.bg}>
        <div className={s.width}>
          <div className={s.content}>
            <a href="#main" className={s.logo}>
              <img src={logo} alt="logo"></img>
            </a>
            <a className={s.link} href="#features">
              Features
            </a>
            <a className={s.link} href="#download">
              Pricing
            </a>
            <a className={s.link} href="#contact">
              Contact
            </a>
          </div>

          <div>
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
        </div>
      </div>
    </>
  );
};

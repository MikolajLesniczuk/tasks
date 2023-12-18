import s from "./hero.module.scss";
import heroimg from "../../assets/images/svg/illustration-hero.svg";
export const Hero = () => {
  return (
    <div className={s.position}>
      <img className={s.imghero} src={heroimg} alt="hero"></img>
      <div className={s.bgcircle}></div>
      <div className={s.box}>
        <h1 id="main" className={s.title}>
          A Simple Bookmark Manager
        </h1>
        <p className={s.desc}>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className={s.btn_position}>
          <button className={`${s.btn_chrome} ${s.btn}`}>
            Get it on Chrome
          </button>
          <button className={`${s.btn_firefox} ${s.btn}`}>
            Get it on Firefox
          </button>
        </div>
      </div>
    </div>
  );
};

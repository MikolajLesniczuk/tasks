import s from "./download.module.scss";
import firefox from "../../assets/images/svg/logo-firefox.svg";
import chrome from "../../assets/images/svg/logo-chrome.svg";
import opera from "../../assets/images/svg/logo-opera.svg";

export const Download = () => {
  const data = [
    {
      img: chrome,
      title: "Add to Chrome",
      ver: "Minimum version 62",
    },
    {
      img: firefox,
      title: "Add to Firefox",
      ver: "Minimum version 55",
    },
    {
      img: opera,
      title: "Add to Opera",
      ver: "Minimum version 46",
    },
  ];

  return (
    <div>
      <h2 id="download" className={s.title}>
        Download the extension
      </h2>
      <p className={s.desc}>
        We`ve got more browsers in the pipeline. Please do let us know if you`ve
        got a favourite you`d like us to prioritize
      </p>
      <div className={s.boxPosition}>
        {data.map((el, index) => (
          <div className={s.box} key={index}>
            <img className={s.img} src={el.img} alt="img"></img>
            <div className={s.ttl}>{el.title} </div>
            <div className={s.ver}>{el.ver}</div>
            <div className={s.bgimg}></div>
            <button className={s.btn}>Add & Install Extension</button>
          </div>
        ))}
      </div>
    </div>
  );
};

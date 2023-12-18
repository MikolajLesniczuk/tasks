import React, { useState } from "react";
import s from "./features.module.scss";
import img1 from "../../assets/images/svg/illustration-features-tab-1.svg";
import img2 from "../../assets/images/svg/illustration-features-tab-2.svg";
import img3 from "../../assets/images/svg/illustration-features-tab-3.svg";

export const Features = () => {
  const data = [
    {
      title: "Simple Bookmarking",
      main: "Bookmark in one click",
      desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you ,manage your favourite sites.",
      img: img1,
    },
    {
      title: "Speedy Searching",
      main: "Intelligent search",

      desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl throught all of your bookmarks.",
      img: img2,
    },
    {
      title: "Easy Sharing",
      main: "Share your bookmarks",
      desc: "Easily share your bookmarks and collections with others. Create a shearable link that you can send at the click of a button.",
      img: img3,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };

  return (
    <div>
      <h2 id="features" className={s.title}>
        Features
      </h2>
      <p className={s.info}>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <div className={s.position}>
        {data.map((el, index) => (
          <div
            key={index}
            className={`${s.category} ${
              selectedCategory === index ? s.selectedCategory : ""
            }`}
            onClick={() => handleCategoryClick(index)}
          >
            {el.title}
          </div>
        ))}
      </div>
      <div>
        {selectedCategory !== null && (
          <div className={s.flex}>
            <div>
              <img
                className={s.photo}
                src={data[selectedCategory].img}
                alt="img"
              ></img>
              <div className={s.bgCircle}></div>
            </div>
            <div className={s.box}>
              <h1 className={s.main}> {data[selectedCategory].main}</h1>
              <div className={s.desc}>{data[selectedCategory].desc} </div>
              <button className={s.btn}>More info</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

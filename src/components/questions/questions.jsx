import React, { useState } from "react";
import s from "./questions.module.scss";
import arrow from "../../assets/images/svg/icon-arrow.svg";
import arrow2 from "../../assets/images/svg/icon-arrow2.svg";

const Question = ({ question, description }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const arrowIcon = isDescriptionVisible ? arrow2 : arrow;

  return (
    <>
      <div className={s.flex}>
        <p className={s.question}>{question}</p>
        <img
          onClick={toggleDescription}
          className={s.arrow}
          src={arrowIcon}
          alt="img"
        ></img>
      </div>
      <div>
        {isDescriptionVisible && (
          <div className={s.description}>{description}</div>
        )}
      </div>
    </>
  );
};

export const Questions = () => {
  return (
    <div className={s.box}>
      <div className={s.title}>Frequently Asked Questions</div>
      <p className={s.desc}>
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>

      <Question
        question="What is Bookmark?"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
      <Question
        question="How can I request a new browser?"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
      <Question
        question="Is there a mobile app?"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
      <Question
        question="What about other Chromium browsers?"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />

      <button className={s.btn}>More Info</button>
    </div>
  );
};

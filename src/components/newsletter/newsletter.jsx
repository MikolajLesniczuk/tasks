import React, { useState, useEffect } from "react";
import s from "./newsletter.module.scss";

const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const Newsletter = () => {
  const [count, setCount] = useState(35000);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleButtonClick = () => {
    if (!email || !email.includes("@")) {
      setError("The email address must contain @ and cannot be empty");
      return;
    }
    setError("");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => Math.max(0, prevCount - Math.ceil(35000 / 2000)));
    }, 10);

    setTimeout(() => {
      clearInterval(intervalId);
    }, 20000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="contact" className={s.bg}>
      <div className={s.count}>{formatNumber(count)} + Already Joined</div>
      <div className={s.stay}>Stay up-to-date with what we`re doing</div>
      <div className={s.flex}>
        <input
          className={s.input}
          placeholder="Enter your email address"
          value={email}
          onChange={handleInputChange}
        ></input>
        {error && <div className={s.error}>{error}</div>}

        <button className={s.btn} onClick={handleButtonClick}>
          Contact us
        </button>
      </div>
      {error && <div className={s.errorDesktop}>{error}</div>}
    </div>
  );
};

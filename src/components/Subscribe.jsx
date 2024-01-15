import React from "react";

import icon from "../assets/tg.svg";

import blure from "../assets/subscribe-blure1.svg";
import blure1 from "../assets/subscribe-blure2.svg";

export const Subscribe = () => {
  return (
    <div className="subscribe">
      <img className="subscribe__blure1" src={blure} alt="blure" />
      <img className="subscribe__blure2" src={blure1} alt="blure" />

      <h2 className="subscribe-title">Subscribe to get the Latest News</h2>
      <p className="subscribe-text">
        We recommended you to subscribe to our newspaper,drop your email below
        to get daily update about us
      </p>
      <form className="subscribe__form">
        <label htmlFor="">
          <div className="input-container">
            <input
              className="subscribe__input"
              type="email"
              name=""
              id=""
              placeholder="Enter your email addres"
            />
            <button className="btn subscribe__btn">
            <img src={icon} alt="tg" />
            Subscribe
          </button>
          </div>
          
        </label>
      </form>
    </div>
  );
};

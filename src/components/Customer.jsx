import React from "react";

import cusimg from "../assets/customer-img.png";

import blure from "../assets/custom-blure.svg";

export const Customer = () => {
  return (
    <div className="customer">
      <img className="customer__blure1" src={blure} alt="blure" />
      <div className="customer__info">
        <h2 className="customer__info-title">
          We complete every project extra care as customer need
        </h2>
        <p className="customer__info-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
          dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
          amet convallis nuncoe scelerisque in. orem ipsum dolor sit amet,
          consectetur adipisicing elit. Labore eius molestiae facere, natus
          reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit
          laborum iure inventore possimus laboriosam qui nam.
        </p>
        <button className="btn customer__btn">Read more</button>
      </div>
      <img className="customer__img" src={cusimg} alt="" />
    </div>
  );
};

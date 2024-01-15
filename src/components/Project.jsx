import React from "react";

import projimg from "../assets/project-img.png";

import blure from "../assets/project-blure.svg";



export const Project = () => {
  return (
    <div className="project">
      <img className="project__img" src={projimg} alt="project-img" />

      {/* blure */}
      <img className="project__blure1" src={blure} alt="blure" />

      <div className="project__info">
        <h2 className="project__info-title">
          We complete every projects extra care as customer need
        </h2>
        <p className="project__info-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
          dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
          amet convallis nuncoe scelerisque in. orem ipsum dolor sit amet,
          consectetur adipisicing elit. Labore eius molestiae facere, natus
          reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit
          laborum iure inventore possimus laboriosam qui nam.
        </p>
        <button className="btn project__btn">Read more</button>
      </div>
    </div>
  );
};

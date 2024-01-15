import React from "react";

import prof from '../data'

import icon from "../assets/manager.svg"
import arrow from "../assets/arrow.svg"

import blure from "../assets/service-blure.svg"
import blure1 from "../assets/service-blure-bottom.svg"
import blure2 from "../assets/service-blure-right.svg"

function Profesions (prof) {
    return (
        <div className="service__card">
            <div className="service__card-icon">
            <img src={icon} alt="icon" />
            </div>
            <h3 className="service__card-title">{prof.title}</h3>
            <p className="service__card-text">{prof.text}</p>
            <a className="service__card-btn" href="/">
                {prof.link}
                <img src={arrow} alt="arrow" />
            </a>
        </div>
    )
}

export const Service = () => {
  return (
    <div className="service">
      <h2 className="service__info-title">Our Service</h2>
      <p className="service__info-text">
        We turn information into actionable insights We work to understand your
        issues and are driven to ask better questions in the pursuit of making
        work.
      </p>
      <div className="service-list">
        <img className="service__blure1" src={blure} alt="blure" />
        <img className="service__blure2" src={blure} alt="blure" />
        <img className="service__blure3" src={blure1} alt="blure" />
        <img className="service__blure4" src={blure2} alt="blure" />
      <Profesions {...prof[0]}/>
      <Profesions {...prof[1]}/>
      <Profesions {...prof[2]}/>
      <Profesions {...prof[3]}/>
      <Profesions {...prof[4]}/>
      <Profesions {...prof[5]}/>
      </div>
    </div>
  );
};

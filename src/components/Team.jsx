import React from "react";

import icon1 from '../assets/suny1.svg';
import icon2 from '../assets/alina.svg';
import icon3 from '../assets/alex.svg';
import icon4 from '../assets/afroza.svg';

import skype from '../assets/skype.svg';
import linke from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import face from '../assets/face.svg';

import blure from "../assets/team-blure1.svg";
import blure1 from "../assets/team-blure2.svg";

export const Team = () => {
  return (
    <div className="team">
      <h2 className="team-title">Met Our Team</h2>
      <p className="team-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
      </p>
      <div className="team-list">
      <img className="team__blure1" src={blure} alt="blure" />
      <img className="team__blure2" src={blure1} alt="blure" />
      <div className="team__card">
            <div className="team__card-icon">
            <img src={icon1} alt="asd" />
            </div>
            <h3 className="team__card-title">Sunny Khan</h3>
            <p className="team__card-text">Executive officer</p>
            <a className="team__card-links" href="/">
                <img src={skype} alt="" />
                <img src={linke} alt="" />
                <img src={twitter} alt="" />
                <img src={face} alt="" />
            </a>
        </div>
        <div className="team__card">
            <div className="team__card-icon">
            <img src={icon2} alt="asd" />
            </div>
            <h3 className="team__card-title">Alina Jesia</h3>
            <p className="team__card-text">UX/UI DESIGNER</p>
            <a className="team__card-links" href="/">
                <img src={skype} alt="" />
                <img src={linke} alt="" />
                <img src={twitter} alt="" />
                <img src={face} alt="" />
            </a>
        </div>
        <div className="team__card">
            <div className="team__card-icon">
            <img src={icon3} alt="asd" />
            </div>
            <h3 className="team__card-title">Alex Sohag</h3>
            <p className="team__card-text">BUSINESS DEVELOPMENT</p>
            <a className="team__card-links" href="/">
                <img src={skype} alt="" />
                <img src={linke} alt="" />
                <img src={twitter} alt="" />
                <img src={face} alt="" />
            </a>
        </div>
        <div className="team__card">
            <div className="team__card-icon">
            <img src={icon4} alt="asd" />
            </div>
            <h3 className="team__card-title">Afroza Mou</h3>
            <p className="team__card-text">Head of marketing</p>
            <a className="team__card-links" href="/">
                <img src={skype} alt="" />
                <img src={linke} alt="" />
                <img src={twitter} alt="" />
                <img src={face} alt="" />
            </a>
        </div>
      </div>
    </div>
  );
};

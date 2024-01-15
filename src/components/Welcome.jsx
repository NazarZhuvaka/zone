import React from 'react'

import welcome from '../assets/welcome-img.png';
import circle from '../assets/circle.svg';

import blure1 from '../assets/welcome-ping.svg';
import blure2 from '../assets/welcome-left-blue-svg.svg';
import blure3 from '../assets/welcome-right-blure.svg';
import blure4 from '../assets/welcome-right-blure2.svg';

export const Welcome = () => {
  return (
    <div className='welcome'>
        <div className="welcome__info">
            <h1 className='welcome__info-title'>
                Virtual Reality Business Solutions
            </h1>
            <p className='welcome__info-text'>
            We have over 15 year exprience in business consultting arena. 
            We have over 15 year exprience in business consultting arena and artficial intelligence.
            </p>
            <div className='welcome__int'>
                <button className='welcome__btn'>Join Us</button>
                <button className='welcome__btn-sec'>
                    <img src={circle} alt="circle" />
                    Watch video
                </button>
            </div>
            <img className='welcome__blure2' src={blure2} alt="blure" />
        </div>
        <div className='welcome__img-section'>
            <img className='welcome__img' src={welcome} alt="blure" />
            <img className='welcome__blure' src={blure1} alt="blure" />
            <img className='welcome__blure3' src={blure3} alt="blure" />
            <img className='welcome__blure4' src={blure4} alt="blure" />
        </div>
    </div>
  )
}

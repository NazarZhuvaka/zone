import React from 'react'

import logo from "../assets/logo.svg";

import location from "../assets/Location.svg";
import calling from "../assets/Calling.svg";
import message from "../assets/Message.svg";

import face from "../assets/facebook-link.svg";
import twitter from "../assets/twitter-link.svg";
import inst from "../assets/instagram-link.svg";
import pint from "../assets/pinterest-link.svg";


export const Links = () => {
  return (
    <div className='links'>
        <div className='links__colm'>
        <a href="/" className="links__logo">
            <img src={logo} alt="logo" />
            <span className="links__text-logo">Zone.</span>
        </a>
        <p className='links__text'>
            <img src={location} alt="" />
            Dhaka, Bangladesh
        </p>
        <p className='links__text'>
            <img src={calling} alt="" />
            0943833399
        </p>
        <p className='links__text'>
            <img src={message} alt="" />
            support@zone.com
        </p>
        <div className='links__icon'>
            <img src={face} alt="" />
            <img src={twitter} alt="" />
            <img src={inst} alt="" />
            <img src={pint} alt="" />
        </div>
        </div>
        <div className='links__colm1'>
            <a className='links__colm-link' href="">Service</a>
            <a className='links__colm-link' href="">Order Management</a>
            <a className='links__colm-link' href="">Social Assistant</a>
            <a className='links__colm-link' href="">Crypto Platform</a>
            <a className='links__colm-link' href="">Analyzer of the News</a>
        </div>
        <div className='links__colm1'>
            <a className='links__colm-link' href="">Company</a>
            <a className='links__colm-link' href="">About Us</a>
            <a className='links__colm-link' href="">News</a>
            <a className='links__colm-link' href="">Our trusted partner</a>
            <a className='links__colm-link' href="">New users FAQ</a>
        </div>
        <div className='links__colm1'>
            <a className='links__colm-link' href="">Supports</a>
            <a className='links__colm-link' href="">Help center</a>
            <a className='links__colm-link' href="">Feedbcak</a>
            <a className='links__colm-link' href="">Contact us</a>
            <a className='links__colm-link' href="">Terms conditins</a>
        </div>
        <div className='links__colm1'>
            <a className='links__colm-link' href="">Resources</a>
            <a className='links__colm-link' href="">Download app</a>
            <a className='links__colm-link' href="">Blog</a>
            <a className='links__colm-link' href="">What’s new</a>
            <a className='links__colm-link' href="">Sitemap</a>
        </div>
    </div>
  )
}

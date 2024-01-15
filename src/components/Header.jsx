import React, { useState } from "react";


import logo from "../assets/logo.svg";
import menu from "../assets/menu-bar.svg";

export const Header = () => {
    const [isOpen,setOpen] = useState();
  return (
    <div className="header">
      <div className="header_container">
        <a href="/" className="header__logo">
            <img src={logo} alt="logo" />
            <span className="header__text">Zone.</span>
        </a>
        <nav className={`header__nav ${isOpen?"active":""}`}>
          <ul className="header__nav-ul">
            <li className="header__nav-list">
              <a className="header__nav-link" href="/">
                Home
              </a>
            </li>
            <li className="header__nav-list">
              <a className="header__nav-link" href="/">
                About Us
              </a>
            </li>
            <li className="header__nav-list">
              <a className="header__nav-link" href="/">
                Service
              </a>
            </li>
            <li className="header__nav-list">
              <a className="header__nav-link" href="/">
                Pricing
              </a>
            </li>
            <li className="header__nav-list">
              <a className="header__nav-link" href="/">
                Blog
              </a>
            </li>
          </ul>
          <button className="btn header__btn">Contact Us</button>
        </nav>
        <button className="header__menu-button" onClick={() => setOpen(!isOpen)}>
            <img src={menu} alt="" />
        </button>
      </div>
    </div>
  );
};

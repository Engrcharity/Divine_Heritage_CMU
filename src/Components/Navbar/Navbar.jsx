import React from "react";
import { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/divineLogo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  function handleMenu() {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="">
            {" "}
            <img src={logo} alt="Company Logo" className="divineLogo" />
          </a>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
        </div>
        <div className={isOpen ? "show" : "hidden" + " navbar-links-mobile"}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
        </div>
        <div className="menu" onClick={handleMenu}>
          {isOpen ? (
            <i className="fa fa-bars"></i>
          ) : (
            <i className="fa fa-times"></i>
          )}
        </div>
      </nav>
      <div className="subNavbar">
        <div className="scroll-wrapper">
          <p>Divine Heritage Cooperative Multipurpose Union</p>
          <p>Divine Heritage Cooperative Multipurpose Union</p>
          <p>Divine Heritage Cooperative Multipurpose Union</p>
          <p>Divine Heritage Cooperative Multipurpose Union</p>
          <p>Divine Heritage Cooperative Multipurpose Union</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

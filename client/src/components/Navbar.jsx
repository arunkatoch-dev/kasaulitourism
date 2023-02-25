import React, { useState } from "react";
import "../css/navbar.css";
import NavDiv from "./NavDiv";
import menu from "../images/menu.png";
import close from "../images/close.png";
import hillsLogo from "../images/hillsLogo.png";
const Navbar = () => {
  const [menuBtn, setMenuBtn] = useState(menu);
  const [showHideNav, setShowHideNav] = useState("hide-Nav-Div ");
  const clickHandler = () => {
    setMenuBtn(menuBtn === menu ? close : menu);
    setShowHideNav(showHideNav === "nav-Div" ? "hide-Nav-Div" : "nav-Div");
  };
  return (
    <>
      <nav>
        <div className="site-heading">
          <img src={hillsLogo} alt="logo" className="logo" />
          <h1>Kasauli Tourism</h1>
        </div>
        <img
          src={menuBtn}
          alt="menu image"
          className="menu-btn"
          onClick={clickHandler}
        />
      </nav>
      <NavDiv showHideNav={showHideNav} setShowHideNav={setShowHideNav} setMenuBtn={setMenuBtn}/>
    </>
  );
};

export default Navbar;

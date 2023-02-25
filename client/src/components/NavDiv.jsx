import React, { useState } from "react";
import Cookie from "js-cookie";
import Logout from "./Logout";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import menu from "../images/menu.png";
import "../css/navbar.css";

const NavDiv = ({ showHideNav, setShowHideNav, setMenuBtn }) => {
  const cookieName = Cookie.get("login");
   console.log(cookieName)

  const clickHandler = () => {
    setShowHideNav("hide-Nav-Div");
    setMenuBtn(menu);
  };
  return (
    <>
      <div className={showHideNav}>
        {cookieName != "sucessfully" ? (
          <div className="registration-Container">
            <Link
              className="registration-Links"
              onClick={clickHandler}
              to="/login"
            >
              Login
            </Link>
            <span>|</span>
            <Link
              className="registration-Links"
              onClick={clickHandler}
              to="/signup"
            >
              Signup
            </Link>
            <BiUserCircle className="user-Icon" />
          </div>
        ) : (
          <Logout  setShowHideNav={setShowHideNav} setMenuBtn={setMenuBtn}/>
        )}
        {/* ------------------------------------------------------------------ */}
        <ul>
          <li>
            <NavLink to="/" onClick={clickHandler} className="nav-Links">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={clickHandler} className="nav-Links">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={clickHandler} className="nav-Links">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" onClick={clickHandler} className="nav-Links">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallary" onClick={clickHandler} className="nav-Links">
              Gallary
            </NavLink>
          </li>
        </ul>
        {/* ------------------------------------------------ */}
        <div className="social-Links-Container">
          <Link
            to="https://www.facebook.com/profile.php?id=100005266396367"
            target="_blank"
            className="social-Links"
          >
            <BsFacebook className="social-Icon" />
          </Link>
          <Link
            to="https://github.com/ArunKatoch25-july-2000"
            target="_blank"
            className="social-Links"
          >
            <BsGithub className="social-Icon" />
          </Link>
          <Link
            to="https://www.instagram.com/a.r.u.n_katoch/"
            target="_blank"
            className="social-Links"
          >
            <BsInstagram className="social-Icon" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/arun-katoch-885a1419b"
            target="_blank"
            className="social-Links"
          >
            <BsLinkedin className="social-Icon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavDiv;

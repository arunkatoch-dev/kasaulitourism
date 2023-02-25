import React, { useEffect } from "react";
import Cookie from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import menu from "../images/menu.png";
import "../css/navbar.css";

const Logout = ({setShowHideNav, setMenuBtn}) => {
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        navigate("/", { replace: true });
        if (!res.status === 200) {
          throw new Error(`Something went wrong`);
        }
      })
      .catch((error) => {
        console.log(`error`);
      });
  },[]);
  return (
    <>
      <div className="registration-Container">
        <Link className="registration-Links" onClick={()=>{
            Cookie.remove("login")
            setShowHideNav("hide-Nav-Div");
             setMenuBtn(menu);
        }}>
          Logout
        </Link>
        <BiUserCircle className="user-Icon" />
      </div>
    </>
  );
};

export default Logout;

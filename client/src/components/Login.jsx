import React, { useState } from "react";
import Cookie from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import Alert from "./Alert";
import "../css/login-signup.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();
    if (res.status === 400 || !data) {
      setAlert("Invalid credentials...");
      setTimeout(() => {
        setAlert("");
      }, 3000);
    } else {
      setAlert("Login successfully");
      Cookie.set("login","sucessfully")
      setTimeout(() => {
        setAlert("");
        navigate("/");
      }, 3000);
    }
  };


  return (
    <section className="login-Page">
      <div className="login-page-content">
        <h1>Kasauli Tourism</h1>
        <p>A wonderful destination for nature lovers</p>
      </div>
      <div className="login-page-inputs-container">
        <form onSubmit={submitHandler} method="POST">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button  onClick={loginUser} className="login-btn">
            Login
          </button>
          <Link to="/forgot" className="forgot-Password">
            Forgotten password?
          </Link>
          <Link to="/signup" className="register-Now-Btn">
            Register Now
          </Link>
        </form>
      </div>
      {alert === "Invalid credentials..." ? (
        <Alert msg="Invalid credentials..." />
      ) : null}
      {alert === "Login successfully" ? (
        <Alert msg="Login successfully" />
      ) : null}
    </section>
  );
};

export default Login;

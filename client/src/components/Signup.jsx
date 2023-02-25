import React, { useState } from "react";
import Alert from "./Alert";
import { Link, useNavigate } from "react-router-dom";
import "../css/login-signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState("");
  const [user, setUser] = useState({
    email: "",
    phone: "",
    name: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { email, phone, name, password, cpassword } = user;

    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        phone,
        name,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      setAlert("Something went wrong");
      setTimeout(() => {
        setAlert("");
      }, 3000);
    } else {
      setAlert("Signup Successfull login now");
      setTimeout(() => {
        setAlert("");
      }, 3000);
      navigate("/login");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="signup-Page">
      <div className="signup-page-content">
        <h1>Kasauli Tourism</h1>
        <p>A wonderful destination for nature lovers</p>
      </div>
      <div className="signup-page-inputs-container">
        <form onSubmit={submitHandler} method="POST">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleInputs}
            required
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone"
            value={user.phone}
            onChange={handleInputs}
            required
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={user.name}
            onChange={handleInputs}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleInputs}
            required
          />
          <input
            type="text"
            name="cpassword"
            id="cpassword"
            placeholder="Confirm your password"
            value={user.cpassword}
            onChange={handleInputs}
            required
          />
          <button
            type="submit"
            value="signup"
            onClick={PostData}
            className="submit-btn"
          >
            Sign Up Now
          </button>
          <span className="already-registered">
            Already registered login below:
          </span>
          <Link to="/login" className="login-Now-Btn">
            Login
          </Link>
        </form>
      </div>

      {alert === "Something went wrong" ? (
        <Alert msg="Something went wrong" />
      ) : null}
      {alert === "Signup Successfull login now" ? (
        <Alert msg="Signup Successfull login now" />
      ) : null}
    </section>
  );
};

export default Signup;

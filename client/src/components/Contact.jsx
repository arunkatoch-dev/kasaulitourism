import React from "react";
import ContactUsThumbnail from "../images/ContactUsThumbnail.svg";
import { Link } from "react-router-dom";
import "../css/contact.css";

const Contact = () => {
  return (
    <section className="contact-Us-Page">
      <div className="thumbnail">
        <img src={ContactUsThumbnail} alt="contact-thumbnail"  loading="lazy" />
      </div>
      <div className="contact-Us-Container">
        <div className="contact-Main-Heading">
          <h1>Developer's Contact</h1>
        </div>
        <div className="contact-Content">
          <p>
            Email: <span>akinfo554@gmail.com</span>
          </p>
          <p>
            Phone: <span>86xxxx8809</span>
          </p>
          <div className="social-Links-Container">
            <Link
              to="https://www.linkedin.com/in/arun-katoch-885a1419b"
              target="_blank"
              className="social-Links"
            >
              LinkedIn
            </Link>
            <span>|</span>
            <Link
              to="https://www.facebook.com/profile.php?id=100005266396367"
              target="_blank"
              className="social-Links"
            >
              Facebook
            </Link>
            <span>|</span>
            <Link
              to="https://github.com/ArunKatoch25-july-2000"
              target="_blank"
              className="social-Links"
            >
              Github
            </Link>
            <span>|</span>
            <Link
              to="https://www.instagram.com/a.r.u.n_katoch/"
              target="_blank"
              className="social-Links"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

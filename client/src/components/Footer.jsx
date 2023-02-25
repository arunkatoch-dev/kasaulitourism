import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaBookOpen, FaBlogger } from "react-icons/fa";
import { AiFillContacts } from "react-icons/ai";
import { MdPhoto } from "react-icons/md";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-Heading">
        <h1>Kasauli toursim</h1>
      </div>

      <div className="footer-container">
        <div className="footer-content">
          <ul>
            <li>
              <Link
                to="https://react-icons.github.io/react-icons/"
                target="_blank"
              >
                React Icons
              </Link>
            </li>
            <li>
              <Link to="https://maps.google.com/" target="_blank">
                Google Maps
              </Link>
            </li>
            <li>
              <Link to="https://unsplash.com/" target="_blank">
                unsplash
              </Link>
            </li>
            <li>
              <Link to="https://pixabay.com/" target="_blank">
                pixabay
              </Link>
            </li>
            <li>
              <Link to="https://fonts.google.com/" target="_blank">
                google Fonts
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-content">
          <ul>
            <li>
              <Link to="https://colorhunt.co/" target="_blank">
                Color Hunt
              </Link>
            </li>
            <li>
              <Link to="https://openai.com/blog/chatgpt/" target="_blank">
                Chat GPT
              </Link>
            </li>
            <li>
              <Link to="https://undraw.co/" target="_blank">
                unDraw
              </Link>
            </li>
            <li>
              <Link to="https://icons8.com/" target="_blank">
                Icons8
              </Link>
            </li>
            <li>
              <Link to="https://mytexteditor.vercel.app/" target="_blank">
                Text Editor
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-content">
          <ul>
            <li>
              <Link
                to="https://katoch-web-solutions.vercel.app/"
                target="_blank"
              >
                Katoch web solutions
              </Link>
            </li>
            <li>
              <Link to="https://my-keep.vercel.app/" target="_blank">
                My Keep
              </Link>
            </li>
            <li>
              <Link
                to="https://to-do-list-five-rose.vercel.app/st"
                target="_blank"
              >
                ToDo's List
              </Link>
            </li>
            <li>
              <Link
                to="https://katoch-web-solutions.vercel.app/sciencequiz"
                target="_blank"
              >
                Science Quiz
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-nav">
        <ul>
          <li>
            <Link to="/">
              <IoHome className="nav-Icons" title="Homepage" />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaBookOpen className="nav-Icons" title="About" />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <AiFillContacts className="nav-Icons" title="Contact" />
            </Link>
          </li>
          <li>
            <Link to="/blogs" title="Blogs">
              <FaBlogger className="nav-Icons" />
            </Link>
          </li>
          <li>
            <Link to="/gallary">
              <MdPhoto className="nav-Icons" title="Gallary" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="developerDetails">
        <h4>Developed by Arun Katoch</h4>
        <p>
          arunkatoch955@gmail.com <span>Last Updated On: [25|02|2023]</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

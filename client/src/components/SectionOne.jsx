import React, { useState } from "react";
import LookingFor from "./LookingFor";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import Image1 from "../images/kasauli_night.jpg";
import Image2 from "../images/kasauli-church-inside.jpg";
import Image3 from "../images/church.png";
import Image4 from "../images/flowers.png";
import Image5 from "../images/kasauli-weather.jpg";
import namaste from "../images/namaste.png";
import "../css/sectionOne.css";

const SectionOne = () => {
  const [slideshowImg, setSlideshowImg] = useState([
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
  ]);
  const [slide, setSlide] = useState(0);
  const [showContent, setShowContent] = useState();
  const [lookingForHeadings, setLookingForHeadings] = useState({
    heading1: "• Tourist Attractions",
    heading2: "• Accomodations",
    heading3: "• Nearby Places",
    heading4: "• Food Corners",
    heading5: "• Fun Zones",
    heading6: "• Temples",
    heading7: "• Help",
  });
  const [showDetails, setShowDetails] = useState("hide-Details");

  const leftArrowClickHandler = () => {
    if (slide <= 0) {
      setSlide(slideshowImg.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };
  const rightArrowClickHandler = () => {
    if (slide === slideshowImg.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  const subscribeSubmitHandler = (e) => {
    e.preventDefault();
  };


  return (
    <>
      <section className="topmost-Section">
        {/* ------------------------------Slideshow------------------------    */}
        <div className="slideshow-container">
          <div className="left-arrow-div">
            <AiOutlineLeftCircle
              className="left-arrow"
              onClick={leftArrowClickHandler}
            />
          </div>
          <div className="slideshow-Images_Container">
            <img src={slideshowImg[slide]} alt="Slideshow Images" />
          </div>
          <div className="right-arrow-div">
            <AiOutlineRightCircle
              className="right-arrow"
              onClick={rightArrowClickHandler}
            />
          </div>
          <div className="main-Headings">
            <h1>Kasauli Hills Himachal Pradesh</h1>
            <span>A wonderful destination for nature lovers...</span>
          </div>
        </div>

        {/* ------------------------------------Sidebar ------------------------   */}
        <aside>
          <div className="aside-Heading-Container">
            <img src={namaste} alt="namaste" />
            <h2>Aatithi Devo Bhav</h2>
          </div>
          <div className="looking-For-Container">
            <span>Looking For:</span>
            <ul>
              <li
                onClick={() => {
                  setShowDetails("show-Details");
                  setShowContent(lookingForHeadings.heading1);
                }}
              >
                {lookingForHeadings.heading1}
              </li>
              <li
                onClick={() => {
                  setShowDetails("show-Details");
                  setShowContent(lookingForHeadings.heading2);
                }}
              >
                {lookingForHeadings.heading2}
              </li>
              <li
                onClick={() => {
                  setShowDetails("show-Details");
                  setShowContent(lookingForHeadings.heading3);
                }}
              >
                {lookingForHeadings.heading3}
              </li>
              <li
                onClick={() => {
                  setShowDetails("show-Details");
                  setShowContent(lookingForHeadings.heading4);
                }}
              >
                {lookingForHeadings.heading4}
              </li>
              <li
                onClick={() => {
                  setShowDetails("show-Details");
                  setShowContent(lookingForHeadings.heading5);
                }}
              >
                {lookingForHeadings.heading5}
              </li>
              <li
                onClick={() => {
                  setShowDetails("show-Details");
                  setShowContent(lookingForHeadings.heading6);
                }}
              >
                {lookingForHeadings.heading6}
              </li>
              <li
                onClick={() => {
                  setShowDetails("show-Details");
                  setShowContent(lookingForHeadings.heading7);
                }}
              >
                {lookingForHeadings.heading7}
              </li>
            </ul>
          </div>
          <form onSubmit={subscribeSubmitHandler}>
            <input
              type="email"
              name="subscribe-email"
              placeholder="kas123@gmail.com"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </aside>
      </section>
      {showContent === lookingForHeadings.heading1 ||
      lookingForHeadings.heading2 ||
      lookingForHeadings.heading3 ||
      lookingForHeadings.heading4 ||
      lookingForHeadings.heading4 ||
      lookingForHeadings.heading5 ||
      lookingForHeadings.heading6 ||
      lookingForHeadings.heading7 ? (
        <LookingFor
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          showContent={showContent}
          lookingForHeadings={lookingForHeadings}
        />
      ) : null}
    </>
  );
};

export default SectionOne;

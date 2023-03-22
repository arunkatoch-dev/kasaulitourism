import React from "react";
import PlacesDetails from "../content/PlacesDetails.js";
import AccomodationDetails from "../content/AccomodationDetails.js";
import LookingForDetails from "./LookingForDetails";
import close from "../images/close.webp";
import "../css/lookingFor.css";
import NearbyPlacesDetails from "../content/NearbyPlacesDetails.js";
import FoodCornersDetails from "../content/FoodCornersDetails.js";
import FunZonesDetails from "../content/FunZonesDetails.js";
import TemplesDetails from "../content/TemplesDetails.js";
import HelpDetails from "../content/HelpDetails.js";

const LookingFor = ({
  showDetails,
  setShowDetails,
  lookingForHeadings,
  showContent,
}) => {
  const closeDetails = () => {
    setShowDetails("hide-Details");
  };
  return (
    <>
      <div className={showDetails}>
        <section className="details-Section">
          <img
            src={close}
            alt="close-Btn"
            className="closeBtn"
            loading="lazy"
            onClick={closeDetails}
          />
          {showContent === lookingForHeadings.heading1
            ? PlacesDetails.map((content, index) => (
                <LookingForDetails content={content} key={index} />
              ))
            : null}
          {showContent === lookingForHeadings.heading2
            ? AccomodationDetails.map((content, index) => (
                <LookingForDetails content={content} key={index} />
              ))
            : null}
          {showContent === lookingForHeadings.heading3
            ? NearbyPlacesDetails.map((content, index) => (
                <LookingForDetails content={content} key={index} />
              ))
            : null}
          {showContent === lookingForHeadings.heading4
            ? FoodCornersDetails.map((content, index) => (
                <LookingForDetails content={content} key={index} />
              ))
            : null}
          {showContent === lookingForHeadings.heading5
            ? FunZonesDetails.map((content, index) => (
                <LookingForDetails content={content} key={index} />
              ))
            : null}
          {showContent === lookingForHeadings.heading6
            ? TemplesDetails.map((content, index) => (
                <LookingForDetails content={content} key={index} />
              ))
            : null}
          {showContent === lookingForHeadings.heading7
            ? HelpDetails.map((content, index) => (
                <LookingForDetails content={content} key={index} />
              ))
            : null}
        </section>
      </div>
    </>
  );
};

export default LookingFor;

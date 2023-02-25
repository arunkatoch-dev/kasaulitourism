import React from "react";
import "../css/cards.css";
import { Link } from "react-router-dom";

const Card = ({ content }) => {
  return (
    <>
      <div className="cards-Container">
        <div className="card">
          <Link to={content[0].url} className="cards-Link">
            <div className="image-Container">
              <img src={content[0].img} alt="" />
            </div>
            <div className="place-Details-Container">
              <h3>{content[0].placeName}</h3>
              <p>{content[0].placeDetails}</p>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to={content[1].url} className="cards-Link">
            <div className="image-Container">
              <img src={content[1].img} alt="" />
            </div>
            <div className="place-Details-Container">
              <h3>{content[1].placeName}</h3>
              <p>{content[1].placeDetails}</p>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to={content[2].url} className="cards-Link">
            <div className="image-Container">
              <img src={content[2].img} alt="" />
            </div>
            <div className="place-Details-Container">
              <h3>{content[2].placeName}</h3>
              <p>{content[2].placeDetails}</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;

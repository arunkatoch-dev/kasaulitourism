import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import GallaryImages from "../content/GallaryImages.js";
import "../css/gallary.css";

const Gallary = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const leftScrollHandler = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 100;
  };
  const rightScrollHandler = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 100;
  };

  const imageClickHandler = (index) => {
    setImageIndex(index);
  };
  return (
    <section className="gallary">
      <div className="outer-Container">
        <div className="full-Image-Container">
          <img
            src={GallaryImages[imageIndex].image}
            alt="full-size-gallary-item"
            loading="lazy"
          />
        </div>
        <div className="left-ArrowContainer">
          <AiOutlineLeft className="left-Arrow" onClick={leftScrollHandler} />
        </div>
        <div className="thumbnail-Image-Container" id="slider">
          {GallaryImages.map((element, index) => {
            return (
              <img
                src={element.image}
                alt="gallary-Images"
                id="thumbnailImage"
                loading="lazy"
                onClick={() => {
                  imageClickHandler(index);
                }}
                key={index}
              />
            );
          })}
        </div>
        <div className="right-ArrowContainer">
          <AiOutlineRight
            className="right-Arrow"
            onClick={rightScrollHandler}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallary;

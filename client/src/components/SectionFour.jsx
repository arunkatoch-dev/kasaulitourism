import React, { useState } from "react";
import Card from "./Card";
import Card1 from "../content/Card1.js";
import Card2 from "../content/Card2.js";
import Card3 from "../content/Card3.js";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import "../css/sectionFour.css";

const SectionFour = () => {
  const [showCards, setShowCards] = useState(3);

  const leftClickHandler = () => {
    if (showCards <= 1) {
      setShowCards(3);
    } else {
      setShowCards(showCards - 1);
    }
  };
  const rightClickHandler = () => {
    if (showCards >= 3) {
      setShowCards(1);
    } else {
      setShowCards(showCards + 1);
    }
  };

  return (
    <section className="section-Four">
      <div className="section-Heading">
        <h1>Popular nearby tourist places</h1>
      </div>
    <div className="cards-Outer-Container">

      <AiOutlineLeftCircle className="left-arrow" onClick={leftClickHandler} />
      {showCards === 1 ? <Card content={Card1} /> : null}
      {showCards === 2 ? <Card content={Card2} /> : null}
      {showCards === 3 ? <Card content={Card3} /> : null}
      <AiOutlineRightCircle
        className="right-arrow"
        onClick={rightClickHandler}
      />
      </div>
    </section>
  );
};

export default SectionFour;

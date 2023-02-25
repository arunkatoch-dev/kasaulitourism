import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Rating = ({ content }) => {
  return (
    <>
      {content.rating === 5 ? (
        <div className="rating">
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStarFill className="star" />
        </div>
      ) : null}
      {content.rating === 4.5 ? (
        <div className="rating">
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStarHalf className="star" />
        </div>
      ) : null}
      {content.rating === 4 ? (
        <div className="rating">
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStar className="star" />
        </div>
      ) : null}
      {content.rating === 3.5 ? (
        <div className="rating">
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStarHalf className="star" />
          <BsStar className="star" />
        </div>
      ) : null}
      {content.rating === 3 ? (
        <div className="rating">
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStar className="star" />
          <BsStar className="star" />
        </div>
      ) : null}
      {content.rating === 2.5 ? (
        <div className="rating">
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStarHalf className="star" />
          <BsStar className="star" />
          <BsStar className="star" />
        </div>
      ) : null}
      {content.rating === 2 ? (
        <div className="rating">
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStar className="star" />
          <BsStar className="star" />
          <BsStar className="star" />
        </div>
      ) : null}
      {content.rating === 1.5 ? (
        <div className="rating">
          <BsStarFill className="star" />
          <BsStarHalf className="star" />
          <BsStar className="star" />
          <BsStar className="star" />
          <BsStar className="star" />
        </div>
      ) : null}
      {content.rating === 1 ? (
        <div className="rating">
          <BsStarFill className="star" />
          <BsStar className="star" />
          <BsStar className="star" />
          <BsStar className="star" />
          <BsStar className="star" />
        </div>
      ) : null}
      {content.rating === 0.5 ? (
        <div className="rating">
          <BsStarHalf className="star" />
          <BsStar className="star" />
          <BsStar className="star" />
          <BsStar className="star" />
          <BsStar className="star" />
        </div>
      ) : null}
      {content.rating <= 0 ? (
        <div className="rating">
          <BsStar className="star" />
          <BsStar className="star" />
          <BsStar className="star" />
          <BsStar className="star" />
          <BsStar className="star" />
        </div>
      ) : null}
    </>
  );
};

export default Rating;

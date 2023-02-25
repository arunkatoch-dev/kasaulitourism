import React from "react";
import close from "../images/close.png";
import "../css/blog.css";

const Blog = ({
  blog = "We are working on it... Please visit after few days.",
  closeBlog,
  blogContainer,
}) => {
  return (
    <>
      <div className={blogContainer}>
        <img
          src={close}
          alt="close-blog-btn"
          className="close-Blog-Btn"
          onClick={closeBlog}
        />
        <div className="post">
          <h1>{blog[0]}</h1>
          <p>{blog[1]}</p>
          <div className="img-Container">
            <img src={blog[2]} alt="blog-Image" />
          </div>
          <p>{blog[3]}</p>
          <p>{blog[4]}</p>
          <p>{blog[5]}</p>
          <p>{blog[6]}</p>
          <p>{blog[7]}</p>
          <p>{blog[8]}</p>
          <p>{blog[9]}</p>
          <p>{blog[10]}</p>
        </div>
      </div>
    </>
  );
};

export default Blog;

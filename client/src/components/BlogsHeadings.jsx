import React, { useState } from "react";
import "../css/blogsHeadings.css";
import Blogs from "../content/Blogs.js";

const BlogsHeadings = ({ clickHandler }) => {
  const [blogPost, setBlogPost] = useState("hide-Blog-Posts-Container");

  return (
    <>
      {Blogs.map((content, index) => {
        return (
          <div className="blogs-Headings-Container" key={index}>
            <div className="small-Thumbnail">
              <img src={content.img} alt="thumbnail" />
            </div>
            <div className="blogs-Heading">
              <h2
                className="blog-link"
                onClick={() => {
                  clickHandler(content, setBlogPost, blogPost);
                }}
              >
                {content.heading}
              </h2>
              <p>
                Date Published: <span>{content.datePublished}</span>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogsHeadings;

import React, { useState } from "react";
import BlogsMainThumbnail from "../images/BlogsMainThumbnail.svg";
import BlogsHeadings from "./BlogsHeadings";
import Blog from "./Blog";
import "../css/blogsHomepage.css";

const BlogsHomepage = () => {
  const [blog, setBlog] = useState([]);
  const [blogContainer, setBlogContainer] = useState(
    "hide-Blog-Posts-Container"
  );

  const clickHandler = (Blogs, setShowHideBlog, blogPost) => {
    setShowHideBlog("blog-Posts-Container");
    setBlogContainer(blogPost);
    setBlog([Blogs.heading, Blogs.content, Blogs.img, Blogs.paragraphOne, Blogs.paragraphTwo, Blogs.paragraphThree, Blogs.paragraphFour, Blogs.paragraphFive, Blogs.paragraphSix, Blogs.paragraphSeven, Blogs.paragraphEight, Blogs.paragraphNine, Blogs.paragraphTen]);
  };

  const closeBlogHandler = () => {
    setBlogContainer("hide-Blog-Posts-Container");
  };
  return (
    <>
      <section className="blogs-Section">
        <div className="thumbnail">
          <img src={BlogsMainThumbnail} alt="blogs-thumbnail" />
        </div>
        <div className="blogs-Container">
          <div className="blogs-Main-Heading">
            <h1>Our Blogs</h1>
          </div>
          <div className="blogs-Headings-Outer-Container">
            <BlogsHeadings clickHandler={clickHandler} />
          </div>
        </div>
      </section>
      <Blog
        blog={blog}
        closeBlog={closeBlogHandler}
        blogContainer={blogContainer}
      />
    </>
  );
};

export default BlogsHomepage;

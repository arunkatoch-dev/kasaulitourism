import React from "react";
import "../css/aboutus.css";
import AboutUsThumbnail from "../images/AboutUsThumbnail.svg";

const About = () => {
  return (
    <section className="about-Us-Page">
      <div className="thumbnail">
        <img src={AboutUsThumbnail} alt="about-thumbnail" loading="lazy" />
      </div>
      <div className="about-Us-Container">
        <div className="about-Main-Heading">
          <h1>About Us</h1>
        </div>
        <div className="about-Content">
          <p>
            Welcome to our website! We are a team of travel enthusiasts with a
            passion for exploring the beautiful destinations that India has to
            offer. Our website is a platform where we share our experiences and
            provide valuable information to help fellow travelers plan their
            trips.
          </p>
          <p>
            Our focus is on Kasauli, a charming hill station nestled in the
            Himalayan range of Himachal Pradesh. With its serene beauty,
            pleasant climate, and rich colonial history, Kasauli is a popular
            tourist destination that has something to offer for everyone.
          </p>
          <p>
            Through our website, we aim to provide travelers with a
            comprehensive guide to Kasauli, covering everything from the best
            places to visit to the best places to stay. We have personally
            visited each of the destinations and attractions that we recommend,
            and we strive to provide accurate and up-to-date information.
          </p>
          <p>
            We believe that travel is not just about visiting new places, but
            also about creating memories that last a lifetime. That's why we
            provide insider tips and suggestions to help travelers make the most
            of their time in Kasauli. Whether you're looking for adventure,
            relaxation, or a mix of both, we have something for everyone.
          </p>
          <p>
            Our team is committed to providing high-quality content that is both
            informative and engaging. We are constantly updating our website
            with new blog posts, travel guides, and reviews to ensure that our
            readers have access to the latest information.
          </p>
          <p>
            We are passionate about travel and we hope that our website inspires
            you to explore the beauty of Kasauli and beyond. Thank you for
            visiting our website and we look forward to helping you plan your
            next adventure!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

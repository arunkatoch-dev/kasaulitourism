import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import "../css/homepage.css";

const Homepage = () => {
  return (
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </main>
  );
};

export default Homepage;

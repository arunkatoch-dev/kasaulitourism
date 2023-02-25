import React from "react";
import flowers from "../images/flowers.png";
import train from "../images/train.png";
import church from "../images/church.png";
import cloudyWeather from "../images/weather.png";
import "../css/sectionTwo.css";
const SectionTwo = () => {
  return (
    <section className="kasauli-Introduction">
      <div className="content-Container">
        <div className="content">
          <h1>About Kasauli</h1>
          <p>
            kasauli is famous hill station located at solan district of Himachal
            Pradesh. kasauli is surrounded by green hills so people also call
            kasauli as queen of hills. Climatic views and greenary of kasauli
            attracts everyone . Every year a number of people visit here to
            explore the beauty of nature. The responsibility to keep kasauli
            clean and green is under kasauli cantonment board. The cantonment
            was established by the British Raj in 1842.
          </p>
        </div>
        <div className="content-image">
          <img src={church} alt="kasauli" />
        </div>
      </div>

      <div className="content-Container">
        <div className="content-image">
          <img src={cloudyWeather} alt="kasaluli" />
        </div>
        <div className="content">
          <h1
            style={{
              textAlign: "right",
              marginRight: "5rem",
              color: "#54606C",
            }}
          >
            Kasauli Weather
          </h1>
          <p>
            As kasauli is a hilly area so most of the times weather of kasauli
            is cold. But it also depends from Season to season. On an estimate
            in kasauli weather is quite cold between October - April whereas
            between May - September kasauli weather is quite hot. Temperature
            ranges from -3 to 8 degree Celsius during cold days. And during
            summers temperature hardly exceeded from 30 degree celsius.
          </p>
        </div>
      </div>

      <div className="content-Container">
        <div className="content">
          <h1>How to reach kasauli</h1>
          <p>
            You can reach kasauli by any mode of transportation. Roads are quite
            tight here, sometimes you can even face long hours of traffic jams.
            If you are a budget friendly traveller then kasauli is best for you.
            You can easily visit here by bus. You can easily get a direct bus
            from the following bus stations: <span>Dharampur</span>,
            <span>Solan</span>, <span>Parvanoo</span>,<span>Kalka</span>,{" "}
            <span>Chandigarh</span>. Nearest bus station & railway station from
            kasauli is Dharampur. If you want to visit kasauli by air then
            nearest airport from kasauli is Chandigarh.
          </p>
        </div>
        <div className="content-image">
          <img src={train} alt="kasaluli" />
        </div>
      </div>

      <div className="content-Container">
        <div className="content-image">
          <img src={flowers} alt="kasaluli" />
        </div>
        <div className="content">
          <h1
            style={{
              textAlign: "right",
              marginRight: "5rem",
              color: "#54606C",
            }}
          >
            Best time to visit
          </h1>
          <p>
            Every month is a on season in kasauli. You can visit kasauli
            whenever you want. But if you want to enjoy greenary of kasauli then
            i will suggest you to visit here between June-September. Sometimes
            snowfall also occurs in kasauli between December-February.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;

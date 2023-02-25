import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeritageMarket from "../images/HeritageMarket.PNG";
import MeditationPoint from "../images/MeditationPoint.PNG";
import SmallChurch from "../images/SmallChurch.PNG";
import SunsetPoint from "../images/SunsetPoint.PNG";
import GilbertTrail from "../images/GilbertTrail.PNG";
import MonkeyPoint from "../images/MonkeyPoint.PNG";
import SunrisePoint from "../images/SunrisePoint.PNG";
import Alasia from "../images/Alasia.PNG";
import Baikunth from "../images/Baikunth.jpg";
import KasauliResort from "../images/KasauliResort.png";
import KasauliHillsResort from "../images/KasauliHillsResort.png";
import Rosetum from "../images/Rosetum.PNG";
import RosCommon from "../images/RosCommon.PNG";
import Ramada from "../images/Ramada.PNG";
import RMaiden from "../images/RMaiden.PNG";
import WoodCreek from "../images/WoodCreek.PNG";
import Winnies from "../images/Winnies.PNG";
import TheChabbal from "../images/TheChabbal.PNG";
import KasauliWindsorResort from "../images/KasauliWindsorResort.PNG";
import KasauliResidency from "../images/KasauliResidency.PNG";
import KasauliParaiso from "../images/KasauliParaiso.PNG";
import KasauliExotica from "../images/KasauliExotica.PNG";
import HotelWhisperingWinds from "../images/HotelWhisperingWinds.PNG";
import HomesteadVillas from "../images/HomesteadVillas.PNG";
import ForestVille from "../images/ForestVille.PNG";
import Daleside from "../images/Daleside.PNG";
import BirdsView from "../images/BirdsView.PNG";
import AshwiniKhad from "../images/AshwiniKhad.PNG";
import AshwiniKhadWaterfall from "../images/AshwiniKhadWaterfall.PNG";
import CRI from "../images/CRI.PNG";
import KarolHill from "../images/KarolHill.PNG";
import MohanMeakin from "../images/MohanMeakin.PNG";
import NazaraPool from "../images/NazaraPool.PNG";
import TimerTrail from "../images/TimerTrail.PNG";
import VikasMushroomFarm from "../images/VikasMushroomFarm.PNG";
import ShivDhank from "../images/ShivDhank.png";
import CafeMantra from "../images/CafeMantra.PNG";
import CafeRudra from "../images/CafeRudra.PNG";
import CafeShubhmita from "../images/CafeShubhmita.PNG";
import OldTown from "../images/OldTown.PNG";
import Wangyal from "../images/Wangyal.PNG";
import BabaBalakNath from "../images/BabaBalakNath.PNG";
import GurudwaraGarkhal from "../images/GurudwaraGarkhal.PNG";
import ShirdiSaiBaba from "../images/ShirdiSaiBaba.PNG";
import NahariTemple from "../images/NahariTemple.PNG";
import Ambulance from "../images/Ambulance.png";
import CyberSecurity from "../images/CyberSecurity.jpg";
import ChildHelpline from "../images/ChildHelpline.jpg";
import DisasterManagement from "../images/DisasterManagement.jpg";
import Emergency from "../images/Emergency.jpg";
import WomenHelpline from "../images/WomenHelpline.jpg";
import Rating from "./Rating";
import "../css/lookingForDetails.css";

const LookingForDetails = ({ content }) => {
  const [thumbnail, setThumbnail] = useState([
    HeritageMarket,
    MeditationPoint,
    SmallChurch,
    SunsetPoint,
    GilbertTrail,
    MonkeyPoint,
    SunrisePoint,
    Alasia,
    Baikunth,
    TheChabbal,
    KasauliResort,
    KasauliHillsResort,
    Rosetum,
    Ramada,
    RosCommon,
    Winnies,
    WoodCreek,
    BirdsView,
    Daleside,
    ForestVille,
    RMaiden,
    HomesteadVillas,
    HotelWhisperingWinds,
    KasauliExotica,
    KasauliParaiso,
    KasauliResidency,
    KasauliWindsorResort,
    AshwiniKhad,
    AshwiniKhadWaterfall,
    CRI,
    KarolHill,
    MohanMeakin,
    NazaraPool,
    TimerTrail,
    VikasMushroomFarm,
    ShivDhank,
    CafeMantra,
    CafeRudra,
    CafeShubhmita,
    OldTown,
    Wangyal,
    BabaBalakNath,
    GurudwaraGarkhal,
    ShirdiSaiBaba,
    NahariTemple,
    Ambulance,
    CyberSecurity,
    ChildHelpline,
    DisasterManagement,
    Emergency,
    WomenHelpline,
  ]);
  return (
    <>
      <div className="touristAttractions-Container">
        <div className="thumbnail">
          <img
            src={
              thumbnail.includes(content.image)
                ? thumbnail[thumbnail.indexOf(content.image)]
                : null
            }
            alt="heritage-market-img"
          />
        </div>
        <div className="content">
          <h1>
            <Link to={content.url} target="_blank" className="link">
              {content.placeName}
            </Link>
          </h1>
          <p>{content.placeDetails}</p>
          <Rating content={content} />
          <span>{content.reference}</span>
        </div>
      </div>
    </>
  );
};

export default LookingForDetails;

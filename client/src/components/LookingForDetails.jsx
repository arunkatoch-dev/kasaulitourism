import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeritageMarket from "../images/HeritageMarket.webp";
import MeditationPoint from "../images/MeditationPoint.webp";
import SmallChurch from "../images/SmallChurch.webp";
import SunsetPoint from "../images/SunsetPoint.webp";
import GilbertTrail from "../images/GilbertTrail.webp";
import MonkeyPoint from "../images/MonkeyPoint.webp";
import SunrisePoint from "../images/SunrisePoint.webp";
import Alasia from "../images/Alasia.webp";
import Baikunth from "../images/Baikunth.webp";
import KasauliResort from "../images/KasauliResort.webp";
import KasauliHillsResort from "../images/KasauliHillsResort.webp";
import Rosetum from "../images/Rosetum.webp";
import RosCommon from "../images/RosCommon.webp";
import Ramada from "../images/Ramada.webp";
import RMaiden from "../images/RMaiden.webp";
import WoodCreek from "../images/WoodCreek.webp";
import Winnies from "../images/Winnies.webp";
import TheChabbal from "../images/TheChabbal.webp";
import KasauliWindsorResort from "../images/KasauliWindsorResort.webp";
import KasauliResidency from "../images/KasauliResidency.webp";
import KasauliParaiso from "../images/KasauliParaiso.webp";
import KasauliExotica from "../images/KasauliExotica.webp";
import HotelWhisperingWinds from "../images/HotelWhisperingWinds.webp";
import HomesteadVillas from "../images/HomesteadVillas.webp";
import ForestVille from "../images/ForestVille.webp";
import Daleside from "../images/Daleside.webp";
import BirdsView from "../images/BirdsView.webp";
import AshwiniKhad from "../images/AshwiniKhad.webp";
import AshwiniKhadWaterfall from "../images/AshwiniKhadWaterfall.webp";
import CRI from "../images/CRI.webp";
import KarolHill from "../images/KarolHill.webp";
import MohanMeakin from "../images/MohanMeakin.webp";
import NazaraPool from "../images/NazaraPool.webp";
import TimerTrail from "../images/TimerTrail.webp";
import VikasMushroomFarm from "../images/VikasMushroomFarm.webp";
import ShivDhank from "../images/ShivDhank.webp";
import CafeMantra from "../images/CafeMantra.webp";
import CafeRudra from "../images/CafeRudra.webp";
import CafeShubhmita from "../images/CafeShubhmita.webp";
import OldTown from "../images/OldTown.webp";
import Wangyal from "../images/Wangyal.webp";
import BabaBalakNath from "../images/BabaBalakNath.webp";
import GurudwaraGarkhal from "../images/GurudwaraGarkhal.webp";
import ShirdiSaiBaba from "../images/ShirdiSaiBaba.webp";
import NahariTemple from "../images/NahariTemple.webp";
import Ambulance from "../images/Ambulance.webp";
import CyberSecurity from "../images/CyberSecurity.webp";
import ChildHelpline from "../images/ChildHelpline.webp";
import DisasterManagement from "../images/DisasterManagement.webp";
import Emergency from "../images/Emergency.webp";
import WomenHelpline from "../images/WomenHelpline.webp";
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
            loading="lazy"
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
          <span className="reference_span">{content.reference}</span>
        </div>
      </div>
    </>
  );
};

export default LookingForDetails;

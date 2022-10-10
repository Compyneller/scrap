import React from "react";
import video from "../../assets/190802_17a_HD_36.mp4";
import "./Hero.scss";
const Hero = () => {
  return (
    <div className="hero-container">
      <video src={video} autoPlay muted loop />
    </div>
  );
};

export default Hero;

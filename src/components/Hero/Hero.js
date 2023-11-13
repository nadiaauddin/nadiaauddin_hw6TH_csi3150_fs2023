import React from "react";
import "./Hero.css";

const Hero = ({ backgroundImage, heading, subheading }) => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    padding: "50px",
    textAlign: "center",
    height: "800px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  return (
    <div style={heroStyle}>
      <h1 className="hero-heading">{heading}</h1>
      <h2 className="hero-subheading">{subheading}</h2>
    </div>
  );
};

export default Hero;

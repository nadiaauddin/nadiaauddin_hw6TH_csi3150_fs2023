import React from "react";
import Hero from "./components/Hero/Hero";
import TravelBlog from "./components/TravelBlog/TravelBlog";
import TravelData from "./TravelData";

// import logo from "./logo.svg";
import "./App.css";

import HeroImage from "./Assets/Hero1.jpg";

function App() {
  return (
    <div className="App">
      <Hero
        backgroundImage={HeroImage}
        heading="Welcome to My Travel Blog"
        subheading="Explore amazing places around the world"
      />
      {TravelData.map((item, index) => (
        <TravelBlog key={index} {...item} />
      ))}
    </div>
  );
}

export default App;

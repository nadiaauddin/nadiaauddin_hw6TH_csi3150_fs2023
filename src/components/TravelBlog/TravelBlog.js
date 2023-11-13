import React from "react";
import "./TravelBlog.css";

const TravelBlog = ({
  placeHeading,
  placeImg1,
  placeImg2,
  placeImg3,
  placeDescription,
}) => {
  return (
    <div className="travel-blog-container">
      <h3>{placeHeading}</h3>
      <div className="image-container">
        {placeImg1 && <img src={placeImg1} alt={`${placeHeading} - Image 1`} />}
        {placeImg2 && <img src={placeImg2} alt={`${placeHeading} - Image 2`} />}
        {placeImg3 && <img src={placeImg3} alt={`${placeHeading} - Image 3`} />}
      </div>
      <p>{placeDescription}</p>
    </div>
  );
};

export default TravelBlog;

import React from 'react';
import bg1 from "../assets/cloner-cubes-generative-copy.mp4";
import "../App.css"

const Background = () => {
  return (
    <>
      <video autoPlay loop id="background-video">
        <source src={bg1} type="video/mp4" />
      </video>
    </>
  );
}

export default Background
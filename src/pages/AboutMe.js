import React from "react";
import "../styles/Homepage.css";

const AboutMe = () => {
  return (
    <>
      <div>
        <p className="homepage__header">Who am I ?</p>
        <div className="homepage__text-wrapper">
          <p className="homepage__text">
            I`m a man with a tool and a heart. I like to create things.
          </p>
          <p className="homepage__text">
            It happens that wood and epoxy resin are two beatiful materials,
            that I fell in love with.
          </p>
        </div>
        <div className="homepage__text-wrapper">
          <p className="homepage__text">
            I have made this site from scratch by myself. I hope you like it.
          </p>
          <p className="homepage__text">
            All of the products are made from local, seasoned wood.
          </p>
          <p className="homepage__text">
            I sell my products to be able to do more - I hope - beautiful and
            useful things.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

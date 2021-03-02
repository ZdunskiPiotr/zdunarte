import React from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";

const HomePage = () => {
  const aboutme = "<< About me >>";
  return (
    <>
      <div>
        <p className="homepage__header">Welcome.</p>
        <p className="homepage__header-medium">I`m Pete.</p>
        <div className="homepage__text-wrapper">
          <p className="homepage__text">
            I`d like to share with you with my work.
          </p>
        </div>
        <div className="homepage__text-wrapper">
          <p className="homepage__text">
            I invite you to explore my modest gallery and hope you will find
            something for yourself.
          </p>
          <p className="homepage__text">Or someone else?</p>
          <p className="homepage__text">Enjoy.</p>
        </div>
        <p className="homepage__text">
          Feel free to explore and let me know what you like.
        </p>
        <p className="homepage__text"></p>
        <Link
          to="/aboutme"
          style={{ textDecoration: "none", color: "#c5baa9" }}
        >
          <p className="aboutme__text">{aboutme}</p>
        </Link>
      </div>
    </>
  );
};

export default HomePage;

import React from "react";
import "../styles/WallArt.css";
import { Link } from "react-router-dom";

const WallArt = () => {
  return (
    <div className="wallArt">
      <Link to="/products/clocks" style={{ textDecoration: "none" }}>
        <div className="wallArt__clocks">
          <img
            src="../images/representative/clocks.jpg"
            alt="Clocks"
            className="wallArt__clocks-img"
          />
          <div className="products-name main-color">Clocks</div>
        </div>
      </Link>
      <Link to="/products/hangers" style={{ textDecoration: "none" }}>
        <div className="wallArt__hangers">
          <img
            src="../images/representative/hangerz.jpg"
            alt="Hangers"
            className="wallArt__hangers-img"
          />
          <div className="products-name main-color">Hangers</div>
        </div>
      </Link>
    </div>
  );
};

export default WallArt;

import React from "react";
import "../styles/FloorArt.css";
import "../styles/Products.css";
import { Link } from "react-router-dom";

const FloorArt = () => {
  return (
    <div className="floorArt">
      <Link to="/products/tables" style={{ textDecoration: "none" }}>
        <div className="floorArt__tables main-color">
          <img src="../images/representative/tables.jpg" alt="Tables" />
          <div className="products-name main-color">Tables</div>
        </div>
      </Link>
      <Link to="/products/chairs" style={{ textDecoration: "none" }}>
        <div className="floorArt__chairs">
          <img src="../images/representative/chairs.jpg" alt="Chairs" />
          <div className="products-name main-color">Chairs</div>
        </div>
      </Link>
    </div>
  );
};

export default FloorArt;

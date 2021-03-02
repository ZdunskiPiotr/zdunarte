import React from "react";
import { Link } from "react-router-dom";
import "../styles/Products.css";
import Back from "../navigation/Back";
import Clickinfo from "../navigation/Clickinfo";
import Chair from "../product/Chair";

const Chairs = () => {
  return (
    <>
      <div className="backWrapper">
        <Link to="/floorart" style={{ textDecoration: "none" }}>
          <Back />
        </Link>
        <Clickinfo />
      </div>
      <div className="productsWrapper">
        <Chair />
      </div>
    </>
  );
};

export default Chairs;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Products.css";
import Back from "../navigation/Back";
import Clickinfo from "../navigation/Clickinfo";
import Clock from "../product/Clock";

const Clocks = () => {
  return (
    <>
      <div className="backWrapper">
        <Link to="/wallart" style={{ textDecoration: "none" }}>
          <Back />
        </Link>
        <Clickinfo />
      </div>

      <div className="productsWrapper">
        <Clock />
      </div>
    </>
  );
};

export default Clocks;

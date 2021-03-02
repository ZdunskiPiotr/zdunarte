import React from "react";
import { Link } from "react-router-dom";
import "../styles/Products.css";
import Back from "../navigation/Back";
import Clickinfo from "../navigation/Clickinfo";
import ArchiveProduct from "../product/ArchiveProduct";

const Archive = () => {
  return (
    <>
      <div className="backWrapper">
        <Link to="/history" style={{ textDecoration: "none" }}>
          <Back />
        </Link>
        <Clickinfo />
      </div>
      <div className="productsWrapper">
        <ArchiveProduct />
      </div>
    </>
  );
};

export default Archive;

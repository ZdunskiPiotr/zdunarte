import React from "react";
import { Link } from "react-router-dom";
import "../styles/Products.css";
import Back from "../navigation/Back";
import Clickinfo from "../navigation/Clickinfo";
import Table from "../product/Table";

const Tables = () => {
  return (
    <>
      <div className="backWrapper">
        <Link to="/floorart" style={{ textDecoration: "none" }}>
          <Back />
        </Link>
        <Clickinfo />
      </div>
      <div className="productsWrapper">
        <Table />
      </div>
    </>
  );
};

export default Tables;

import React from "react";
import "../styles/History.css";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div className="history-wrap">
      <div className="history__description">
        <p className="history__header">Welcome to my archive.</p>
        <p className="history__text">
          It is a place where you can see my work that is not for sale anymore.
        </p>
        <p className="history__text">
          Some of it I use daily, some was given as a gift.
        </p>
        <p className="history__text">
          With your help it is possible to recreate things from the past.
        </p>
      </div>

      <Link to="/products/archive" style={{ textDecoration: "none" }}>
        <div className="history__archive">
          <img
            src={"../images/representative/history.jpg"}
            alt="Archive"
            className="history__archive-img"
          />
          <span className="history__archive-span">Go to archive</span>
        </div>
      </Link>
    </div>
  );
};

export default History;

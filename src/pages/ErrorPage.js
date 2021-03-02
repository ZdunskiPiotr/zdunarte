import React from "react";
import error from "../images/error/error.png";

const ErrorPage = () => {
  return (
    <>
      <div>
        <h1>Site not found </h1>
        <img src={error} alt="error" />
      </div>
    </>
  );
};

export default ErrorPage;

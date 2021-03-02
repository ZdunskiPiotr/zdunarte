import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutMe from "../pages/AboutMe";
import WallArt from "../pages/WallArt";
import Clocks from "../products/Clocks";
import Hangers from "../products/Hangers";
import Tables from "../products/Tables";
import Chairs from "../products/Chairs";
import FloorArt from "../pages/FloorArt";
import ContactPage from "../pages/ContactPage";
import History from "../pages/History";
import Archive from "../products/Archive";
import ErrorPage from "../pages/ErrorPage";
import "../styles/Page.css";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/aboutme" exact component={AboutMe} />
        <Route path="/wallart" component={WallArt} />
        <Route path="/products/clocks" component={Clocks} />
        <Route path="/products/hangers" component={Hangers} />
        <Route path="/products/tables" component={Tables} />
        <Route path="/products/chairs" component={Chairs} />
        <Route path="/floorart" component={FloorArt} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/history" component={History} />
        <Route path="/products/archive" component={Archive} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;

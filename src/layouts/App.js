import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";
import Logo from "./Logo";
// import "react-image-lightbox/style.css";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="wrapper">
          <section className="logo">
            <Logo />
          </section>
          <div className="main">
            <aside>
              <Navigation />
            </aside>
            <section className="page">
              <Page />
            </section>
          </div>
          <section className="footer">
            <Footer />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;

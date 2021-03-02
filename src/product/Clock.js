import React, { Component } from "react";
import Modal from "../modal/Modal";

class Clock extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch("../data/clocks.json")
      .then((response) => response.json())
      .then((result) => {
        const stateProducts = result;
        this.setState({
          products: stateProducts,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { products } = this.state;
    const type = "clock";

    return (
      <>
        <Modal products={products} type={type} />
      </>
    );
  }
}

export default Clock;

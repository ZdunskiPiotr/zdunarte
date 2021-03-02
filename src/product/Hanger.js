import React, { Component } from "react";
import Modal from "../modal/Modal";

class Hanger extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch("../data/hangers.json")
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
    const type = "hanger";

    return (
      <>
        <Modal products={products} type={type} />
      </>
    );
  }
}

export default Hanger;

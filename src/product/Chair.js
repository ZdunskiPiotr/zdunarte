import React, { Component } from "react";
import Modal from "../modal/Modal";

class Chair extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch("../data/chairs.json")
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
    const type = "chair";

    return (
      <>
        <Modal products={products} type={type} />
      </>
    );
  }
}

export default Chair;

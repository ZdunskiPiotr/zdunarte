import React, { Component } from "react";
import Modal from "../modal/Modal";

class ArchiveProduct extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch("../data/archive.json")
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
    const type = "archive";

    return (
      <>
        <Modal products={products} type={type} />
      </>
    );
  }
}

export default ArchiveProduct;

import React, { Component } from "react";
import "../styles/Modal.css";
import "../styles/Navigation.css";

class Modal extends Component {
  state = {
    isOpen: false,
    productURL: "",
    stateProductURL1: "",
    stateProductURL2: "",
    stateProductURL3: "",
    stateProductURL4: "",
    stateProductActive: 1,
    productDescription: "",
    stateSize: "",
    stateTotalHeight: "",
    statePrice: "",
    statePage: 1,
    startSliceNumber: 0,
    endSliceNumber: 4,
  };
  render() {
    const {
      isOpen,
      productURL,
      stateProductURL1,
      stateProductURL2,
      stateProductURL3,
      stateProductURL4,
      stateProductActive,
      productDescription,
      stateSize,
      stateTotalHeight,
      statePrice,
      statePage,
      startSliceNumber,
      endSliceNumber,
    } = this.state;

    // Products data from props (json files)
    const products = this.props.products;

    // 4 products per page
    let fourProductsShown = products.slice(startSliceNumber, endSliceNumber);
    let dataProduct = fourProductsShown.filter(
      (product) => product.type === `${this.props.type}`
    );

    // Price text
    let priceText = "Price :";
    if (this.props.type === "archive") {
      priceText = "Estimated price";
    }

    // Active small picture style
    const activeStyle = "modal__small-image modal__small-image--active";

    // Exit when Escape pressed
    const exitBTN = (e) => {
      if (e.keyCode === 27) {
        this.setState({
          isOpen: false,
        });
      }
    };
    window.addEventListener("keydown", exitBTN);

    // Modal structure
    let foundProduct = dataProduct.map((product) => (
      <div key={product.name} className="product-container">
        <div
          onClick={() =>
            this.setState({
              isOpen: true,
              productURL: product.bigPictureURL1,
              stateProductURL1: product.bigPictureURL1,
              stateProductURL2: product.bigPictureURL2,
              stateProductURL3: product.bigPictureURL3,
              stateProductURL4: product.bigPictureURL4,
              productDescription: product.details,
              stateSize: product.size,
              stateTotalHeight: product.totalHeight,
              statePrice: product.price,
            })
          }
        >
          <img src={product.pictureURL} alt="" className="product-picture" />
        </div>
        <div className="product-name">{product.name}</div>

        {/* POPUP when clicked */}
        {isOpen && (
          <section className="modal-wrap">
            <div className="modal">
              <div className="modal__top">
                <p className="modal__top-details">{productDescription}</p>
              </div>
              <div className="modal__middle">
                <div className="modal__big-image">
                  <img
                    src={productURL}
                    alt="product"
                    className="modal__big-image--img"
                  />
                </div>
                {/* Small images */}

                <div className="modal__small-images">
                  {stateProductURL1 && stateProductURL2 && (
                    <div
                      onClick={() =>
                        this.setState({
                          productURL: stateProductURL1,
                          stateProductActive: 1,
                        })
                      }
                      className={
                        stateProductActive === 1
                          ? activeStyle
                          : "modal__small-image"
                      }
                    >
                      <img
                        src={stateProductURL1}
                        alt="picture1"
                        className="modal__small-image--img"
                      />
                    </div>
                  )}
                  {stateProductURL2 && (
                    <div
                      onClick={() =>
                        this.setState({
                          productURL: stateProductURL2,
                          stateProductActive: 2,
                        })
                      }
                      className={
                        stateProductActive === 2
                          ? activeStyle
                          : "modal__small-image"
                      }
                    >
                      <img
                        src={stateProductURL2}
                        alt="picture2"
                        className="modal__small-image--img"
                      />
                    </div>
                  )}
                  {stateProductURL3 && (
                    <div
                      onClick={() =>
                        this.setState({
                          productURL: stateProductURL3,
                          stateProductActive: 3,
                        })
                      }
                      className={
                        stateProductActive === 3
                          ? activeStyle
                          : "modal__small-image"
                      }
                    >
                      <img
                        src={stateProductURL3}
                        alt="picture3"
                        className="modal__small-image--img"
                      />
                    </div>
                  )}
                  {stateProductURL4 && (
                    <div
                      onClick={() =>
                        this.setState({
                          productURL: stateProductURL4,
                          stateProductActive: 4,
                        })
                      }
                      className={
                        stateProductActive === 4
                          ? activeStyle
                          : "modal__small-image"
                      }
                    >
                      <img
                        src={stateProductURL4}
                        alt="picture4"
                        className="modal__small-image--img"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="modal__bottom">
                <div className="productSize-wrapper">
                  Size :{" "}
                  <span className="modal__bottom-detailsStyle">
                    {stateSize}
                  </span>
                </div>

                {stateTotalHeight && (
                  <div className="productTHeight-wrapper">
                    Total Height :{" "}
                    <span className="modal__bottom-detailsStyle">
                      {stateTotalHeight}
                    </span>
                  </div>
                )}

                <div className="productPrice-wrapper">
                  {priceText}&nbsp;
                  <span className="price">{statePrice}</span>
                </div>
              </div>
              {/* Escape button  */}
              <span
                className="hide"
                onClick={() =>
                  this.setState({
                    isOpen: false,
                    stateProductActive: 1,
                  })
                }
              >
                <img src={"../images/nav/cancel.png"} alt="obraz" />
              </span>
            </div>
          </section>
        )}
      </div>
    ));

    // Next and previous products buttons
    let foundNextBTN;
    let foundPreviousBTN;

    const nextButtonURL = "../images/nav/next.png";
    const prevButtonURL = "../images/nav/previous.png";

    if (products.length > 4 && products.length / 4 > statePage) {
      foundNextBTN = (
        <div
          onClick={() => {
            this.setState({
              statePage: statePage + 1,
              startSliceNumber: startSliceNumber + 4,
              endSliceNumber: endSliceNumber + 4,
            });
          }}
        >
          <img src={nextButtonURL} alt="nextBTN" />
        </div>
      );
    }

    if (statePage > 1) {
      foundPreviousBTN = (
        <div
          onClick={() => {
            this.setState({
              statePage: statePage - 1,
              startSliceNumber: startSliceNumber - 4,
              endSliceNumber: endSliceNumber - 4,
            });
          }}
        >
          <img src={prevButtonURL} alt="backBTN" />
        </div>
      );
    }

    return (
      <>
        <div className="previousButton">{foundPreviousBTN}</div>
        <div className="product">{foundProduct}</div>
        <div className="nextButton">{foundNextBTN}</div>
      </>
    );
  }
}

export default Modal;

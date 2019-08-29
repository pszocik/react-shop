import React from "react";

const Image = ({ id, link, togglePaymentPopUp, addToCart }) => {
  return (
    <div key={id} className="image">
      <img key={id} className="image-single" alt={id} src={link} />
      <div className="image-button image-payment">
        <button
          className="image-button-payment"
          onClick={() => togglePaymentPopUp(id, link)}
          id={id}
        >
          <i className="fa fa-dollar"></i>
        </button>
      </div>
      <div className="image-button image-cart">
        <button
          className="image-button-cart"
          onClick={() => addToCart(id, link)}
        >
          <i className="fa fa-cart-plus icon-large"></i>
        </button>
      </div>
    </div>
  );
};

export default Image;

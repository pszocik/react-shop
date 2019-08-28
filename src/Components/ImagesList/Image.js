import React from "react";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const Image = ({ id, link, paymentPopUp }) => {
  return (
    <div key={id} className="image">
      <img key={id} alt={id} src={link} />
      <button
        onClick={() => paymentPopUp(id)}
        id={id}
        className="image-button image-payment"
      >
        <span className="image-text image-text-payment">Purchase</span>
        <MonetizationOnIcon />
      </button>
      <button className="image-button image-cart ">
        <span className="image-text image-text-cart">Add to cart</span>
        <AddShoppingCartIcon />
      </button>
    </div>
  );
};

export default Image;

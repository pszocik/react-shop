import React from "react";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const Image = ({ id, link, paymentPopUp }) => {
  return (
    <div key={id} className="image">
      <img key={id} alt={id} src={link} />
      <div className="image-button image-payment">
        <button
          className="image-button-payment"
          onClick={() => paymentPopUp(id)}
          id={id}
        >
          <MonetizationOnIcon />
        </button>
      </div>
      <div className="image-button image-cart">
        <button className="image-button-cart">
          <AddShoppingCartIcon />
        </button>
      </div>
    </div>
  );
};

export default Image;

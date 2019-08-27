import React from "react";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const Image = ({ id, link, paymentPopUp }) => {
  return (
    <div key={id} className="image">
      <img key={id} alt={id} src={link} />
      <button onClick={() => paymentPopUp(id)} id={id} className="image-button">
        <MonetizationOnIcon />
      </button>
      <button className="image-button">
        <AddShoppingCartIcon />
      </button>
    </div>
  );
};

export default Image;

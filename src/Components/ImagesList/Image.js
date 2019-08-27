import React, { useState } from "react";
import Payment from "../Payment/Payment";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const Image = ({ id, link }) => {
  const [payment, showPayment] = useState(false);
  const paymentPopUp = id => {
    showPayment(!payment);
  };

  return (
    <div key={id} className="image">
      <img key={id} alt={id} src={link} />
      <button onClick={paymentPopUp} id={id} className="image-button">
        <Payment />
        <MonetizationOnIcon />
      </button>
      <button className="image-button">
        <AddShoppingCartIcon />
      </button>
    </div>
  );
};

export default Image;

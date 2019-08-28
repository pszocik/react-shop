import React from "react";
import "./Payment.css";
import CloseIcon from "@material-ui/icons/Close";

const Payment = ({ payment, paymentPopUp, imageInfo }) => {
  if (payment)
    return (
      <div className="popup">
        <button className="popup-close" onClick={paymentPopUp}>
          <CloseIcon />
        </button>
        <h2>Follow the next steps to finish your transaction</h2>
        <h4>You've picked {imageInfo.id}#Photo</h4>
        <div>
          <img
            alt={imageInfo.id}
            src={imageInfo.link}
            width="140"
            height="210"
          ></img>
        </div>
      </div>
    );
  return <div></div>;
};

export default Payment;

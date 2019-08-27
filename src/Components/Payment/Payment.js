import React from "react";
import "./Payment.css";
import CloseIcon from "@material-ui/icons/Close";

const Payment = ({ payment, paymentPopUp, id }) => {
  if (payment)
    return (
      <div className="popup">
        <button className="popup-close" onClick={paymentPopUp}>
          <CloseIcon />
        </button>
        <h2>Follow the next steps to finish your transaction</h2>
        <h4>You've picked {id}#Photo</h4>
      </div>
    );
  return <div></div>;
};

export default Payment;

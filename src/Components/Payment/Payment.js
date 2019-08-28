import React from "react";
import "./Payment.css";
import CloseIcon from "@material-ui/icons/Close";

const Payment = ({ payment, togglePaymentPopUp, imageInfo, cart }) => {
  if (payment)
    return (
      <div className="popup">
        <button className="popup-close" onClick={togglePaymentPopUp}>
          <CloseIcon />
        </button>
        <h2>Follow the next steps to finish your transaction</h2>
        {cart.length > 1 ? (
          <h4>You've picked {cart.length} items</h4>
        ) : (
          <h4>You've picked {cart.length} item </h4>
        )}

        <div className="payment-images">
          {cart.map(el => {
            return (
              <div key={el.id}>
                <img
                  alt={el.id}
                  key={el.id}
                  src={el.link}
                  width="35"
                  height="52.5"
                ></img>
                <h3>{el.id}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  return <div></div>;
};

export default Payment;

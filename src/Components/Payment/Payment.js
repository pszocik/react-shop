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
        <div className="payment">
          <div className="payment-images">
            {cart.map(el => {
              return (
                <img
                  alt={el.id}
                  key={el.id}
                  src={el.link}
                  className="payment-images-single"
                  width="63"
                  height="93"
                ></img>
              );
            })}
          </div>
          <div className="payment-checkout">
            <h4>You will pay {cart.length * 0.5}$ for your items</h4>
            <button>Pay via PayPal</button>
          </div>
        </div>
      </div>
    );
  return <div></div>;
};

export default Payment;

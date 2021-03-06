import React from "react";
import Image from "./Image";
import "./ImagesList.css";

const ImagesList = ({ Images, loading, togglePaymentPopUp, addToCart }) => {
  if (loading) {
    return <h1 className="loading-screen">Loading...</h1>;
  }

  return (
    <div className="ImagesList">
      {Images.map(el => {
        return (
          <Image
            togglePaymentPopUp={togglePaymentPopUp}
            addToCart={addToCart}
            key={el.id}
            id={el.id}
            link={el.link}
          />
        );
      })}
    </div>
  );
};

export default ImagesList;

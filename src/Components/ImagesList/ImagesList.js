import React from "react";
import "./ImagesList.css";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

export default function ImagesList({ Images, loading }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="ImagesList">
      {Images.map(el => {
        return (
          <div className="image">
            <img key={el.id} alt={el.id} src={el.link} />
            <button className="image-button">
              <MonetizationOnIcon />
            </button>
            <button className="image-button">
              <AddShoppingCartIcon />
            </button>
          </div>
        );
      })}
    </div>
  );
}

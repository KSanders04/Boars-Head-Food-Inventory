import React from "react";
import { DisplayFoodItem } from "./displayFoodItem";
import "../display/displayFoodBox.css";

export const DisplayFoodBox = ({ title, items }) => {
  return (
    <div className="displayBox">
      <h1>{title}</h1>
      {items.length === 0 ? (
        <p className="displayNoItems">No items {title.toLowerCase()}</p>
      ) : (
        items.map((item, index) => <DisplayFoodItem key={index} item={item} />)
      )}
    </div>
  );
};

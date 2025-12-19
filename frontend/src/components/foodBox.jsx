import React from "react";
import { FoodItem } from "./foodItem";
import "../App.css";

export const FoodBox = ({
  title,
  items,
  onMoveItem,
  onDeleteItem,
  onUpdateItem,
  moveButtonText,
}) => {
  return (
    <div className="box">
      <h1>{title}</h1>
      {items.length === 0 ? (
        <p className="noItems">No items {title.toLowerCase()}</p>
      ) : (
        items.map((item, index) => (
          <FoodItem
            key={index}
            item={item}
            onMoveItem={onMoveItem}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
            moveButtonText={moveButtonText}
          />
        ))
      )}
    </div>
  );
};

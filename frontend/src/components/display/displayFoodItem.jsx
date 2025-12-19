import "../display/displayFoodItem.css";

export const DisplayFoodItem = ({ item }) => {
  return (
    <div className="displayFoodContainer">
      <p className="displayNameButton">{item.name}</p>
    </div>
  );
};

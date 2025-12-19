import { useState } from "react";
import "./addFoodPopUp.css";
import { foodService } from "../services/foodServices";

export const AddFoodPopUp = ({ onDataUpdate }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    inStock: true,
  });
  const [addFood, setAddFood] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name.trim() === "") {
      alert("Food name cannot be empty");
      return;
    }
    const payload = {
      name: formData.name,
      category: formData.category || "uncategorized",
      inStock: formData.inStock,
    };

    try {
      await foodService.addItem(payload);
      onDataUpdate();
      setFormData({
        name: "",
        category: "",
        inStock: true,
      });
      setAddFood(false);
    } catch (err) {
      alert(err.message || "Failed to add item");
    }
  };

  const options = [
    { value: "Bread"},
    { value: "Meat"},
    { value: "Cheese"},
    { value: "Vegetables"},
    { value: "Sauce"},
  ];

  const handleChange = (event) => {
    setFormData({ ...formData, category: event.target.value });
  };

  return (
    <>
      <div>
        <button className="menuButtons" onClick={() => setAddFood(!addFood)}>
          Add Food
        </button>

        {addFood && (
          <>
            <div
              className="modalOverlay"
              onClick={() => setAddFood(false)}
            ></div>
            <div className="modalPopup">
              <div className="modalHeader">
                <h2>Add New Food Item</h2>
                <button
                  className="closeButton"
                  onClick={() => setAddFood(false)}
                  type="button"
                >
                  ×
                </button>
              </div>
              <form onSubmit={handleSubmit} className="modalForm">
                <input
                  className="modalInput"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter food name..."
                  autoFocus
                />
                <select
                  className="modalInput"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Category
                  </option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
                <label className="checkboxLabel">
                  <input
                    type="checkbox"
                    checked={formData.inStock}
                    onChange={(e) =>
                      setFormData({ ...formData, inStock: e.target.checked })
                    }
                  />
                  In Stock
                </label>
                <div className="modalButtons">
                  <button className="submitButton" type="submit">
                    Add Item
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
};

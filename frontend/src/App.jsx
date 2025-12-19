import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AddFoodPopUp } from "./components/addFoodPopUp";
import "./App.css";
import { FoodBox } from "./components/foodBox";
import { foodService } from "./services/foodServices";

function App() {
  const [data, setData] = useState([]);
  const [unavailableData, setUnavailableData] = useState([]);
  const navigate = useNavigate();

  const getAllData = async () => {
    const items = await foodService.getItems();
    setData(items.filter((i) => i.inStock !== false));
    setUnavailableData(items.filter((i) => i.inStock === false));
  };

  const handleMoveToOutOfStock = async (item) => {
    await foodService.updateItem(item._id, { inStock: false });
    getAllData();
  };

  const handleMoveToInStock = async (item) => {
    await foodService.updateItem(item._id, { inStock: true });
    getAllData();
  };

  const deleteItem = async (item) => {
    await foodService.deleteItem(item._id);
    getAllData();
  };

  const updateItem = async (item, updates) => {
    await foodService.updateItem(item._id, updates);
    getAllData();
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <div className="topMenu">
        <h1 className="header">Food Inventory</h1>
        <div className="buttonContainer">
          <AddFoodPopUp onDataUpdate={getAllData} />
          <button
            className="menuButtons"
            onClick={() => navigate("/displayView")}
          >
            Display View
          </button>
        </div>
      </div>
      <div className="centerBox">
        <FoodBox
          title="In Stock"
          items={data}
          onMoveItem={handleMoveToOutOfStock}
          onDeleteItem={deleteItem}
          onUpdateItem={updateItem}
          moveButtonText={"Out of Stock"}
        />
        <FoodBox
          title="Out of Stock"
          items={unavailableData}
          onMoveItem={handleMoveToInStock}
          onDeleteItem={deleteItem}
          onUpdateItem={updateItem}
          moveButtonText={"In Stock"}
        />
      </div>
    </>
  );
}

export default App;

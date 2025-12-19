import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/display/displayView.css";
import { DisplayFoodBox } from "../components/display/displayFoodBox";
import { foodService } from "../services/foodServices";

function App() {
  const [unavailableData, setUnavailableData] = useState([]);
  const navigate = useNavigate();

  const getAllUnavailableFood = async () => {
    const unavailableData = await foodService.getUnavailableItems();
    setUnavailableData(unavailableData);
  };

  useEffect(() => {
    getAllUnavailableFood();
  }, []);

  return (
    <>
      <div className="displayTopMenu">
        <h1 className="displayHeader">Food Inventory</h1>
        <div className="displayButtonContainer">
          <button className="displayMenuButtons" onClick={() => navigate("/")}>
            Back
          </button>
        </div>
      </div>
      <div className="displayCenterBox">
        <DisplayFoodBox title="Out of Stock" items={unavailableData} />
      </div>
    </>
  );
}

export default App;

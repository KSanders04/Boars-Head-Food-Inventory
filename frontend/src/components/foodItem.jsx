import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

export const FoodItem = ({
  item,
  onMoveItem,
  onDeleteItem,
  onUpdateItem,
  moveButtonText,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editFields, setEditFields] = useState({
    name: item.name || "",
    category: item.category || "",
  });

  const handleSave = () => {
    const updates = {
      name: editFields.name,
      category: editFields.category,
    };
    onUpdateItem(item, updates);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditFields({
      name: item.name || "",
      category: item.category || "",
    });
    setIsEditing(false);
  };

  return (
    <div className="foodContainer">
      {isEditing ? (
        <div className="editContainer">
          <input
            className="editInput"
            value={editFields.name}
            onChange={(e) =>
              setEditFields({ ...editFields, name: e.target.value })
            }
            autoFocus
          />
          <input
            className="editInput"
            value={editFields.category}
            onChange={(e) =>
              setEditFields({ ...editFields, category: e.target.value })
            }
          />
          <button className="saveButton" onClick={handleSave}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button className="cancelButton" onClick={handleCancel}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      ) : (
        <>
          <button className="nameButton" onClick={() => setIsEditing(true)}>
            {item.name}
          </button>
        </>
      )}
      <div className="buttonGroup">
        <button className="foodButton" onClick={() => onMoveItem(item)}>
          {moveButtonText}
        </button>
        <button className="trashCan" onClick={() => onDeleteItem(item)}>
          <FontAwesomeIcon icon={faTrash} className="trashCanIcon" />
        </button>
      </div>
    </div>
  );
};

import mongoose from "mongoose";

const { Schema, model } = mongoose;

const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, default: "uncategorized" },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default model("Item", itemSchema);

import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
});

const Category = model("Category", categorySchema);

export default Category;

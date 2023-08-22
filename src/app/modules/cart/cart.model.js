import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  service: {
    type: Object,
    required: true,
  },
});

const Cart = model("Cart", cartSchema);

export default Cart;

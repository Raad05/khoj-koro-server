import { Types } from "mongoose";
import Cart from "./cart.model.js";

export const createCartToDB = async (payload) => {
  const cart = new Cart(payload);
  await cart.save();

  return cart;
};

export const getCartFromDB = async (payload) => {
  const carts = await Cart.find({ userId: payload });

  return carts;
};

export const getCartsOnSearchFromDB = async (payload) => {
  const carts = await Cart.find({ "service.category": payload });

  return carts;
};

export const updateServiceStatusToDB = async (
  servicePayload,
  statusPayload
) => {
  const updatedServiceStatus = await Cart.updateOne({
    _id: new Types.ObjectId(servicePayload),
    $set: { status: statusPayload },
  });

  return updatedServiceStatus;
};

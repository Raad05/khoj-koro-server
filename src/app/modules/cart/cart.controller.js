import {
  createCartToDB,
  getCartFromDB,
  getCartsOnSearchFromDB,
  updateServiceStatusToDB,
} from "./cart.service.js";

export const createCart = async (req, res) => {
  const cart = req.body;
  try {
    const result = await createCartToDB(cart);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Error to add new item.",
      error: err,
    });
  }
};

export const getCart = async (req, res) => {
  const userId = req.params.id;
  try {
    const result = await getCartFromDB(userId);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed to get carts",
      error: err,
    });
  }
};

export const getCartsOnSearch = async (req, res) => {
  const cartsByCategory = req.params.category;
  try {
    const result = await getCartsOnSearchFromDB(cartsByCategory);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed to get carts",
      error: err,
    });
  }
};

export const updatedServiceStatus = async (req, res) => {
  const serviceId = req.params.id;
  const status = req.body.status;
  try {
    const result = await updateServiceStatusToDB(serviceId, status);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed to update service status.",
      error: err,
    });
  }
};

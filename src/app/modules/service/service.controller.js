import {
  getServicesByCategoryFromDB,
  getServicesFromDB,
  orderServiceFromDB,
} from "./service.service.js";

export const getServices = async (req, res) => {
  try {
    const result = await getServicesFromDB();
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      error: err,
    });
  }
};

export const orderService = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await orderServiceFromDB(id);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      error: err,
    });
  }
};

export const getServicesByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const result = await getServicesByCategoryFromDB(category);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: "Error to retrieve categories",
      error: err,
    });
  }
};

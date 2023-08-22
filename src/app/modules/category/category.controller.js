import { getCategoriesFromDB } from "./category.service.js";

export const getCategories = async (req, res) => {
  try {
    const result = await getCategoriesFromDB();
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

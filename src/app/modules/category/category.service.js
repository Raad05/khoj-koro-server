import Category from "./category.model.js";

export const getCategoriesFromDB = async () => {
  const categories = await Category.find({});

  return categories;
};

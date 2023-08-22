import { createAdminToDB, getAdminsFromDB } from "./admin.service.js";

export const createAdmin = async (req, res) => {
  try {
    const admin = req.body;
    const result = await createAdminToDB(admin);
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

export const getAdmins = async (req, res) => {
  try {
    const result = await getAdminsFromDB();
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

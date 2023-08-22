import {
  createProviderToDB,
  getProvidersFromDB,
  loginProviderFromDB,
} from "./provider.service.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const createProvider = async (req, res) => {
  try {
    const provider = req.body;
    const result = await createProviderToDB(provider);
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

export const getProviders = async (req, res) => {
  try {
    const result = await getProvidersFromDB();
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

export const loginProvider = async (req, res) => {
  try {
    const provider = req.body;
    const result = await loginProviderFromDB(provider);
    if (result) {
      const token = jwt.sign(
        { id: result._id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );
      res.status(200).json({
        status: "success",
        data: result,
        token: token,
      });
    } else {
      res.status(404).json({
        status: "Failed",
        error: "No provider found",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      error: err,
    });
  }
};

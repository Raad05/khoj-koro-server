import {
  createUserToDB,
  getUsersFromDB,
  loginUserFromDB,
} from "./users.service.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const createUser = async (req, res) => {
  try {
    const user = req.body;
    const result = await createUserToDB(user);
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

export const getUsers = async (req, res) => {
  try {
    const result = await getUsersFromDB();
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

export const loginUser = async (req, res) => {
  try {
    const user = req.body;
    const result = await loginUserFromDB(user);
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
        error: "No user found",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      error: err,
    });
  }
};

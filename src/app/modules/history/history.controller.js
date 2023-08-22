import {
  createHistoryToDB,
  getProviderHistoriesFromDB,
  getUserHistoriesFromDB,
} from "./history.service.js";

export const createHistory = async (req, res) => {
  const history = req.body;
  try {
    const result = await createHistoryToDB(history);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      status: "Failed to create history.",
      error: err,
    });
  }
};

export const getUserHistories = async (req, res) => {
  const name = req.params.user;
  try {
    const result = await getUserHistoriesFromDB(name);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      status: "Failed to fetch history.",
      error: err,
    });
  }
};

export const getProviderHistories = async (req, res) => {
  const name = req.params.provider;
  try {
    const result = await getProviderHistoriesFromDB(name);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      status: "Failed to fetch history.",
      error: err,
    });
  }
};

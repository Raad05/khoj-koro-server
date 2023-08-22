import History from "./history.model.js";

export const createHistoryToDB = async (payload) => {
  const history = new History(payload);
  await history.save();

  return history;
};

export const getUserHistoriesFromDB = async (payload) => {
  const history = await History.find({ user: payload });

  return history;
};

export const getProviderHistoriesFromDB = async (payload) => {
  const history = await History.find({ provider: payload });

  return history;
};

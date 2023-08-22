import User from "./users.model.js";

export const createUserToDB = async (payload) => {
  const user = new User(payload);
  await user.save();

  return user;
};

export const getUsersFromDB = async () => {
  const users = await User.find({});

  return users;
};

export const loginUserFromDB = async (payload) => {
  const user = await User.findOne(payload);

  return user;
};

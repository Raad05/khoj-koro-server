import Admin from "./admin.model.js";

export const createAdminToDB = async (payload) => {
  const admin = new Admin(payload);
  await admin.save();

  return admin;
};

export const getAdminsFromDB = async () => {
  const admins = await Admin.find({});

  return admins;
};

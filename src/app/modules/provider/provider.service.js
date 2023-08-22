import Provider from "./provider.model.js";

export const createProviderToDB = async (payload) => {
  const provider = new Provider(payload);
  await provider.save();

  return provider;
};

export const getProvidersFromDB = async () => {
  const providers = await Provider.find({});

  return providers;
};

export const loginProviderFromDB = async (payload) => {
  const provider = await Provider.findOne(payload);

  return provider;
};

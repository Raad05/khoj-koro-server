import { Types } from "mongoose";
import Service from "./service.model.js";

export const getServicesFromDB = async () => {
  const services = await Service.find({});

  return services;
};

export const orderServiceFromDB = async (payload) => {
  const service = await Service.findOne({ _id: new Types.ObjectId(payload) });

  return service;
};

export const getServicesByCategoryFromDB = async (payload) => {
  const category = await Service.find({ category: payload });

  return category;
};

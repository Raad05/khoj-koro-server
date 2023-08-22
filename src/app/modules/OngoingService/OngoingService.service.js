import { Types } from "mongoose";
import OngoingService from "./OngoingService.model.js";

export const createOngoingServiceToDB = async (payload) => {
  const ongoingService = new OngoingService(payload);
  ongoingService.save();

  return ongoingService;
};

export const getOngoingServiceFromDB = async (payload) => {
  const ongoingService = await OngoingService.findOne({ userId: payload });

  return ongoingService;
};

export const getProviderServicesFromDB = async (payload) => {
  const providerServices = await OngoingService.findOne({
    providerId: payload,
  });

  return providerServices;
};

// export const updateStatusToDB = async (servicePayload, statusPayload) => {
//   const updatedStatus = await OngoingService.updateOne({
//     _id: new Types.ObjectId(servicePayload),
//     $set: { status: statusPayload },
//   });

//   return updatedStatus;
// };

export const deleteServiceFromDB = async (payload) => {
  const service = await OngoingService.deleteOne({
    _id: new Types.ObjectId(payload),
  });

  return service;
};

import {
  createOngoingServiceToDB,
  deleteServiceFromDB,
  getOngoingServiceFromDB,
  getProviderServicesFromDB,
} from "./OngoingService.service.js";

export const createOngoingService = async (req, res) => {
  const ongoingService = req.body;
  try {
    const result = await createOngoingServiceToDB(ongoingService);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed to add ongoing service.",
      error: err,
    });
  }
};

export const getOngoingService = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await getOngoingServiceFromDB(id);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed to fetch ongoing service.",
      error: err,
    });
  }
};

export const getProviderServices = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await getProviderServicesFromDB(id);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed to fetch provider service.",
      error: err,
    });
  }
};

// export const updateStatus = async (req, res) => {
//   const id = req.params.id;
//   const status = req.body.status;
//   try {
//     const result = await updateStatusToDB(id, status);
//     res.status(200).json({
//       status: "success",
//       data: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "Failed to update service status.",
//       error: err,
//     });
//   }
// };

export const deleteService = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await deleteServiceFromDB(id);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed to update service status.",
      error: err,
    });
  }
};

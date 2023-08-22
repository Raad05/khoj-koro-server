import { Router } from "express";
import {
  createOngoingService,
  deleteService,
  getOngoingService,
  getProviderServices,
} from "./OngoingService.controller.js";

const router = Router();

router.post("/createOngoingService", createOngoingService);
router.get("/getOngoingService/:id", getOngoingService);
router.get("/getProviderServices/:id", getProviderServices);
// router.patch("/updateStatus/:id", updateStatus);
router.delete("/deleteService/:id", deleteService);

export default router;

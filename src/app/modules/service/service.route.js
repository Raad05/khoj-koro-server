import { Router } from "express";
import {
  getServices,
  getServicesByCategory,
  orderService,
} from "./service.controller.js";

const router = Router();

router.get("/services", getServices);
router.get("/order-service/:id", orderService);
router.get("/services/category/:category", getServicesByCategory);

export default router;

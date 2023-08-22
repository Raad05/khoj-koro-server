import { Router } from "express";
import {
  createCart,
  getCart,
  getCartsOnSearch,
  updatedServiceStatus,
} from "./cart.controller.js";

const router = Router();

router.post("/createCart", createCart);
router.get("/cart/:id", getCart);
router.get("/servicesOnSearch/:category", getCartsOnSearch);
router.patch("/updateServiceStatus/:id", updatedServiceStatus);

export default router;

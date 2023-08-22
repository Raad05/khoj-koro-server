import { Router } from "express";
import {
  createProvider,
  getProviders,
  loginProvider,
} from "./provider.controller.js";

const router = Router();

router.post("/createProvider", createProvider);
router.get("/providers", getProviders);
router.post("/providerLogin", loginProvider);

export default router;

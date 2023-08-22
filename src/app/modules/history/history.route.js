import { Router } from "express";
import {
  createHistory,
  getProviderHistories,
  getUserHistories,
} from "./history.controller.js";

const router = Router();

router.post("/createHistory", createHistory);
router.get("/userHistories/:user", getUserHistories);
router.get("/providerHistories/:provider", getProviderHistories);

export default router;

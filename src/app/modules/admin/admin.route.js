import { Router } from "express";
import { createAdmin, getAdmins } from "./admin.controller.js";

const router = Router();

router.post("/createAdmin", createAdmin);
router.get("/admins", getAdmins);

export default router;

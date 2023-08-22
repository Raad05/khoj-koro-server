import { Router } from "express";
import { createUser, getUsers, loginUser } from "./users.controller.js";

const router = Router();

router.post("/createUser", createUser);
router.get("/users", getUsers);
router.post("/userLogin", loginUser);

export default router;

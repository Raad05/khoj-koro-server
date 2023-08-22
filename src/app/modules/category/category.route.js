import { Router } from "express";
import { getCategories } from "./category.controller.js";

const router = Router();

router.get("/categories", getCategories);

export default router;

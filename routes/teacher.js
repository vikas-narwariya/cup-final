import express from "express";
const router = express.Router();

import { getTeacher, tsignin, tsignup } from "../controllers/teacher.js";

router.post("/tsignin", tsignin);
router.post("/tsignup", tsignup);
router.get("/teacher", getTeacher);

export default router;
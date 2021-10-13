import express from "express";
const router = express.Router();

import { asignin, asignup, getAdmin } from "../controllers/admin.js";

router.post("/asignin", asignin);
router.post("/asignup", asignup);
router.get("/admin", getAdmin);

export default router;
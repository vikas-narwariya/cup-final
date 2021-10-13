
import express from "express";
const router = express.Router();

import { assignment, getassignment, commentassignment } from "../controllers/uploadAssignment.js";

router.post("/uploadassignment", assignment);
router.get("/getassignment", getassignment);
router.post("/getassignment/:id/commentupload", commentassignment);

export default router;
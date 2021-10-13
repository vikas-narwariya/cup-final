import express from "express";
const router = express.Router();

import { postcomment, getcomment } from "../controllers/comment.js";

router.post("/comment", postcomment);

router.get("/getcomment", getcomment);
export default router;
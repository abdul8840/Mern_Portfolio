import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createrating } from "../controllers/rating.controller.js";

const router = express.Router();

router.post('/createrating', verifyToken, createrating)

export default router;
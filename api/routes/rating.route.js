import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createrating, getrating } from "../controllers/rating.controller.js";

const router = express.Router();

router.post('/createrating', verifyToken, createrating);
router.get('/getratings', getrating);

export default router;
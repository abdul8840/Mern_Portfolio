import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createservice } from '../controllers/service.controller.js';

const router = express.Router();

router.post('/createservice', verifyToken, createservice);

export default router;
import express from "express";
import { verifyToken } from '../utils/verifyUser.js';
import { createskill } from '../controllers/skill.controller.js';

const router = express.Router();

router.post('/createskill', verifyToken, createskill);

export default router;
import express from "express";
import { verifyToken } from '../utils/verifyUser.js';
import { createskill, getskills } from '../controllers/skill.controller.js';

const router = express.Router();

router.post('/createskill', verifyToken, createskill);
router.get('/getskills', getskills);

export default router;
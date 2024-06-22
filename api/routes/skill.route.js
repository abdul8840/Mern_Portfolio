import express from "express";
import { verifyToken } from '../utils/verifyUser.js';
import { createskill, getskills, deleteskill } from '../controllers/skill.controller.js';

const router = express.Router();

router.post('/createskill', verifyToken, createskill);
router.get('/getskills', getskills);
router.delete('/deleteskill/:postId/:userId', verifyToken, deleteskill)

export default router;
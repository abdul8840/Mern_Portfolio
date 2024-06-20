import express from "express";
import { test, updatUser } from '../controllers/user.controller.js'
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.put('/getupdate/:userId',verifyToken, updatUser)

export default router;
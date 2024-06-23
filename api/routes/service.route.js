import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createservice, getservices } from '../controllers/service.controller.js';

const router = express.Router();

router.post('/createservice', verifyToken, createservice);
router.get('/getservices', getservices);

export default router;
import express from "express";
import { sendApply } from "../controllers/appliesController";

const router = express.Router();

router.post("/contact", sendApply);

export default router;

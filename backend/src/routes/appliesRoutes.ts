import express from "express";
import { postApply } from "../controllers/appliesController";

const router = express.Router();

router.post("/upload", postApply);

export default router;

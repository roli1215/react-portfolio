import express from "express";
import { login, me } from "../controllers/authController";
import { auth } from "../middlewares/auth";

const router = express.Router();

router.post("/login", login);
router.get("/me", auth, me);

export default router;

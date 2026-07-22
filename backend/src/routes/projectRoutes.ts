import { Router } from "express";

import { createProject, deleteProject, getProjects, updateProject, uploadProjectImage } from "../controllers/projectController";

import { auth } from "../middlewares/auth";
import upload from "../middlewares/upload";

const router = Router();

router.get("/projects", getProjects);

router.post("/projects", auth, createProject);
router.post("/upload", auth, upload.single("image"), uploadProjectImage);

router.delete("/projects/:id", auth, deleteProject);

router.put("/projects/:id", auth, updateProject);

export default router;

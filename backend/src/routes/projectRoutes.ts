import express from 'express';
import { getProjects, createProject, uploadImage } from '../controllers/projectController';

const router = express.Router();

router.get('/projects', getProjects);
router.post('/projects', createProject);
router.post('/upload-image', uploadImage);

export default router;

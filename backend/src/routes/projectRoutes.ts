import express from 'express';
import { getProjects, createProject, uploadProjectImage } from '../controllers/projectController';
import upload from '../middlewares/upload';

const router = express.Router();

router.get('/projects', getProjects);
router.post('/projects', createProject);
router.post(
    '/upload',
    upload.single('image'),
    uploadProjectImage
);

export default router;

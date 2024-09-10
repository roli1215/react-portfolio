import express from 'express';


const router = express.Router();
const multer = require('multer')

router.get('/projects')
router.post('/projects/upload', multer().single('file'), );

export default router; 
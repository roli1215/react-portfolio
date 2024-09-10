import express from 'express';
import { getApplies } from '../controllers/appliesController';
import { postApply } from '../controllers/appliesController';

const router = express.Router();

router.get('/applies', getApplies);
router.post('/applies', postApply);

export default router;
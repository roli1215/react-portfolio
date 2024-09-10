import express from 'express';
import { getApplies } from '../controllers/appliesController';

const router = express.Router();

router.get('/applies', getApplies);

export default router;
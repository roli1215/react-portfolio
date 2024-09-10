import express from 'express';
import cors from 'cors';
import appliesRoutes from './src/routes/appliesRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(appliesRoutes);
export default app;
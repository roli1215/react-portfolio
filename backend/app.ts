import express from 'express';
import cors from 'cors';
import appliesRoutes from './src/routes/appliesRoutes';
import projectRoutes from './src/routes/projectRoutes';
import authRoutes from './src/routes/authRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use(
    "/auth",
    authRoutes
);
app.use(appliesRoutes);
app.use(projectRoutes);
export default app;
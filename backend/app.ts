import express from "express";
import cors from "cors";
import appliesRoutes from "./src/routes/appliesRoutes";
import projectRoutes from "./src/routes/projectRoutes";
import authRoutes from "./src/routes/authRoutes";
import rateLimit from "express-rate-limit";

const app = express();
const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
});

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/auth", authRoutes);
app.use("/applies", appliesRoutes, contactLimiter);
app.use(projectRoutes);
export default app;

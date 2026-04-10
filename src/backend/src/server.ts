import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db";
import authRoutes from "./routes/auth";
import doctorsRoutes from "./routes/doctors";
import hospitalsRoutes from "./routes/hospitals";
import appointmentsRoutes from "./routes/appointments";
import blogsRoutes from "./routes/blogs";
import { errorHandler, notFound } from "./middleware/errorHandler";

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(morgan("dev"));

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorsRoutes);
app.use("/api/hospitals", hospitalsRoutes);
app.use("/api/appointments", appointmentsRoutes);
app.use("/api/blogs", blogsRoutes);

// ─── Health check ─────────────────────────────────────────────────────────────
app.get("/api/health", (_req, res) => {
  res.json({ success: true, message: "GyneCare API is running" });
});

// ─── Error handling ───────────────────────────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

// ─── Start ────────────────────────────────────────────────────────────────────
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV || "development"} mode`);
  });
});

export default app;

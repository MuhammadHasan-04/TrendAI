// server.js - UPDATED CORS CONFIG
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { sequelize } from "./config/db.js";

import authRouter from "./routes/auth.js";
import generateRouter from "./routes/generated.js";
import trendsRouter from "./routes/trends.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"], // Allow both localhost addresses
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/generate", generateRouter);
app.use("/api/trends", trendsRouter);

// Health check
app.get("/", (req, res) => {
  res.json({
    message: "TrendAI Backend API",
    status: "running",
    timestamp: new Date().toISOString(),
  });
});

app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal server error" });
});

const PORT = process.env.PORT || 3000;

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("✅ Database synced");

    app.listen(PORT, "0.0.0.0", () => {
      // Listen on all network interfaces
      console.log(`✅ Backend running on:`);
      console.log(`   http://localhost:${PORT}`);
      console.log(`   http://127.0.0.1:${PORT}`);
      console.log(`✅ Frontend should connect from: http://localhost:5173`);
    });
  })
  .catch((err) => {
    console.error("❌ Database error:", err);
  });

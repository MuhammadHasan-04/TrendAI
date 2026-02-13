import express from "express";
import jwt from "jsonwebtoken";
import { authMiddleware } from "../middleware/authmiddleware.js";
import { GeneratedContent } from "../models/GeneratedContent.js";
import { generatedContent } from "../services/aiService.js";
import {
  getYoutubeTrends,
  getGoogleTrends,
  getNewsTrends,
} from "../services/trendService.js";

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  const { topic, platform, tone } = req.body;

  try {
    const record = await GeneratedContent.create({
      topic,
      platform,
      tone,
      ai_text: "",
      status: "pending",
      UserId: req.user.userId,
    });

    const ai = await generatedContent({ topic, platform, tone });

    record.ai_text = ai;
    record.status = "completed";
    await record.save();

    res.json({
      message: "Content generated",
      content: ai,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/userGenerated", authMiddleware, async (req, res) => {
  try {
    const userGenerated = await GeneratedContent.findAll({
      where: { userId: req.user.userId },
      order: [["createdAt", "DESC"]],
    });

    res.json(userGenerated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

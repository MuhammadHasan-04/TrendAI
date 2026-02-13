import express from "express";

const router = express.Router();

import {
  getYoutubeTrends,
  getGoogleTrends,
  getNewsTrends,
} from "../services/trendService.js";

router.get("/", async (req, res) => {
  try {
    const [yt, google, news] = await Promise.all([
      getYoutubeTrends(),
      getGoogleTrends(),
      getNewsTrends(),
    ]);

    res.json([...yt, ...google, ...news]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/youtube", async (req, res) => {
  try {
    const yt = await getYoutubeTrends();
    res.json(yt);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/news", async (req, res) => {
  try {
    const yt = await getNewsTrends();
    res.json(yt);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
export default router;

import axios from "axios";
import googleTrends from "google-trends-api";

async function getYoutubeTrends() {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=US&key=${apiKey}`;
    const res = await axios.get(url);

    if (!res.data.items) return [];

    return res.data.items.map((item) => ({
      platform: "YouTube",
      topic: item.snippet?.title || "Untitled",
      description: item.snippet?.description || "No description available",
    }));
  } catch (err) {
    console.error("Error fetching YouTube trends:", err.message);
    return [];
  }
}

async function getGoogleTrends() {
  try {
    const results = await googleTrends.realTimeTrends({
      geo: "US",
      category: "all",
    });
    const data = JSON.parse(results);

    if (!data?.storySummaries?.trendingStories) return [];

    return data.storySummaries.trendingStories.map((item) => ({
      platform: "Google",
      topic: item.title?.query || "Unknown",
    }));
  } catch (err) {
    console.error("Error fetching Google trends:", err.message);
    return [];
  }
}

async function getNewsTrends() {
  try {
    const apiKey = process.env.NEWS_API_KEY;

    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
    );

    if (!res.data.articles) return [];

    return res.data.articles.map((article) => ({
      platform: "News",
      topic: article.title || "Untitled",
      description: article.description || "No description available",
    }));
  } catch (err) {
    console.error("Error fetching news trends:", err.message);
    return [];
  }
}

export { getGoogleTrends, getYoutubeTrends, getNewsTrends };

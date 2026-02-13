import axios from "axios";

const baseurl = "http://localhost:3000/api";
const token = localStorage.getItem("token");

export const contentGenerator = async (topic, platform, tone) => {
  try {
    if (!token) {
      throw new Error("No authentication token found. Please log in.");
    }

    console.log("Generating content for:", { topic, platform, tone });

    const res = await axios.post(
      `${baseurl}/generate`,
      { topic, platform, tone },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    console.log("Content generated successfully:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error generating content:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    throw error;
  }
};

export const getUserGeneratedHistory = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("gulu   " + token);

    if (!token) {
      throw new Error("No authentication token found. Please log in.");
    }

    console.log("Fetching user generated history...");

    const response = await axios.get(`${baseurl}/generate/userGenerated`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log("History fetched successfully:", response.data.length, "items");
    return response.data;
  } catch (error) {
    console.error("Error fetching history:", error);
    throw error;
  }
};

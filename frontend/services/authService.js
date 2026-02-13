import axios from "axios";

const url = "http://localhost:3000/api/auth";

export const signUp = async (username, email, password) => {
  const res = await axios.post(`${url}/signup`, { username, email, password });
  return res.data;
};

export const loginUser = async (email, password) => {
  const res = await axios.post(`${url}/login`, { email, password });
  return res.data;
};

// services/authService.js
// import axios from "axios";

// // Create axios instance with proper CORS configuration
// const api = axios.create({
//   baseURL: "http://localhost:3000/api", // Base URL for all requests
//   timeout: 10000, // 10 second timeout
//   headers: {
//     "Content-Type": "application/json",
//   },
//   // Add this for CORS with credentials if needed
//   withCredentials: false, // Set to true if using cookies
// });

// export const signUp = async (username, email, password) => {
//   try {
//     const res = await api.post("/auth/signup", {
//       username,
//       email,
//       password,
//     });
//     console.log(" Signup successful:", res.data);
//     return res.data;
//   } catch (error) {
//     console.error(" Signup error:", {
//       message: error.message,
//       response: error.response?.data,
//       status: error.response?.status,
//     });
//     throw error;
//   }
// };

// export const loginUser = async (email, password) => {
//   try {
//     console.log("📤 Attempting login for:", email);

//     const res = await api.post("/auth/login", {
//       email,
//       password,
//     });

//     console.log(" Login successful:", {
//       token: res.data.token ? "✓ Received" : "✗ Missing",
//       username: res.data.username,
//     });

//     return res.data;
//   } catch (error) {
//     console.error(" Login failed:", {
//       message: error.message,
//       code: error.code,
//       status: error.response?.status,
//       data: error.response?.data,
//       // Check if it's a CORS error
//       isCorsError:
//         error.message.includes("CORS") ||
//         error.message.includes("Access-Control") ||
//         error.code === "ERR_NETWORK",
//     });

//     // Provide user-friendly error message
//     if (error.code === "ERR_NETWORK") {
//       throw new Error(
//         "Cannot connect to server. Please check:\n1. Backend is running\n2. No CORS errors in console",
//       );
//     }

//     throw error;
//   }
// };

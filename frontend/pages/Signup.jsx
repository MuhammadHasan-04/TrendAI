import { useState } from "react";
import { signUp } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FiTrendingUp, FiEye, FiEyeOff } from "react-icons/fi";

export function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      const res = await signUp(
        formData.username,
        formData.email,
        formData.password,
      );
      console.log(res);
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch {
      alert("Signup failed. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="w-full flex flex-col items-center mb-12">
          <div className="flex items-center space-x-3">
            <FiTrendingUp
              className="text-blue-400 w-6 h-6 animate-pulse cursor-pointer"
              onClick={() => navigate("/")}
            />
            <h1 className="text-3xl font-bold text-white tracking-tight drop-shadow-md font-display ">
              TrendAI
            </h1>
          </div>
          <p className="text-slate-400 mt-3 text-center text-sm">
            Create your account and start generating content
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="flex gap-6 text-sm font-semibold text-slate-400 border-b border-white/10 pb-3">
            <button
              type="button"
              className="hover:text-[#06bcf9] transition-colors"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              type="button"
              className="text-[#06bcf9] border-b-2 border-[#06bcf9] pb-2"
            >
              Signup
            </button>
          </div>

          <div className="flex flex-col space-y-3">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Choose a username"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#06bcf9]/40 focus:border-[#06bcf9] transition-all duration-300"
            />
          </div>

          <div className="flex flex-col space-y-3">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#06bcf9]/40 focus:border-[#06bcf9] transition-all duration-300"
            />
          </div>

          <div className="flex flex-col space-y-3 relative">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 pr-12 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#06bcf9]/40 focus:border-[#06bcf9] transition-all duration-300"
            />
            <button
              type="button"
              className="absolute right-4 top-[38px] text-slate-400 hover:text-white transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <div className="flex flex-col space-y-3 relative">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Confirm Password
            </label>
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 pr-12 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#06bcf9]/40 focus:border-[#06bcf9] transition-all duration-300"
            />
            <button
              type="button"
              className="absolute right-4 top-[38px] text-slate-400 hover:text-white transition-colors"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-2xl font-semibold bg-gradient-to-r from-[#06bcf9] to-[#4884ee] shadow-[0_0_25px_rgba(6,188,249,0.35)] hover:shadow-[0_0_35px_rgba(6,188,249,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-6"
          >
            Sign Up
          </button>

          <p className="text-slate-400 text-sm text-center mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#06bcf9] cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

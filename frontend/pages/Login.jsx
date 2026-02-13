import { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { FiTrendingUp, FiEye, FiEyeOff } from "react-icons/fi";

export function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(formData.email, formData.password);
      localStorage.setItem("token", res.token);
      console.log("token" + res.token);
      localStorage.setItem("username", res.username);
      navigate("/trending");
    } catch {
      alert("Login failed. Check your email and password.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="w-full flex flex-col items-center mb-10">
          <div className="flex items-center space-x-3">
            <FiTrendingUp
              className="text-blue-400 w-6 h-6 animate-pulse cursor-pointer"
              onClick={() => navigate("/")}
            />
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-md font-display ">
              TrendAI
            </h1>
          </div>
          <p className="text-slate-400 mt-3 text-center text-sm">
            An AI Powered Content Generator
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl"
        >
          <div className="flex gap-6 text-sm font-semibold text-slate-400 border-b border-white/10 pb-3">
            <button
              type="button"
              className="text-[#06bcf9] border-b-2 border-[#06bcf9] pb-2 "
            >
              Login
            </button>

            <button
              type="button"
              className="hover:text-[#06bcf9] transition-colors"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
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
              className="
              w-full
              bg-white/5
              border border-white/10
              rounded-2xl
              px-5 py-3
              text-sm text-white
              placeholder:text-slate-500
              focus:outline-none
              focus:ring-2 focus:ring-[#06bcf9]/40
              focus:border-[#06bcf9]
              transition-all duration-300
            "
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
              placeholder="Password"
              required
              className="
              w-full
              bg-white/5
              border border-white/10
              rounded-2xl
              px-5 py-3
              text-sm text-white
              placeholder:text-slate-500
              focus:outline-none
              focus:ring-2 focus:ring-[#06bcf9]/40
              focus:border-[#06bcf9]
              transition-all duration-300
            "
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[30px] text-slate-400 hover:text-white "
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <button
            type="submit"
            className="
            w-full
            py-3.5
            rounded-2xl
            font-semibold
            bg-gradient-to-r from-[#06bcf9] to-[#4884ee]
            shadow-[0_0_25px_rgba(6,188,249,0.35)]
            hover:shadow-[0_0_35px_rgba(6,188,249,0.55)]
            hover:scale-[1.02]
            active:scale-[0.98]
            transition-all duration-300
          "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

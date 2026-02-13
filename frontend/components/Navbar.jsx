import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiZap,
  FiClock,
  FiTrendingUp,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";

export const Navbar = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // close mobile menu after click
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <>
      <header className="w-full px-6 md:px-12 lg:px-20 py-5 flex justify-between items-center border-b border-white/10 backdrop-blur-xl bg-white/5">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavigate("/")}
        >
          <div className="p-2 rounded-xl bg-blue-400/10 group-hover:bg-blue-400/20 transition">
            <FiTrendingUp className="text-blue-400 w-5 h-5" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-white">
            Trend<span className="text-blue-400">AI</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => handleNavigate("/login")}
                className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
              >
                Login
              </button>

              <button
                onClick={() => handleNavigate("/signup")}
                className="px-5 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#06bcf9] to-[#4884ee] text-white hover:from-[#4884ee] hover:to-[#06bcf9]"
              >
                SignUp
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleNavigate("/generate")}
                className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
              >
                <FiZap className="w-4 h-4" />
                Generate
              </button>

              <button
                onClick={() => handleNavigate("/history")}
                className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
              >
                <FiClock className="w-4 h-4" />
                History
              </button>

              <div className="h-6 w-px bg-white/20" />

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-sm font-medium text-red-400 hover:text-red-300 transition-colors"
              >
                <FiLogOut className="w-4 h-4" />
                Logout
              </button>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="md:hidden px-6 py-6 space-y-4 bg-[#0f1117] border-b border-white/10">
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => handleNavigate("/login")}
                className="block w-full text-left text-white hover:text-blue-400"
              >
                Login
              </button>

              <button
                onClick={() => handleNavigate("/signup")}
                className="block w-full text-left text-white hover:text-blue-400"
              >
                SignUp
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleNavigate("/generate")}
                className="block w-full text-left text-white hover:text-blue-400"
              >
                Generate
              </button>

              <button
                onClick={() => handleNavigate("/history")}
                className="block w-full text-left text-white hover:text-blue-400"
              >
                History
              </button>

              <button
                onClick={handleLogout}
                className="block w-full text-left text-red-400"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

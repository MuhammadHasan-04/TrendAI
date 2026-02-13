import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import TrendingPanel from "../components/Trending";
import { FiTrendingUp } from "react-icons/fi";

const TrendingTopics = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  console.log(isLoggedIn);
  const [platform, setPlatform] = useState("all");
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div className="px-8 lg:px-20">
        <div className="mt-10 flex flex-col items-center  gap-3 sm:flex sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[#06bcf9] text-5xl font-bold mb-6">.</span>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Live Trend Feeds
            </h1>
          </div>

          <div className="">
            <input
              type="text"
              placeholder="Search trends, keywords, or topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white/5 rounded-3xl py-1 px-5 hover:border hover:border-white/10 w-80 sm:py-2 sm:px-7 md:px-10"
            />
          </div>
        </div>

        <div className="flex flex-row gap-4 mt-4">
          <button
            onClick={() => setPlatform("all")}
            className="bg-white/5 backdrop-blur-md rounded-3xl px-2 py-1 hover:bg-[#06bcf9] transition-all duration-300 border border-white/10 sm:px-3 sm:py-1 md:px-4 sm:text-md text-sm"
          >
            All Platforms
          </button>
          <button
            onClick={() => setPlatform("youtube")}
            className="bg-white/5 backdrop-blur-md rounded-3xl px-4 py-1 hover:bg-[#06bcf9] transition-all duration-300 border border-white/10 sm:px-3 sm:py-1 md:px-4 sm:text-md text-sm"
          >
            Youtube
          </button>
          <button
            onClick={() => setPlatform("news")}
            className="bg-white/5 backdrop-blur-md rounded-3xl px-4 py-1 hover:bg-[#06bcf9] transition-all duration-300 border border-white/10 sm:px-3 sm:py-1 md:px-4 sm:text-md text-sm"
          >
            News
          </button>
        </div>

        <div className="mt-10">
          <TrendingPanel platform={platform} search={search} />
        </div>
      </div>

      <footer className="mt-28 border-t border-white/10 bg-[#0c0e13]">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:items-center">
          <div className="text-slate-500 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2">
              <FiTrendingUp className=" text-blue-400 w-4 h-4 group-hover:scale-110 transition-transform duration-300 sm:w-5 sm:h-5 md:w-6 md:h-6 " />
              <p className="text-base font-semibold text-white">TrendAI</p>
            </div>

            <p className="text-xs mt-2">Content Generation AI Engine</p>
          </div>

          <div className="text-slate-500 text-sm flex gap-6 ">
            <a className="hover:text-[#06bcf9]" href="#">
              Github
            </a>
            <a className="hover:text-[#06bcf9]" href="#">
              LinkedIn
            </a>
            <a className="hover:text-[#06bcf9]" href="#">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrendingTopics;

import React from "react";
import { FiTrendingUp, FiSearch } from "react-icons/fi";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { HiSparkles, HiOutlineChartBar } from "react-icons/hi";
import { useState } from "react";

export const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    // <div className="mx-20 mt-4">
    //   <nav className="flex justify-between">
    //     <div className="flex items-center gap-3">
    //       <FiTrendingUp className="font-bold text-blue-400 w-6 h-6 animate-pulse cursor-pointer" />
    //       <h1 className="text-4xl text-black font-bold tracking-tighter">
    //         TrendAI
    //       </h1>
    //     </div>
    //     <div className="items-center ">
    //       <button className="bg-blue-400 py-1 px-3 rounded-2xl">Login</button>
    //       <button className="bg-blue-400 py-1 px-3 rounded-2xl">Signup</button>
    //     </div>
    //   </nav>
    // </div>

    <div className="min-h-screen bg-[#0f1117] text-white">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div className="mt-20 text-center px-6">
        <h1 className="text-4xl md:text-7xl sm:text-5xl font-black mb-6 tracking-tight leading-[1.1] max-w-4xl mx-auto">
          Turn Trends Into{" "}
          <span className="bg-gradient-to-r from-[#ffffff] via-[#56b0da] to-[#06bcf9] bg-clip-text text-transparent">
            High-Performing
          </span>{" "}
          in Seconds
        </h1>

        <p className="text-ms md:text-xl sm:text-lg text-slate-400 max-w-2xl mx-auto mb-9 sm:mb-10 md:mb-12 leading-relaxed">
          A premium conceptual engine leveraging real-time data and advanced
          LLMs to bridge the gap between market signal and brand story.
        </p>

        <button
          onClick={() => navigate("/signup")}
          className="rounded-xl text-sm font-semibold py-2.5 px-6 border border-[#06bcf9] text-[#06bcf9] transition-all duration-300 hover:bg-[#06bcf9] hover:text-black hover:border-[#06bcf9]"
        >
          Get Started
        </button>
      </div>

      <div className="max-w-2xl mx-auto mt-20 px-6 sm:max-w-4xl">
        <div className="h-px w-full bg-[#06bcf9]/40  "></div>
        <div className="mt-6 flex justify-center gap-3 sm:text-sm  tracking-[0.2em] text-[#06bcf9]/60 uppercase text-xs">
          <span>Trending Topics</span>
          <span className="text-white/20">|</span>
          <span>Real-time Discovery</span>
          <span className="text-white/20">|</span>
          <span>AI Content Generation</span>
        </div>
      </div>

      {/* <div className="max-w-6xl mx-auto mt-20 px-6">
        <h1 className="font-semibold text-3xl tracking-tight">
          Core Competencies
        </h1>
        <p className="text-slate-500 mt-2">
          A deep dive into Technical Pillars that powers the TrendAI Ecosystem
        </p>
      </div> */}

      <div className="max-w-6xl mx-auto mt-16 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
        <div className="w-full h-52 p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/10 hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <FiSearch className="text-blue-400 text-xl" />
          </div>

          <h3 className="font-bold text-lg mb-2 tracking-tighter ">
            Trend Intelligence
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Early-stage trend detection across major social platforms and search
            queries using neural signal processing
          </p>
        </div>
        <div className="w-full h-52 p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/10 hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <HiSparkles className="text-blue-400 text-xl" />
          </div>
          <h3 className="font-bold text-lg mb-2 tracking-tighter">
            AI Content
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Generate contextually optimized video scripts, social posts, and ad
            copy that align with current market velocity.
          </p>
        </div>
        <div className="w-full h-52 p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/10 hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <HiOutlineChartBar className="text-blue-400 text-xl" />
          </div>
          <h3 className="font-bold text-lg mb-2 tracking-tighter">Insights</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Analyze engagement patterns and trend velocity to uncover
            opportunities that maximize reach and impact.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-28 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          How It Works
        </h1>
        <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
          A streamlined pipeline that transforms raw market signals into
          high-performing content.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-28 text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#06bcf9]/10 border border-[#06bcf9]/30 text-[#06bcf9] text-xl font-semibold mb-5">
            1
          </div>
          <h2 className="text-xl font-semibold tracking-tight mb-2">
            Discover
          </h2>
          <p className="text-slate-400 max-w-xs">
            Scan global data streams to identify emerging trends tailored to
            your niche.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#06bcf9]/10 border border-[#06bcf9]/30 text-[#06bcf9] text-xl font-semibold mb-5">
            2
          </div>
          <h2 className="text-xl font-semibold tracking-tight mb-2">
            Customize
          </h2>
          <p className="text-slate-400 max-w-xs">
            Input your platform and other creative preferences
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#06bcf9]/10 border border-[#06bcf9]/30 text-[#06bcf9] text-xl font-semibold mb-5">
            3
          </div>
          <h2 className="text-xl font-semibold tracking-tight mb-2">
            Generate
          </h2>
          <p className="text-slate-400 max-w-xs">
            Use advanced LLMs to craft high-converting scripts, posts, and
            campaigns.
          </p>
        </div>
      </div>

      <div className="px-6 mt-24">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#06bcf9] to-[#0388b4] rounded-2xl">
          <div className="px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20 flex flex-col items-center text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-tight">
              Ready to master your Trends?
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-black max-w-2xl">
              Join the Future of Trend Mastery and turn insights into
              high-performing content with us today.
            </p>

            <button
              onClick={() => navigate("/signup")}
              className="mt-8 bg-black text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-white hover:text-black transition-all duration-300"
            >
              Get Started
            </button>
          </div>
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

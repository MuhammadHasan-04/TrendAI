import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { FaYoutube, FaNewspaper } from "react-icons/fa";
import { FiSliders } from "react-icons/fi";
import { contentGenerator } from "../services/GeneratedContent";
import ReactMarkdown from "react-markdown";

export const GenerationPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [platform, setPlatform] = useState("");
  const [tone, setTone] = useState("");
  const [topic, setTopic] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!platform) {
      setError("Please select a platform");
      return;
    }
    if (!tone) {
      setError("Please select a tone");
      return;
    }
    if (!topic.trim()) {
      setError("Please enter a topic");
      return;
    }

    setError("");
    setIsLoading(true);
    setGeneratedContent("");

    try {
      const result = await contentGenerator(topic, platform, tone);

      setGeneratedContent(result.content);
    } catch (err) {
      console.error("Error details:", {
        message: err.message,
        response: err.response?.data,
        status: err.response?.status,
      });
      setError(
        err.response?.data?.error ||
          err.message ||
          "Failed to generate content",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div className="flex flex-col lg:flex-row gap-0 items-stretch min-h-screen">
        {/* Left Panel */}
        <div className="w-full lg:w-[40%] bg-[#1a1d29] p-8 lg:p-12">
          <div>
            <div className="flex flex-col items-start">
              <h1 className="uppercase text-slate-300 text-sm font-bold sm:text-base">
                Target Platform
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm">
                Select where you'll post this content
              </p>
            </div>

            <div className="py-6 flex flex-wrap gap-4 sm:gap-6">
              <div
                onClick={() => setPlatform("custom")}
                className={`cursor-pointer w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 border
                ${
                  platform === "custom"
                    ? "bg-[#06bcf9] border-[#06bcf9] text-white"
                    : "bg-white/5 border-white/10 hover:bg-[#06bcf9]/20 hover:border-[#06bcf9] text-slate-400"
                }`}
              >
                <FiSliders className="text-lg sm:text-2xl" />
                <span className="text-xs sm:text-sm">Custom</span>
              </div>

              <div
                onClick={() => setPlatform("youtube")}
                className={`cursor-pointer w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 border
                ${
                  platform === "youtube"
                    ? "bg-[#06bcf9] border-[#06bcf9] text-white"
                    : "bg-white/5 border-white/10 hover:bg-[#06bcf9]/20 hover:border-[#06bcf9] text-slate-400"
                }`}
              >
                <FaYoutube className="text-lg sm:text-2xl" />
                <span className="text-xs sm:text-sm">Youtube</span>
              </div>

              <div
                onClick={() => setPlatform("news")}
                className={`cursor-pointer w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 border
                ${
                  platform === "news"
                    ? "bg-[#06bcf9] border-[#06bcf9] text-white"
                    : "bg-white/5 border-white/10 hover:bg-[#06bcf9]/20 hover:border-[#06bcf9] text-slate-400"
                }`}
              >
                <FaNewspaper className="text-lg sm:text-2xl" />
                <span className="text-xs sm:text-sm">News</span>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h1 className="uppercase text-slate-300 text-sm font-bold sm:text-base">
              Voice Tone
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm">
              Select the tone of your content
            </p>

            <div className="py-6 flex flex-wrap gap-3">
              {["professional", "witty", "bold", "informative"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={`cursor-pointer px-4 py-2 rounded-full transition-all duration-300 border capitalize text-xs sm:text-sm
                    ${
                      tone === t
                        ? "bg-[#06bcf9] border-[#06bcf9] text-white"
                        : "bg-white/5 border-white/10 hover:bg-[#06bcf9]/20 hover:border-[#06bcf9] text-slate-400"
                    }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h1 className="uppercase text-slate-300 text-sm font-bold sm:text-base">
              Custom Instructions
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mb-4">
              Add more about your chosen topic
            </p>

            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full h-32 p-4 rounded-xl bg-[#0f1117] text-sm text-white placeholder:text-slate-600 focus:ring-2 focus:ring-[#06bcf9] outline-none resize-none transition-all border border-white/10"
              placeholder="e.g. The future of AI in healthcare, sustainable energy trends, productivity tips for remote work..."
            />
          </div>

          {error && (
            <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="mt-6">
            <button
              onClick={handleGenerate}
              disabled={isLoading}
              className={`w-full py-3 rounded-xl font-bold tracking-tight transition-all text-white
                ${
                  isLoading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-[#06bcf9] hover:bg-[#05a8e0]"
                }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Generating...
                </span>
              ) : (
                "Generate"
              )}
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[60%] bg-[#0f1117] p-8 lg:p-12 flex flex-col">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-6 text-slate-200">
              Generated Content
            </h2>

            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-64">
                <svg
                  className="animate-spin h-12 w-12 text-[#06bcf9] mb-4"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <p className="text-slate-400">Generating your content...</p>
              </div>
            ) : generatedContent ? (
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="prose prose-invert max-w-none">
                  <ReactMarkdown
                    components={{
                      h1: ({ node, ...props }) => (
                        <h1
                          className="text-3xl font-bold text-white mb-4 mt-6"
                          {...props}
                        />
                      ),
                      h2: ({ node, ...props }) => (
                        <h2
                          className="text-2xl font-bold text-white mb-3 mt-5"
                          {...props}
                        />
                      ),
                      h3: ({ node, ...props }) => (
                        <h3
                          className="text-xl font-semibold text-white mb-2 mt-4"
                          {...props}
                        />
                      ),
                      p: ({ node, ...props }) => (
                        <p
                          className="text-slate-200 mb-4 leading-relaxed"
                          {...props}
                        />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul
                          className="list-disc list-inside text-slate-200 mb-4 space-y-2"
                          {...props}
                        />
                      ),
                      ol: ({ node, ...props }) => (
                        <ol
                          className="list-decimal list-inside text-slate-200 mb-4 space-y-2"
                          {...props}
                        />
                      ),
                      li: ({ node, ...props }) => (
                        <li className="text-slate-200" {...props} />
                      ),
                      strong: ({ node, ...props }) => (
                        <strong className="font-bold text-white" {...props} />
                      ),
                      em: ({ node, ...props }) => (
                        <em className="italic text-slate-300" {...props} />
                      ),
                      code: ({ node, inline, ...props }) =>
                        inline ? (
                          <code
                            className="bg-white/10 px-1.5 py-0.5 rounded text-[#06bcf9] text-sm"
                            {...props}
                          />
                        ) : (
                          <code
                            className="block bg-white/10 p-4 rounded-lg text-slate-200 text-sm overflow-x-auto"
                            {...props}
                          />
                        ),
                      blockquote: ({ node, ...props }) => (
                        <blockquote
                          className="border-l-4 border-[#06bcf9] pl-4 italic text-slate-300 my-4"
                          {...props}
                        />
                      ),
                      a: ({ node, ...props }) => (
                        <a
                          className="text-[#06bcf9] hover:underline"
                          {...props}
                        />
                      ),
                    }}
                  >
                    {generatedContent}
                  </ReactMarkdown>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(generatedContent);
                    }}
                    className="px-4 py-2 bg-[#06bcf9] hover:bg-[#05a8e0] rounded-lg text-sm font-medium transition-all"
                  >
                    Copy to Clipboard
                  </button>
                  <button
                    onClick={() => {
                      setGeneratedContent("");
                      setTopic("");
                      setPlatform("");
                      setTone("");
                    }}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-all border border-white/10"
                  >
                    Generate New
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-slate-400 text-sm">
                Your AI generated content will appear here...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

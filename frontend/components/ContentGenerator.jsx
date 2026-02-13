import { useState } from "react";
import { useGenerateContent } from "../hooks/userGeneratedContent";

export default function ContentGenerator() {
  const [platform, setPlatform] = useState("Twitter / X Thread");
  const [tone, setTone] = useState("Professional & Authoritative");
  const [topic, setTopic] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  
  const generateMutation = useGenerateContent();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!topic.trim()) return;
    
    setGeneratedContent("");
    
    generateMutation.mutate(
      { 
        topic, 
        platform, 
        tone 
      },
      {
        onSuccess: (data) => {
          setGeneratedContent(data.content);
        }
      }
    );
  };

  const handleCopy = () => {
    if (!generatedContent) return;
    
    navigator.clipboard.writeText(generatedContent)
      .then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        if (copyBtn) {
          const originalText = copyBtn.textContent;
          copyBtn.textContent = "Copied!";
          copyBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
          copyBtn.classList.add('bg-green-600');
          
          setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.classList.remove('bg-green-600');
            copyBtn.classList.add('bg-blue-600', 'hover:bg-blue-700');
          }, 2000);
        }
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="flexbg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Content Generator</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content Type
          </label>
          <select 
            value={platform} 
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={generateMutation.isLoading}
          >
            <option>Twitter / X Thread</option>
            <option>Instagram Post</option>
            <option>LinkedIn Article</option>
            <option>News Article</option>
            <option>Youtube Topics</option>
          </select>
        </div>

        {/* Tone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Desired Tone
          </label>
          <select 
            value={tone} 
            onChange={(e) => setTone(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={generateMutation.isLoading}
          >
            <option>Professional & Authoritative</option>
            <option>Friendly & Conversational</option>
            <option>Educational & Informative</option>
            <option>Persuasive & Sales-Oriented</option>
            <option>Creative & Playful</option>
          </select>
        </div>

        {/* Topic */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Topic
          </label>
          <input 
            type="text" 
            value={topic} 
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter your topic here..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={generateMutation.isLoading}
          />
        </div>

        {/* Generate Button */}
        <button 
          type="submit" 
          disabled={generateMutation.isLoading || !topic.trim()}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {generateMutation.isLoading ? "Generating..." : "Generate Content"}
        </button>
      </form>

      {/* Results Section */}
      <div className="mt-6">
        {generateMutation.isLoading && (
          <div className="border border-gray-200 rounded-md p-8 text-center">
            <div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mb-3"></div>
            <p className="text-gray-600">Generating content...</p>
          </div>
        )}

        {generatedContent && !generateMutation.isLoading && (
          <div className="border border-gray-200 rounded-md p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-gray-800">Generated Content</h3>
              <button
                onClick={handleCopy}
                className="copy-btn bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
              >
                Copy
              </button>
            </div>
            <div className="whitespace-pre-wrap text-gray-700 bg-gray-50 p-3 rounded border border-gray-100">
              {generatedContent}
            </div>
          </div>
        )}

        {!generatedContent && !generateMutation.isLoading && (
          <div className="border border-gray-200 rounded-md p-6 text-center">
            <p className="text-gray-500">Generated content will appear here</p>
          </div>
        )}

        {generateMutation.isError && (
          <div className="border border-red-200 bg-red-50 rounded-md p-4 mt-4">
            <p className="text-red-700 font-medium">Error</p>
            <p className="text-red-600 text-sm">{generateMutation.error.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
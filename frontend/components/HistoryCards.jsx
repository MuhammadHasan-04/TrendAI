import React from "react";
export const HistoryCards = ({ items }) => {
  return (
    <div className="bg-white/5 border border-white/10 text-white backdrop-blur-md w-1/2 rounded-xl p-6">
      <div>
        <h1>{items.ai_text}</h1>
      </div>
    </div>
  );
};

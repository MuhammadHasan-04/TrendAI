import { Navigate, useNavigate } from "react-router-dom";

export default function TrendCard({ item }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-400/20 transition-all group">
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
            {item.platform}
          </span>
          <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2 py-1 rounded">
            <span className="material-icons text-xs">Trending</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {item.topic}
        </h3>

        <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>

      <div className="mt-6">
        <button
          onClick={() => navigate("/generate")}
          className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold py-2.5 px-2 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-400/20 hover:opacity-90 transition-all"
        >
          Generate Content
        </button>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { getUserGeneratedHistory } from "../services/GeneratedContent";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaUserCircle,
  FaSearch,
  FaDownload,
  FaCopy,
} from "react-icons/fa";
import { HistoryCards } from "../components/HistoryCards";

export const UserHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await getUserGeneratedHistory();
      setHistory(res);
    } catch (err) {
      console.error("Error loading History", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(history);

  return (
    <>
      <div className="min-h-screen  bg-[#0f1117] flex justify-center items-center ">
        <div className="bg-white/5">
          {history.map((item) => (
            <div key={item.id} className="mb-4 border border-blue-400">
              <p className="font-bold text-white">{item.topic}</p>
              <p className="text-sm  text-white">{item.platform}</p>
              <p className="text-xs  text-white">{item.tone}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

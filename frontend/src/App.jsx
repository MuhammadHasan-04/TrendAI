import { Routes, Route, Navigate } from "react-router-dom";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";
import { Main } from "../pages/MainPage";
import { UserHistory } from "../pages/UserHistory";
import AppLayout from "../components/AppLayout";
import { Home } from "../pages/Home";
import TrendingTopics from "../pages/TrendingTopics";
import { GenerationPage } from "../pages/GenerationPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trending" element={<TrendingTopics />} />
      <Route element={<AppLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
        <Route path="/generate" element={<GenerationPage />} />
      </Route>
      <Route path="/history" element={<UserHistory />} />
    </Routes>
  );
}

export default App;

import ContentGenerator from "../components/ContentGenerator";
import { Navbar } from "../components/Navbar";
import TrendingPanel from "../components/Trending";

export function Main() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="pt-20">
        <TrendingPanel />
        <ContentGenerator />
      </div>
    </>
  );
}

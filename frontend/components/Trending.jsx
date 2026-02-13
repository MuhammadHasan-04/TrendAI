import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../services/TrendService";
import TrendCard from "../components/TrendingCards";

export default function TrendingPanel({ platform, search }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["trends"],
    queryFn: fetchData,
  });

  if (isLoading)
    return <div className="text-center py-10">Loading trends...</div>;

  if (isError)
    return (
      <div className="text-center py-10 text-red-500">Error loading trends</div>
    );

  // Filter by platform and search text
  const filtered = data.filter((item) => {
    const matchesPlatform =
      platform === "all" || item.platform.toLowerCase() === platform;
    const matchesSearch =
      item.topic.toLowerCase().includes(search.toLowerCase()) ||
      (item.description &&
        item.description.toLowerCase().includes(search.toLowerCase()));
    return matchesPlatform && matchesSearch;
  });

  return (
    <div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {filtered.map((item, index) => (
          <TrendCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

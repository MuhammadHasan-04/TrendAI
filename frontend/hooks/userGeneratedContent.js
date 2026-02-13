import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useGenerateContent = () => {
  const queryClient = useQueryClient();
  const token = localStorage.getItem("token");

  return useMutation({
    mutationFn: async ({ topic, platform, tone }) => {
      const res = await fetch("http://localhost:3000/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ topic, platform, tone }),
      });

      if (!res.ok) throw new Error("Generation failed");

      return res.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["history"]);
    },
  });
};

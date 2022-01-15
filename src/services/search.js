import YoutubeApi, { baseParams } from "./config";

export const search = (query) =>
  YoutubeApi.get("/search", {
    params: {
      ...baseParams({ maxResults: 40, q: query }),
    },
  });

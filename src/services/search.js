import YoutubeApi, { baseParams } from "./config";

export const search = (query) =>
  YoutubeApi.get("/search", {
    params: {
      ...baseParams({ q: query }),
    },
  });

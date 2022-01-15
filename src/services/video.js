import YoutubeApi, { baseParams } from "./config";

export const getVideo = (videoId) =>
  YoutubeApi.get("/videos", {
    params: {
      ...baseParams({ id: videoId }),
    },
  });

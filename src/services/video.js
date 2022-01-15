import YoutubeApi, { baseParams } from "./config";

export const getVideo = (videoId) =>
  YoutubeApi.get("/videos", {
    params: {
      ...baseParams({ id: videoId }),
    },
  });

export const getRelatedVideos = (videoId) =>
  YoutubeApi.get("/search", {
    params: {
      ...baseParams({ type: "video", relatedToVideoId: videoId }),
    },
  });

import YoutubeApi, { baseParams } from "./config";

export const getChannel = (channelId) =>
  YoutubeApi.get("/channels", {
    params: {
      ...baseParams({ id: channelId }),
    },
  });

export const getRelatedVideos = (videoId) =>
  YoutubeApi.get("/search", {
    params: {
      ...baseParams({ type: "video", relatedToVideoId: videoId }),
    },
  });

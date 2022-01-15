import YoutubeApi, { baseParams } from "./config";

export const getChannel = (channelId) =>
  YoutubeApi.get("/channels", {
    params: {
      ...baseParams({ id: channelId }),
    },
  });

export const getChannelPlaylists = (channelId) =>
  YoutubeApi.get("/playlists", {
    params: {
      ...baseParams({ channelId, maxResults: 10 }),
    },
  });

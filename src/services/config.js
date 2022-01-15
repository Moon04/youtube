import axios from "axios";

const KEY = "AIzaSyAc-SQTh0hhY_iwbFv0_YSRN98d6ITOhRI";

export const baseParams = (params) => ({
  part: "snippet",
  // maxResults: 30,
  ...params,
  key: KEY,
});

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

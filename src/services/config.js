import axios from "axios";

// const KEY = "AIzaSyAc-SQTh0hhY_iwbFv0_YSRN98d6ITOhRI";

export const baseParams = (params) => ({
  part: "snippet",
  key: process.env.VUE_APP_API_KEY,
  ...params,
});

export default axios.create({
  baseURL: process.env.VUE_APP_YOUTUBE_API,
});

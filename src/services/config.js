import axios from "axios";

const KEY = "AIzaSyAc-SQTh0hhY_iwbFv0_YSRN98d6ITOhRI";

export const baseParams = (params) => ({
  part: "snippet",
  key: KEY,
  ...params,
});

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

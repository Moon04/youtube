<template>
  <div v-if="!video" class="loading">
    <div class="loader">Loading</div>
  </div>
  <div v-if="video" class="video-details">
    <div className="embed">
      <iframe
        v-bind:src="videoSrc"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        v-bind:title="video.snippet.title"
        allowFullScreen="true"
      >
      </iframe>
    </div>
    <div className="details">
      <a v-bind:href="video.snippet.title" className="title">
        {{ video.snippet.title }}
      </a>
      <div className="channel">{{ video.snippet.channelTitle }}</div>
    </div>
    <hr />
  </div>
</template>

<script>
import { getVideo } from "@/services/video";

export default {
  name: "VideoDetails",
  data() {
    return {
      video: null,
      videoSrc: "https://www.youtube.com/embed/",
    };
  },
  beforeCreate() {
    getVideo(this.$route.params.id).then(({ data }) => {
      this.video = data.items[0];
      this.videoSrc = this.videoSrc + data.items[0].id.videoId;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/views/videoDetails.scss";
</style>

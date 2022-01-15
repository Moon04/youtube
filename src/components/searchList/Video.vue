<template>
  <router-link
    :to="{ name: 'VideoDetails', params: { id: video.id.videoId } }"
    class="video"
  >
    <img
      v-bind:alt="video.snippet.title"
      v-bind:src="video.snippet.thumbnails.medium.url"
    />
    <div class="content">
      <a class="title" v-bind:href="video.snippet.title">
        {{ video.snippet.title }}</a
      >
      <div class="channel">{{ video.snippet.channelTitle }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Video",
  props: ["video"],
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/searchList/video.scss";
</style>

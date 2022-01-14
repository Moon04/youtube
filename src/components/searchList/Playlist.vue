<template>
  <div></div>
  <div class="playlist">
    <img
      v-bind:alt="playlist.snippet.title"
      v-bind:src="playlist.snippet.thumbnails.medium.url"
    />
    <div class="content">
      <a class="title" v-bind:href="playlist.snippet.title">
        {{ playlist.snippet.title }}</a
      >
      <div class="channel">{{ playlist.snippet.channelTitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Playlist",
  props: ["playlist"],
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/searchList/playlist.scss";
</style>

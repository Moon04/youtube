<template>
  <div v-for="item in items" :key="item.id">
    <video-card v-if="item.id.kind.includes('video')" :video="item" />
    <playlist-card v-if="item.id.kind.includes('playlist')" :playlist="item" />
    <channel-card v-if="item.id.kind.includes('channel')" :channel="item" />
  </div>
</template>

<script>
import Video from "./Video.vue";
import Playlist from "./Playlist.vue";
import Channel from "./Channel.vue";

export default {
  name: "SearchList",
  props: ["items"],
  components: {
    "video-card": Video,
    "playlist-card": Playlist,
    "channel-card": Channel,
  },
};
</script>

<style lang="scss" scoped>
/* @import "@/scss/components/searchList.scss"; */
</style>

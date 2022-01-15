<template>
  <div v-if="!channel" class="loading">
    <div class="loader">Loading...</div>
  </div>
  <div v-if="channel" class="channel-details">
    <img class="cover" alt="channel cover" src="@/assets/channel-cover.jpg" />
    <div class="details">
      <img
        class="img"
        v-bind:alt="channel.snippet.title"
        v-bind:src="channel.snippet.thumbnails.medium.url"
      />
      <a v-bind:href="channel.snippet.title" class="title">
        {{ channel.snippet.title }}
      </a>
      <div class="desc">{{ channel.snippet.description }}</div>
    </div>
    <hr />
  </div>
</template>

<script>
import { getChannel } from "@/services/channel";

export default {
  name: "ChannelDetails",
  data() {
    return {
      channel: null,
      relatedVideos: [],
    };
  },
  beforeCreate() {
    const channelId = this.$route.params.id;
    getChannel(channelId).then(({ data }) => (this.channel = data.items[0]));
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/views/channelDetails.scss";
</style>

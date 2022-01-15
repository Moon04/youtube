<template>
  <router-link
    :to="{ name: 'ChannelDetails', params: { id: channel.id.channelId } }"
    class="channel"
  >
    <img
      v-bind:alt="channel.snippet.channelTitle"
      v-bind:src="channel.snippet.thumbnails.medium.url"
    />
    <div class="content">
      <a class="title" v-bind:href="channel.snippet.channelTitle">
        {{ channel.snippet.channelTitle }}</a
      >
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Channel",
  props: ["channel"],
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/searchList/channel.scss";
</style>

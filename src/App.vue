<template>
  <div id="app-wrapper">
    <app-header v-on:search="search" />
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <router-view :searchQuery="searchQuery" />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";

export default {
  name: "App",
  data() {
    return {
      searchQuery: "",
    };
  },
  components: {
    "app-header": Header,
  },
  methods: {
    search(query) {
      this.searchQuery = query;
    },
  },
};
</script>

<style lang="scss">
#app-wrapper {
  margin: auto;
}
</style>

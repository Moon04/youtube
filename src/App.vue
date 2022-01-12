<template>
  <div id="app-wrapper">
    <app-header v-on:search="search" />
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";

export default {
  name: "App",
  components: {
    "app-header": Header,
  },
  methods: {
    search(searchInput) {
      console.log(searchInput);
    },
  },
};
</script>

<style lang="scss">
#app-wrapper {
  margin: auto;
}
</style>

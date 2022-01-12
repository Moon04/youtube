<template>
  <header class="header">
    <logo />
    <p v-if="!isSearchActive" class="search-text" @click="activeSearchInput()">
      {{ searchInput || "Youtube" }}
    </p>
    <input
      class="search-input"
      type="text"
      v-if="isSearchActive"
      v-model="searchInput"
      name="search-input"
      placeholder="Search"
    />
    <button class="search-btn" type="button" @click="search()">
      <search-icon />
    </button>
  </header>
</template>

<script>
import Logo from "../icons/Logo.vue";
import SearchIcon from "../icons/Search.vue";

export default {
  name: "Header",
  components: {
    logo: Logo,
    "search-icon": SearchIcon,
  },
  data() {
    return {
      isSearchActive: false,
      searchInput: "",
    };
  },
  methods: {
    activeSearchInput() {
      this.isSearchActive = true;
    },
    search() {
      this.isSearchActive = false;
      this.$emit("search", this.searchInput);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/components/header.scss";
</style>

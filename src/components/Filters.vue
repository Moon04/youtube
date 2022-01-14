<template>
  <div class="filters">
    <select id="type" name="type">
      <option value="all">All</option>
      <option value="channel">Channel</option>
      <option value="playlist">Playlist</option>
    </select>
    <select id="date" name="date">
      <option value="all">Any time</option>
      <option value="today">Today</option>
      <option value="week">This week</option>
      <option value="month">This month</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Filters",
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/filters.scss";
</style>

<template>
  <div class="home">
    <filters />
    <search-list :items="items" />
  </div>
</template>

<script>
// @ is an alias to /src
import Filters from "@/components/Filters.vue";
import SearchList from "@/components/searchList/SearchList.vue";

import { search } from "@/services/search";

export default {
  name: "Home",
  props: ["searchQuery"],
  data() {
    return {
      items: [],
    };
  },
  components: {
    filters: Filters,
    "search-list": SearchList,
  },
  watch: {
    searchQuery: {
      immediate: true,
      handler(query, prevQuery) {
        console.log(prevQuery);
        if (query) {
          search(query).then((res) => (this.items = res.data.items));
        }
      },
    },
  },
};
</script>

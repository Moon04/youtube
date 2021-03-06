import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    prop: {
      searchQuery: String,
    },
    component: Home,
  },
  {
    path: "/video-details/:id",
    name: "VideoDetails",
    component: () => import("../views/VideoDetails.vue"),
  },
  {
    path: "/channel-details/:id",
    name: "ChannelDetails",
    component: () => import("../views/ChannelDetails.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

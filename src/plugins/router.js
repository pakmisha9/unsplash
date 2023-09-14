import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home.vue";
import Favourites from "@/views/favourites.vue";
import FavouriteItem from "@/views/favouriteItem.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: Favourites,
  },
  {
    path: "/favourite/:slug",
    name: "FavouriteItem",
    component: FavouriteItem,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;

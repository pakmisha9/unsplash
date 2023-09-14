import { createStore } from "vuex";
import Gallery from "@/store/gallery.js";
import Favourites from "@/store/favourites.js";

export default createStore({
  modules: {
    gallery: Gallery,
    favourites: Favourites,
  },
});

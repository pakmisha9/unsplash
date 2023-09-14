<template>
  <section>
    <div class="container mt-5">
      <div class="text-center mt-20">
        <h1 class="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-semibold mb-5">Избранное:</h1>
        <p class="font-demibold mb-10 text-xl 2xl:text-3xl" v-if="favourites.length == 0">Пусто</p>
        <router-link to="/" class="px-6 py-3 inline-block bg-gray-100 border rounded"> Вернуться в галлерею</router-link>
      </div>
      <div class="md:columns-2 lg:columns-3 gap-5 mb-10">
        <TransitionGroup name="slide-fade">
          <GalleryItem v-for="(favourite, index) in favourites" :key="index" :item="favourite" />
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script>
  import GalleryItem from "@/components/GalleryItem.vue";
  import { mapGetters } from "vuex";
  export default {
    components: {
      GalleryItem,
    },
    computed: {
      ...mapGetters({
        favourites: "favourites/favourites",
      }),
    },
  };
</script>

<style></style>

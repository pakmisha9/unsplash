<template>
  <div class="md:columns-2 lg:columns-3 gap-5 mb-10">
    <TransitionGroup name="slide-fade">
      <GalleryItem v-for="(item, index) in items" :key="index" :item="item" />
    </TransitionGroup>
  </div>
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
        items: "gallery/gallery",
      }),
    },
  };
</script>

<style></style>

<template>
  <div>
    <Nav />
    <!-- <GalleryItemModal /> -->
    <main>
      <transition name="slide-fade" mode="out-in" appear>
        <router-view />
      </transition>
    </main>
  </div>
</template>
<script>
  import { RouterView } from "vue-router";
  import Nav from "@/components/Nav.vue";
  // import GalleryItemModal from "@/components/Modals/GalleryItemModal.vue";

  export default {
    components: {
      Nav,
      RouterView,
    },
    created() {
      this.$store.dispatch("gallery/getGalleryQuery");
    },
  };
</script>

<style scoped></style>

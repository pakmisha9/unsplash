<template>
  <router-link :to="'/favourite/' + item.slug" class="gallery-item relative mb-5">
    <div class="">
      <img :src="item.urls.full" alt="" />
    </div>
    <div class="gallery-item__mask relative" @click.prevent="openGalleryItemModal">
      <div class="flex h-full flex-col justify-end relative z-20 p-5">
        <p class="text-xs text-gray-100">{{ item.description }}</p>
      </div>
    </div>
    <div class="absolute top-5 right-5 z-30">
      <button @click.prevent="addToFavorites" :class="{ active: item.liked_by_user == true }" class="like">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M240,98a57.63,57.63,0,0,1-17,41L133.7,229.62a8,8,0,0,1-11.4,0L33,139a58,58,0,0,1,82-82.1L128,69.05l13.09-12.19A58,58,0,0,1,240,98Z"></path></svg>
      </button>
    </div>
  </router-link>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    data: () => ({
      check: false,
    }),
    computed: {
      ...mapGetters({
        favourites: "favourites/favourites",
        gallery: "gallery/gallery",
      }),
    },
    created() {
      console.log(this.item.slug);
    },
    methods: {
      addToFavorites() {
        this.$store.dispatch("favourites/toggle", this.item);
      },
      // openGalleryItemModal() {
      //   this.emitter.emit("open-modal", "gallery-item-modal");
      //   this.emitter.emit("send", this.item);
      // },
    },
  };
</script>

<style lang="scss" scoped>
  .gallery-item {
    @apply relative block;
    &__mask {
      @apply invisible opacity-0 h-0 overflow-hidden transition-all duration-300 ease-in-out;
    }
    &:hover {
      // .gallery-item__mask {
      //   @apply absolute visible h-auto opacity-100 inset-0 bg-black/50;
      // }
    }
    .like {
      &.active {
        svg {
          @apply fill-red-500;
        }
      }
    }
  }
</style>

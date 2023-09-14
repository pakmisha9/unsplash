<template>
  <section class="relative">
    <div class="absolute left-0 top-0 z-20 w-full h-full">
      <div class="banner"></div>
    </div>
    <div class="container pt-10 mb-20 relative">
      <div class="relative z-30 w-full">
        <div>
          <div class="mb-10 lg:flex-row flex-col flex justify-between lg:items-center">
            <div class="flex items-center lg:mb-0 mb-5 lg:max-w-xl">
              <div class="overflow-hidden rounded">
                <img :src="item.user.profile_image.medium" alt="" />
              </div>
              <div class="text-white ml-3">
                <p class="text-3xl mb-1">{{ item.user.first_name }}</p>
                <a :href="item.user.social.portfolio_url" target="_blank" class="text-sm">{{ item.user.social.portfolio_url }}</a>
              </div>
            </div>
            <div class="flex items-center">
              <button @click.prevent="addToFavorites" :class="{ active: item.liked_by_user == true }" class="like mr-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256"><path d="M240,98a57.63,57.63,0,0,1-17,41L133.7,229.62a8,8,0,0,1-11.4,0L33,139a58,58,0,0,1,82-82.1L128,69.05l13.09-12.19A58,58,0,0,1,240,98Z"></path></svg>
              </button>
              <button class="bg-yellow-400 px-7 flex items-center rounded-lg h-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
                <span class="ml-3">Download</span>
              </button>
            </div>
          </div>
          <div class="rounded-lg overflow-hidden h-[400px] md:h-[500px] lg:h-[600px] 2xl:h-[700px]">
            <img :src="item.urls.regular" class="w-full h-full object-cover" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    data: () => ({
      item: [],
    }),
    computed: {
      ...mapGetters({
        items: "gallery/gallery",
      }),
    },
    methods: {
      getMovie() {
        this.items.forEach((el) => {
          console.log(el);
          console.log(this.$route.params.slug);
          if (el.slug == this.$route.params.slug) {
            this.item = el;
          }
        });
      },
      addToFavorites() {
        this.$store.dispatch("favourites/toggle", this.item);
      },
    },

    created() {
      this.getMovie();
    },
  };
</script>

<style lang="scss" scoped>
  .banner {
    @apply bg-cover -mt-1 bg-center bg-no-repeat relative h-[700px] w-full;
    &:after {
      content: "";
      @apply bg-black bg-opacity-50 absolute inset-0;
    }
    background-image: url("@/assets/img/bg/favourite-banner.png");
  }
  .like {
    @apply border w-12 h-12 flex items-center justify-center rounded-lg bg-white;
    &.active {
      svg {
        @apply fill-red-500;
      }
    }
  }
</style>

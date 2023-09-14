<template>
  <section>
    <div class="banner">
      <div class="w-[90%] xl:w-[800px] mx-auto">
        <Search />
      </div>
    </div>
  </section>
</template>

<script>
  import Search from "@/components/Search.vue";
  export default {
    components: {
      Search,
    },
  };
</script>

<style lang="scss" scoped>
  .banner {
    @apply bg-cover -mt-1 bg-center bg-no-repeat relative py-20 xl:py-28 w-full flex items-center justify-center;
    &:after {
      content: "";
      @apply bg-black bg-opacity-50 absolute inset-0;
    }
    background-image: url("@/assets/img/bg/banner.png");
  }
</style>

<template>
  <div class="navbar bg-black">
    <div class="navbar-content container">
      <router-link to="/" class="inline-block w-40">
        <img src="@/assets/img/icons/logo.svg" class="w-full" alt="" />
      </router-link>
      <div class="w-full mx-5 md:mx-10">
        <!-- <Search /> -->
      </div>
      <div>
        <router-link to="/favourites" class="flex items-center">
          <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m480-121-41-37q-106-97-175-167.5t-110-126Q113-507 96.5-552T80-643q0-90 60.5-150.5T290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.5T880-643q0 46-16.5 91T806-451.5q-41 55.5-110 126T521-158l-41 37Z" /></svg>
          <p class="ml-2 text-white xl:block hidden 2xl:text-lg">Избранное</p>
        </router-link>
      </div>
    </div>
  </div>
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
  .navbar {
    &-content {
      @apply py-7 2xl:py-10 flex justify-between items-center;
    }
  }
</style>

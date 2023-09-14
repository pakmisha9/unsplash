<template>
  <div class="search">
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
    </span>
    <input type="text" v-model.trim="search" placeholder="" />
  </div>
</template>

<script>
  export default {
    data: () => ({
      search: "",
    }),

    watch: {
      search() {
        this.$store.dispatch("gallery/getGalleryQuery", this.search);
        if (this.search == "") {
          this.$store.dispatch("gallery/getGalleryQuery");
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .search {
    @apply flex items-center w-full border rounded py-3 z-30 relative bg-gray-50 transition-all duration-300 ease-in-out px-5;
    input {
      @apply w-full px-3 outline-none bg-transparent;
    }
    svg {
      @apply fill-gray-500;
    }
    &:hover {
      @apply bg-gray-100;
    }
  }
</style>

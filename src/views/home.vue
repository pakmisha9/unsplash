<template>
  <section>
    <Banner />
    <div class="container mt-10">
      <Gallery />
    </div>
  </section>
</template>

<script>
  import Gallery from "@/components/Gallery.vue";
  import Banner from "@/components/Banner.vue";
  export default {
    components: {
      Gallery,
      Banner,
    },
  };
</script>

<style></style>

<!-- <template>
  <div :class="{ active: opened }" @click.self="opened = false">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
      },
    },
    data: () => ({
      opened: false,
    }),
    created() {
      this.emitter.on("open-modal", (name) => {
        if (this.name == name) {
          this.opened = true;
        }
      });

      this.emitter.on("close-modal", (name) => {
        if (this.name == name) {
          this.opened = false;
        }
      });
    },
  };
</script>

<style lang="scss" scoped></style> -->

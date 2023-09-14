<!-- <template>
  <Modal name="gallery-item-modal" class="modal modal-lg">
    <div v-if="poster != null" class="modal-wrapper modal-lg">
      <div class="mb-5">
        <img :src="poster.urls.full" class="aspect-video object-cover" alt="" />
      </div>
      <div>
        <p class="mb-3">{{ poster.description }}</p>
        <p>
          likes: <span class="font-bold">{{ poster.likes }}</span>
        </p>
      </div>
    </div>
  </Modal>
</template>

<script>
  import Modal from "@/components/Modals/Modal.vue";
  export default {
    components: { Modal },
    data: () => ({
      poster: null,
    }),
    created() {
      this.emitter.on("send", (item) => {
        this.poster = item;
      });
    },
  };
</script>

<style></style> -->

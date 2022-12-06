<script>
import { mapGetters, mapActions } from "vuex";
import Transcriptions from "./Transcriptions.vue";

export default {
  name: "transcriptions-container",
  mounted() {
    this.$store.dispatch("getTranscriptions");
  },
  methods: {
    ...mapActions([
      "getTranscriptions",
      "uploadTranscriptions",
      "addTranscription",
    ]),
    deleteTranscription(id) {
      this.$store.dispatch("deleteTranscription", id);
    },
    handleFormChange(formData) {
      this.$store.dispatch("updateTranscription", formData);
    },
  },
  computed: {
    ...mapGetters(["transcriptions", "isLoading"]),
  },
  components: {
    Transcriptions,
  },
};
</script>

<template>
  <transcriptions
    :items="transcriptions"
    @text-field-change="handleFormChange"
    @title-field-change="handleFormChange"
    @delete-transcription="deleteTranscription"
    @upload-data="uploadTranscriptions"
    @get-data="getTranscriptions"
    @add-row="addTranscription"
    :isLoading="isLoading"
  />
</template>

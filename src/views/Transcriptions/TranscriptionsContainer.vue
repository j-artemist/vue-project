<script>
import { mapGetters } from "vuex";
import Transcriptions from "./Transcriptions.vue";

export default {
  name: "transcriptions-container",
  mounted() {
    this.$store.dispatch("getTranscriptions");
  },
  methods: {
    deleteTranscription(id) {
      this.$store.dispatch("deleteTranscription", id);
    },
    getData() {
      this.$store.dispatch("getTranscriptions");
    },
    uploadData() {
      this.$store.dispatch("uploadTranscriptions");
    },
    addRow() {
      this.$store.dispatch("addTranscription");
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
    @delete-transcription="deleteTranscription"
    @upload-data="uploadData"
    @get-data="getData"
    @add-row="addRow"
    :isLoading="isLoading"
  />
</template>

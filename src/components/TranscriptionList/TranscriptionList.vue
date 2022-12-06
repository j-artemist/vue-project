<script>
import TranscriptionListItem from "./TranscriptionListItem";

export default {
  name: "transcription-list",
  props: {
    items: { required: true, type: Array },
  },
  components: {
    TranscriptionListItem,
  },
};
</script>

<template>
  <form class="transcription-form">
    <ul class="transcription-list">
      <transcription-list-item
        v-for="item in items"
        v-bind:key="item.id"
        :id="item.id"
        :title="item.title"
        :text="item.text"
        v-on="$listeners"
      />
    </ul>
  </form>
</template>

<style scoped>
.transcription-form {
  width: 100%;
}

.transcription-list {
  margin-top: 24px;
  border: solid 1px var(--border-color);
  border-bottom: none;
}

.transcription-list li {
  border-bottom: solid 1px var(--border-color);
}
</style>

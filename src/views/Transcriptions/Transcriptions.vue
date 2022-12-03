<script>
import AppHeader from "../../components/AppHeader/AppHeader.vue";
import Container from "../../components/Container/Container.vue";
import IconButton from "../../components/IconButton/IconButton.vue";
import TranscriptionList from "../../components/TranscriptionList/TranscriptionList.vue";
import Layout from "../../components/Layout/Layout.vue";

export default {
  name: "transcription-view",
  props: {
    isLoading: {
      required: false,
      type: Boolean,
    },
    items: {
      required: true,
      type: Array,
    },
  },
  components: {
    AppHeader,
    Container,
    Layout,
    IconButton,
    TranscriptionList,
  },
  methods: {
    emitUploadDataEvent() {
      const data = { voice: "test" };
      this.$emit("upload-data", data);
    },
    emitGetDataEvent() {
      this.$emit("get-data");
    },
    emitAddRowEvent() {
      this.$emit("add-row");
    },
  },
};
</script>

<template>
  <layout>
    <template #header>
      <app-header>
        <template #left-content>
          <h1 class="heading">Transcriptions</h1>
        </template>
        <template #right-content>
          <div class="actions-container">
            <icon-button
              name="upload"
              ariaLabel="upload"
              @click="emitUploadDataEvent"
            />
            <icon-button
              name="fetch-document"
              ariaLabel="get document"
              @click="emitGetDataEvent"
            />
          </div>
        </template>
      </app-header>
    </template>
    <template #main>
      <container>
        <div class="transcription-list-container">
          <transcription-list
            :items="items"
            v-on="$listeners"
            v-if="items.length > 0"
          />
          <div class="add-row-container" v-if="!isLoading">
            <icon-button
              name="add-row"
              ariaLabel="Add row"
              @click="emitAddRowEvent"
            />
          </div>
        </div>
      </container>
    </template>
  </layout>
</template>

<style scoped>
.heading {
  font-family: "Montserrat", sans-serif;
  font-size: var(--font-size-large);
  color: var(--heading-color);
  font-weight: 500;
}
.actions-container {
  display: flex;
  column-gap: 24px;
}

.add-row-container {
  margin-top: 24px;
}
.transcription-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

//
<text-area v-on:change="handleTextFieldChange($event)" />

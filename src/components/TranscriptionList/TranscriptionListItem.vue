<script>
import CheckBox from "../CheckBox/CheckBox.vue";
import SvgIcon from "../SvgIcon/SvgIcon.vue";
import TextArea from "../TextArea/TextArea.vue";
import TextInput from "../TextInput/TextInput.vue";
import IconButton from "../IconButton/IconButton.vue";

export default {
  name: "transcription-list-item",
  components: {
    TextInput,
    TextArea,
    CheckBox,
    SvgIcon,
    IconButton,
  },
  props: {
    id: { required: true, type: Number },
    title: { required: true, type: String, default: "" },
    text: { required: true, type: String, default: "" },
  },
  methods: {
    emitDeleteEvent() {
      this.$emit("delete-transcription", this.id);
    },
    emitTitleFieldChangeEvent(value) {
      this.$emit("title-field-change", { id: this.id, title: value });
    },
    emitTextFieldChangeEvent(value) {
      this.$emit("text-field-change", { id: this.id, text: value });
    },
  },
};
</script>

<template>
  <li class="list-item">
    <div class="action-container">
      <check-box ariaLabel="check item" /><svg-icon name="person" />
    </div>
    <div class="content">
      <div class="title-container">
        <text-input
          @text-input-change="emitTitleFieldChangeEvent"
          :title="title"
          ariaLabel="title"
          placeholder="title"
          :value="title"
        />
        <div class="icon-button-container">
          <icon-button
            name="delete"
            @click="emitDeleteEvent"
            ariaLabel="delete transcription"
          />
        </div>
      </div>
      <div class="text-area-container">
        <text-area
          @text-area-change="emitTextFieldChangeEvent"
          ariaLabel="transcribed text"
          :value="text"
          id="text"
          placeholder="transcribed text"
        />
      </div>
    </div>
  </li>
</template>

<style scoped>
.list-item {
  background: var(--secondary-background-color);
  list-style-type: none;
  display: flex;
  align-items: baseline;
  padding: 24px;
}

.action-container {
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin-right: 8px;
}

.content {
  text-align: left;
  width: 100%;
  display: flex;
  gap: 8px;
  flex-direction: column;
}

.title-container {
  display: flex;
  justify-content: space-between;
  min-height: 32px;
}

/* making this accessible when on a touch screen and to screen readers */
@media (any-pointer: fine) {
  .icon-button-container {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
}

.list-item:hover .icon-button-container {
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

.text-area-container {
  display: flex;
  flex-wrap: wrap;
  margin-right: 29px;
  height: 100%;
}
</style>

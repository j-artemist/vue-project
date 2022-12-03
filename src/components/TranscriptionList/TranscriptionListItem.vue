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
    label: { required: true, type: String },
    text: { required: true, type: String },
  },
  methods: {
    emitDeleteEvent() {
      this.$emit("delete-transcription", this.id);
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
      <div class="label-container">
        <text-input
          :value="label"
          ariaLabel="name of voice"
          placeholder="name of voice"
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
          ariaLabel="transcribed recording"
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

.label-container {
  display: flex;
  justify-content: space-between;
}

.label {
  font-size: var(--font-size-root);
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: var(--medium-gray-color);
}

.icon-button-container {
  visibility: hidden;
}

.list-item:hover .icon-button-container {
  visibility: visible;
}

.text-area-container {
  display: flex;
  flex-wrap: wrap;
  margin-right: 29px;
  height: 100%;
}
</style>

//TODO checked: { required: true, type: Boolean }, // TODO add aria-labelled by
for //
<label class="label" for="text">{{ label }}</label>

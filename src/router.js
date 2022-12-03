import Vue from "vue";
import VueRouter from "vue-router";
import TranscriptionsContainer from "./views/Transcriptions/TranscriptionsContainer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Transcriptions",
    component: TranscriptionsContainer,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

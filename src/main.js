import { createApp } from "vue";
import "@/assets/scss/app.scss";
import App from "@/layouts/App.vue";
import router from "@/plugins/router";
import store from "@/store.js";
import mitt from "mitt";

const emitter = mitt();

const VApp = createApp(App);
VApp.use(router);
VApp.use(store);
VApp.config.globalProperties.emitter = emitter;
VApp.mount("#app");

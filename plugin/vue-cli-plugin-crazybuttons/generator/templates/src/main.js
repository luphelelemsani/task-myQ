import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { VAlert } from "vuetensils/src/components";
import { VBtn } from "vuetensils/src/components";

Vue.component("VBtn", VBtn);

Vue.component("VAlert", VAlert);

console.log("Preset <%= preset %>");

createApp(App).use(router).mount("#app");
s;

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollTo from "vue-scrollto";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(VueScrollTo);

app.mount("#app");

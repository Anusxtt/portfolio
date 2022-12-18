<template>
  <v-app :theme="theme">
    <v-app-bar>
      <v-spacer></v-spacer>

      <v-btn
        :prepend-icon="theme === 'light' ? mdiWeatherSunny : mdiWeatherNight"
        @click="onClick"
        >Toggle Theme</v-btn
      >
    </v-app-bar>

    <v-main>
      <v-container>
        <v-icon :icon="mdiVuetify"></v-icon>
        <v-icon :icon="mdiCursorPointer"></v-icon>
        <v-btn class="ma-2" color="primary">
          Accept
          <v-icon end :icon="mdiCheckboxMarkedCircle"></v-icon>
        </v-btn>
        Content area</v-container
      >
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  mdiWeatherSunny,
  mdiWeatherNight,
  mdiCursorPointer,
  mdiVuetify,
  mdiCheckboxMarkedCircle,
} from "@mdi/js";

const theme = ref("light");

function onClick() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>

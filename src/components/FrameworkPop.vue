<script setup lang="ts">
import { ref } from "vue";
const count = ref(100);
function inc() {
  count.value++;
}
function dec() {
  count.value--;
}
</script>

<template>
  <v-card class="mx-auto" max-width="344" variant="outlined">
    <v-img
      src="https://img.icons8.com/color/480/vue-js.png"
      height="200px"
    ></v-img>
    <v-card-item>
      <div class="text-center">
        <div class="text-h6 mb-1">Vue JS</div>
        <div class="text-caption">Score: {{ count }}</div>
      </div>
    </v-card-item>

    <v-card-actions class="justify-center">
      <v-btn variant="flat" color="error" @click="dec()"> - </v-btn>
      <v-btn variant="flat" color="secondary" @click="inc()"> + </v-btn>
    </v-card-actions>
  </v-card>
</template>

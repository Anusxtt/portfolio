<script setup lang="ts">
import { ref } from "vue";
const props = withDefaults(
  defineProps<{
    name: string;
    img: string;
    rating: number;
    index: number;
  }>(),
  {
    rating: 10,
  }
);

const emits = defineEmits<{
  (e: "change", index: number, rating: number): void;
}>();

// const props = defineProps({
//   name: {
//     type: String,
//     required: true,
//   },
//   img: {
//     type: String,
//     required: true,
//   },
//   rating: {
//     type: Number,
//     required: true,
//     default: 10,
//   },
// });
const count = ref(props.rating);
function inc() {
  count.value++;
  emits("change", props.index, count.value);
}
function dec() {
  count.value--;
  emits("change", props.index, count.value);
}
</script>

<template>
  <v-card class="mx-auto" max-width="344" variant="outlined">
    <v-img :src="props.img" height="200px"></v-img>
    <v-card-item>
      <div class="text-center">
        <div class="text-h6 mb-1">{{ props.name }}</div>
        <div class="text-caption">Score: {{ count }}</div>
      </div>
    </v-card-item>

    <v-card-actions class="justify-center">
      <v-btn variant="flat" color="error" @click="dec()"> - </v-btn>
      <v-btn variant="flat" color="secondary" @click="inc()"> + </v-btn>
    </v-card-actions>
  </v-card>
</template>

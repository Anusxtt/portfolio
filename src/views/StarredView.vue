<script setup lang="ts">
import FrameworkPop from "@/components/FrameworkPop.vue";
const frameList = [
  {
    name: "VueJS",
    img: "https://img.icons8.com/color/480/vue-js.png",
    rating: 10,
  },
  {
    name: "AngularJS",
    img: "https://material.angularjs.org/latest/img/logo.svg",
    rating: 20,
  },
  {
    name: "ReactJS",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    rating: 14,
  },
];
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, index) of frameList" :key="index">
        <FrameworkPop :name="item.name" :img="item.img" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import FrameworkPop from "@/components/FrameworkPop.vue";
import { ref, computed } from "vue";
const frameList = ref([
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
]);
function changeRating(index: number, rating: number) {
  console.log("action" + index + " :" + rating);
  frameList.value[index].rating = rating;
}
const orderList = computed(() => {
  return [...frameList.value].sort((n1, n2) => n2.rating - n1.rating);
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, index) of frameList" :key="index">
        <FrameworkPop
          :name="item.name"
          :img="item.img"
          :rating="item.rating"
          :index="index"
          @change="changeRating"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="6">
        <v-table>
          <thead>
            <tr>
              <th>order</th>
              <th>name</th>
              <th>rating</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) of orderList" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.rating }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

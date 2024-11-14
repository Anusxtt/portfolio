<script setup lang="ts">
import { useRouter } from "vue-router";
import { computed } from "vue";
import "animate.css";

const router = useRouter();
const currentRoute = computed(() => router.currentRoute.value.path);

function navigateto(route: string) {
  router.push(route);
}
</script>

<template>
  <v-app>
    <v-app-bar
      :style="{ backgroundColor: '#4a148c', height: '80px' }"
      class="app-bar-centered"
    >
      <v-container class="d-flex align-center justify-center" fluid>
        <v-btn
          text
          class="nav-button"
          @click="navigateto('/')"
          :class="{ active: currentRoute === '/' }"
          >Home</v-btn
        >
        <v-btn
          text
          class="nav-button"
          @click="navigateto('/my-about')"
          :class="{ active: currentRoute === '/my-about' }"
          >About</v-btn
        >
        <v-btn
          text
          class="nav-button"
          @click="navigateto('/my-skills')"
          :class="{ active: currentRoute === '/my-skills' }"
          >Skills</v-btn
        >
        <v-btn
          text
          class="nav-button"
          @click="navigateto('/my-education')"
          :class="{ active: currentRoute === '/my-education' }"
          >Education</v-btn
        >
        <v-btn
          text
          class="nav-button"
          @click="navigateto('/my-work')"
          :class="{ active: currentRoute === '/my-work' }"
          >Work</v-btn
        >
      </v-container>
    </v-app-bar>

    <v-main>
      <!-- <transition
        enter-active-class="animate__animated animate__slideInRight"
        leave-active-class="animate__animated animate__slideOutLeft"
      >
        <router-view :key="$route.fullPath" class="view-content" />
      </transition> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.app-bar-centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-button {
  font-family: "Kanit", sans-serif;
  font-size: 1.3rem;
  color: #ffffff;
  font-weight: bold;
  text-transform: none;
  margin: 0 15px;
}

.nav-button.active {
  border-bottom: 3px solid #e1bee7;
}

.custom-font {
  font-family: "Kanit", sans-serif;
  font-size: 2rem;
  color: #ffffff;
  font-weight: bold;
  line-height: normal;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7), -3px -3px 5px rgba(0, 0, 0, 0.4);
  padding-left: 20px;
}

/* .view-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.5s ease;
} */
</style>

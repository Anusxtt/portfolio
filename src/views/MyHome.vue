<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

import {
  mdiArrowDownBold,
  mdiGitlab,
  mdiFacebook,
  mdiInstagram,
} from "@mdi/js";

import avatar from "../assets/pro1.jpg";

function openLink(url: string) {
  window.open(url, "");
}

function navigateto(route: string) {
  router.push(route);
}
</script>

<template>
  <v-main class="back-ground">
    <v-container fill-height class="d-flex align-center justify-center">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="6" class="d-flex flex-column align-center justify-center">
          <div class="custom-font text-with-shadow">Hello,</div>
          <div class="custom-font text-with-shadow">
            I'm Anusit Na bangchang
          </div>
          <div class="custom-font text-with-shadow text-size">
            I'm junior developer
          </div>
          <br />
          <v-btn
            class="custom-btn"
            :append-icon="mdiArrowDownBold"
            @click="navigateto('/my-about')"
            >About Me</v-btn
          >
          <br />
          <br />
          <v-row class="d-flex align-center justify-center">
            <v-btn
              class="btn-link"
              @click="openLink('https://gitlab.com/64160151')"
            >
              <v-icon :size="24">{{ mdiGitlab }}</v-icon>
            </v-btn>
            <v-btn
              class="btn-link"
              @click="
                openLink(
                  'https://www.facebook.com/profile.php?id=100010152010767&mibextid=LQQJ4d'
                )
              "
            >
              <v-icon :size="24">{{ mdiFacebook }}</v-icon>
            </v-btn>
            <v-btn
              class="btn-link"
              @click="
                openLink(
                  'https://www.instagram.com/anusxtt/?igsh=ZWx5ZjhkampmcnR5'
                )
              "
            >
              <v-icon :size="24">{{ mdiInstagram }}</v-icon>
            </v-btn>
          </v-row>
        </v-col>
        <v-col cols="6" class="d-flex align-center justify-center">
          <img :src="avatar" alt="Anusit" class="profile-pic" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.btn-link {
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  background-color: #fff59d;
  color: #7b1fa2;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  margin: 0 5px;
}

.custom-btn {
  font-family: "Kanit", sans-serif;
  font-weight: bold;
  font-size: 15px;
  border-radius: 25px;
  padding: 12px 24px;
  background-color: #6a1b9a;
  color: #ffffff;
  min-width: 200px;
  min-height: 50px;
  text-align: center;
}

.profile-pic {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ffffff;
}

.custom-font {
  font-family: "Kanit", sans-serif;
  font-size: 3rem;
  color: #ffffff;
  font-weight: bold;
}

.back-ground {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  background-image: url("../assets/rain2.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
}

.back-ground::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.text-with-shadow {
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7), -3px -3px 5px rgba(0, 0, 0, 0.4); /* เพิ่มเงาเข้มและเงาเบาเพื่อเพิ่มมิติ */
}

.text-size {
  font-size: 2rem;
}

.v-container {
  position: relative;
  z-index: 2;
  height: 100vh;
  width: 100vw;
}

.v-row {
  width: 100%;
}

.v-col {
  height: auto;
}
</style>

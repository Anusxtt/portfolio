<script setup lang="ts">
import { mdiAccount } from "@mdi/js";
import photo from "../assets/mypic.jpg";
</script>

<template>
  <v-main class="back-ground">
    <v-row class="d-flex justify-center mb-6">
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-icon class="about-icon" :size="40">{{ mdiAccount }}</v-icon>
        <div>
          <span class="about-title">About</span>
          <span class="about-title1">Me</span>
        </div>
      </v-col>
    </v-row>
    <v-container class="d-flex align-center justify-center" fluid>
      <v-row>
        <v-col cols="6" class="d-flex justify-center align-center">
          <v-card class="full-card">
            <v-card-text>
              <img :src="photo" alt="aef" class="pro-pic" />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6" class="d-flex flex-column justify-center">
          <div class="custom-font">I'm Aef</div>
          <div class="custom-font1">Junior Developer</div>
          <br />
          <div class="custom-font2">
            I’m 22 years old, I’m a junior developer with a passion for learning
            new technologies. I specialize in Frontend development and have
            experience in developing web applications and backend systems. I am
            a creative person, able to work well with a team, and I am committed
            to producing high-quality work.
          </div>
          <br />
          <div>
            <span class="custom-font3">Email : </span>
            <span class="custom-font4">anusit7845@gmail.com</span>
          </div>
          <div>
            <span class="custom-font3">Phone : </span>
            <span class="custom-font4">066-112-5145</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.custom-font {
  font-family: "Kanit", sans-serif;
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 500;
}

.custom-font1 {
  font-family: "Kanit", sans-serif;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 500;
}

.custom-font2 {
  font-family: "Kanit", sans-serif;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 300;
  max-width: 700px;
}

.custom-font3 {
  font-family: "Kanit", sans-serif;
  color: #fdd835;
  font-size: 1.5rem;
  font-weight: 500;
  max-width: 500px;
}

.custom-font4 {
  font-family: "Kanit", sans-serif;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 300;
  max-width: 500px;
}

.about-title {
  font-family: "Kanit", sans-serif;
  font-size: 2.5rem;
  color: #ffffff;
  font-weight: bold;
  margin-left: 10px;
}

.about-title1 {
  font-family: "Kanit", sans-serif;
  font-size: 2.5rem;
  color: #fdd835;
  font-weight: bold;
  margin-left: 10px;
}

.about-icon {
  color: #ffffff;
}

.back-ground {
  background: linear-gradient(135deg, #3d1a75, #4527a0, #2e003e);
  min-height: 100vh;
}

.pro-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.full-card {
  background-color: #fdd835;
  width: 400px;
  height: 520px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.full-card:hover {
  transform: scale(1.05) rotate(-1deg);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.v-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
}

.v-img {
  border-radius: 50%;
}
</style>

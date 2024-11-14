<script setup lang="ts">
import { mdiSchool } from "@mdi/js";
import cru from "../assets/cru.png";
import buu from "../assets/buu.png";

const educations = [
  {
    degree: "-",
    school: "Chonradsadornumrung School | CRU",
    year: "2014 - 2019 | Completed",
    image: cru,
  },
  {
    degree: "Computer Science | CS",
    school: "Burapha University | BUU",
    year: "2020 - 2024 | Studying",
    image: buu,
  },
];
</script>

<template>
  <v-main class="back-ground">
    <v-row class="d-flex justify-center mb-6">
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-icon class="about-icon" :size="40">{{ mdiSchool }}</v-icon>
        <div>
          <span class="about-title">My </span>
          <span class="about-title1">Education</span>
        </div>
      </v-col>
    </v-row>
    <v-container fluid>
      <v-row
        v-for="edu in educations"
        :key="edu.degree"
        class="mb-4 d-flex justify-center"
      >
        <v-col cols="12" md="8">
          <v-card class="edu-card">
            <v-card-text>
              <v-row>
                <v-col cols="4">
                  <v-img
                    :src="edu.image"
                    alt="School Image"
                    aspect-ratio="1.5"
                    class="edu-image"
                  ></v-img>
                </v-col>
                <v-col cols="8" class="d-flex flex-column justify-center">
                  <div class="edu-title">{{ edu.school }}</div>
                  <br />
                  <div class="edu-subtitle">{{ edu.degree }}</div>
                  <br />
                  <div class="edu-year">{{ edu.year }}</div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap");

.back-ground {
  background: linear-gradient(135deg, #4a148c, #283593, #0d47a1);
  min-height: 100vh;
  padding: 60px 20px;
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

.edu-card {
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.4s ease, bo-shadow 0.4s ease;
}

.edu-card:hover {
  transform: scale(1.05) rotate(-1deg);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.edu-title {
  font-family: "Kanit", sans-serif;
  font-size: 1.8rem;
  color: #283593;
  font-weight: bold;
}

.edu-subtitle {
  font-family: "Kanit", sans-serif;
  font-size: 1.2rem;
  color: #616161;
}

.edu-year {
  font-family: "Kanit", sans-serif;
  font-size: 1rem;
  color: #43a047;
  font-weight: bold;
}

.edu-image {
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>

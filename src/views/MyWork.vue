<script setup lang="ts">
import { mdiLaptop } from "@mdi/js";
import pro1 from "../assets/pos.jpg";
import pro2 from "../assets/shop.png";
import pro3 from "../assets/mov.png";

const projects = [
  {
    name: "Web App POS D-Coffee",
    image: pro1,
    description:
      "This project is a POS system where I am responsible for UX and UI design and developing frontend functionality to connect with APIs. I work collaboratively with the team to bring the design and functionality together.",
    frontend: "https://gitlab.com/64160139/d-coffee-pro",
    backend: "https://gitlab.com/64160139/backend-project-data-code",
  },
  {
    name: "Software POS D-Coffee",
    image: pro1,
    description:
      "This project is a POS software where I handle UX and UI design and develop POS features. I work collaboratively with the team to bring the design and functionality together.",
    frontend: "https://gitlab.com/projectdcoffee/dcoffeesoftdev",
  },
  {
    name: "Web App E-Commerce",
    image: pro2,
    description:
      "This project is an e-commerce system where I handle UX and UI design, develop frontend functionality to connect with APIs, and conduct object-oriented analysis and design. I work collaboratively with the team to integrate design and functionality effectively.",
    frontend:
      "https://gitlab.com/Nitrous_lab/ooad_project-by-chuang-ni-yak-phak",
    backend:
      "https://gitlab.com/Nitrous_lab/ooad_project-by-chuang-ni-yak-phak",
  },
  {
    name: "Application MatchMov",
    image: pro3,
    description:
      "This project is a MatchMov application where I am responsible for UX and UI design and frontend development. I work collaboratively with the team to ensure seamless integration of design and functionality.",
    frontend: "https://gitlab.com/matchmov/match",
    backend: "https://gitlab.com/matchmov/matchmov-server",
  },
];
</script>

<template>
  <v-main class="back-ground">
    <v-row class="d-flex justify-center mb-6">
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-icon class="about-icon" :size="40">{{ mdiLaptop }}</v-icon>
        <div>
          <span class="about-title">My </span>
          <span class="about-title1">Projects</span>
        </div>
      </v-col>
    </v-row>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="project in projects"
          :key="project.name"
          cols="12"
          md="3"
          class="d-flex justify-center mb-4"
        >
          <v-card class="project-card">
            <v-img :src="project.image" class="project-image" height="160px" />
            <v-card-text class="project-card-text">
              <span class="project-title">{{ project.name }}</span>
              <p class="project-des">{{ project.description }}</p>
              <div class="btn-container">
                <v-btn
                  color="primary"
                  class="project-btn"
                  :href="project.frontend"
                  target="_blank"
                  >Frontend</v-btn
                >
                <v-btn
                  color="primary"
                  class="project-btn"
                  :href="project.backend"
                  target="_blank"
                  >Backend</v-btn
                >
              </div>
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
  background: linear-gradient(135deg, #6a1b9a, #8e24aa, #ad1457);
  min-height: 100vh;
  padding: 40px 20 px;
}

.about-title-container {
  margin-top: 40px;
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

.project-card {
  width: 400px;
  background-color: #1b1033;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-image {
  width: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.project-card-text {
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-family: "Kanit", sans-serif;
  font-size: 1.3rem;
  color: #fdd835;
  font-weight: bold;
}

.project-des {
  font-family: "Kanit", sans-serif;
  font-size: 1rem;
  color: #ffffff;
  margin: 10px 0;
}

.btn-container {
  display: flex;
  gap: 10px;
}

.project-btn {
  font-family: "kanit", sans-serif;
  text-transform: none;
  padding: 10px 20px;
}
</style>

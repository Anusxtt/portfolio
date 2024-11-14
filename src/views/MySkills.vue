<script setup lang="ts">
import {
  mdiLaptop,
  mdiNodejs,
  mdiFirebase,
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiLanguageJavascript,
  mdiLanguagePython,
} from "@mdi/js";

const skills = [
  { name: "NodeJS", icon: mdiNodejs },
  { name: "Firebase", icon: mdiFirebase },
  { name: "HTML5", icon: mdiLanguageHtml5 },
  { name: "CSS3", icon: mdiLanguageCss3 },
  { name: "JavaScript", icon: mdiLanguageJavascript },
  { name: "Python", icon: mdiLanguagePython },
];
</script>

<template>
  <v-main class="back-ground">
    <v-row class="d-flex justify-center mb-6">
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-icon class="about-icon" :size="40">{{ mdiLaptop }}</v-icon>
        <div>
          <span class="about-title">Skills &</span>
          <span class="about-title1">Abilities</span>
        </div>
      </v-col>
    </v-row>
    <v-container class="d-flex flex-wrap justify-center">
      <v-col
        cols="12"
        md="4"
        class="d-flex justify-center mb-2"
        v-for="skill in skills"
        :key="skill.name"
      >
        <v-card class="skill-card">
          <v-card-text
            class="d-flex align-center justify-center flex-column pa-3"
          >
            <v-icon :size="50" class="skill-icon">{{ skill.icon }}</v-icon>
            <span class="skill-name">{{ skill.name }}</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-container>
  </v-main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap");

.back-ground {
  background: linear-gradient(135deg, #6a1b9a, #311b92, #1b1033);
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

.skill-card {
  background-color: #1b1033;
  width: 180px;
  height: 130px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

.skill-card:hover {
  transform: translateY(-10px);
}

.skill-icon {
  color: #fdd835;
}

.skill-name {
  font-family: "Kanit", sans-serif;
  font-size: 1.2rem;
  color: #ffffff;
  font-weight: bold;
  margin-top: 10px;
}
</style>

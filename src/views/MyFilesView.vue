<script setup lang="ts">
import FancyButton from "@/components/FancyButton.vue";
import { mdiHeartOutline, mdiCursorDefaultClickOutline } from "@mdi/js";
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <FancyButton>
          <v-icon :icon="mdiHeartOutline" />Love Me
          <template v-slot:tail> Tail </template>
        </FancyButton>
      </v-col>
      <v-col>
        <FancyButton>
          <template #tail>
            <v-icon :icon="mdiCursorDefaultClickOutline" />
          </template>
          Click Me
        </FancyButton>
      </v-col>
    </v-row>
  </v-container>
</template>

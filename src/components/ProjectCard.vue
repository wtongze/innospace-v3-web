<template>
  <div class="project-card pa-4 px-md-8 my-4 rounded-lg">
    <div class="d-flex align-center justify-space-between">
      <div class="d-flex align-center">
        <v-img
          :src="require('../assets/logo.svg')"
          max-height="50"
          max-width="50"
          class="mr-4"
        ></v-img>
        <h3>InnoSpace</h3>
      </div>
    </div>
    <div class="tags mt-2">
      <v-chip label class="tag">Node.js</v-chip>
      <v-chip label class="tag">TypeScript</v-chip>
      <v-chip label class="tag">Jest</v-chip>
    </div>
    <div class="description mt-4">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
        asperiores vel libero corrupti veritatis consequatur voluptates
        doloremque. Facilis unde cumque id repellendus quia! Dicta,
        reprehenderit modi voluptate aliquid dolorum eum...
      </p>
    </div>
    <div class="action mt-4 d-flex justify-space-between align-center">
      <div class="font-weight-medium">5 Open Positions</div>
      <v-btn link color="#f7f7f7" depressed to="/project/innospace">
        Learn More
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProjectCard',
});
</script>

<style scoped>
.project-card {
  border: 2px solid #f1f3f5;
}

.tag {
  margin-right: 8px;
  margin-top: 8px;
  font-weight: 500;
  border-radius: 4px !important;
  background-color: #f1f3f5 !important;
}
</style>

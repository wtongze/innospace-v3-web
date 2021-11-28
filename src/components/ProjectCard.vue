<template>
  <div class="project-card px-8 py-4 my-4">
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
      <div class="d-flex meta-box">
        <div class="meta-item">
          <h4 class="font-weight-medium">Type</h4>
          <div>Student-Lead</div>
        </div>
        <div class="meta-item">
          <h4 class="font-weight-medium">Field</h4>
          <div>Web App</div>
        </div>
      </div>
    </div>
    <div class="tags mt-4">
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
    <div class="action mt-4 d-flex justify-space-between">
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
  border: 1px rgba(0, 0, 0, 0.12) solid;
  border-radius: 8px;
}

.meta-box {
  background-color: #f7f7f7;
  padding: 16px;
  border-radius: 8px;
}

.meta-item {
  margin-right: 16px;
  width: 125px;
}

.tag {
  margin-right: 8px;
  font-weight: 500;
}
</style>

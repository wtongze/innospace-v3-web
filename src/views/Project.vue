<template>
  <v-container class="project pa-md-8">
    <h1>Project</h1>
    <v-tabs v-model="mode">
      <v-tab>Joined</v-tab>
      <v-tab>Posted</v-tab>
    </v-tabs>
    <div>
      <project-card></project-card>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';

export default Vue.extend({
  name: 'Project',
  data: () => ({
    mode: 0,
  }),
  components: {
    ProjectCard,
  },
});
</script>

<style scoped>
.sort-select {
  width: 200px;
}
</style>

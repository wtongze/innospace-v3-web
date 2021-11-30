<template>
  <v-container class="search pa-md-8">
    <h1 class="mb-2">Search</h1>
    <v-text-field
      solo
      flat
      background-color="#f1f3f5"
      class="custom-text-field"
      prepend-inner-icon="mdi-magnify"
      placeholder="Keywords"
      v-model="search"
    >
      <template v-slot:append>
        <v-btn text color="primary"> Search </v-btn>
      </template>
    </v-text-field>
    <div class="trending">
      <h2 class="font-weight-medium mb-n2 text-h6">Recommended for you</h2>
      <div class="trending-list">
        <project-card></project-card>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';

export default Vue.extend({
  components: { ProjectCard },
  name: 'Search',
  data: () => ({
    search: '',
  }),
});
</script>

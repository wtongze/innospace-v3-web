<template>
  <v-container class="explore">
    <h1>Explore</h1>
    <h2 class="font-weight-regular" style="font-size: 20px">
      What's your role?
    </h2>
    <div class="role-picker mt-12">
      <div class="role-card">
        <v-img
          :src="require('../assets/talented-student.svg')"
          max-width="450"
        ></v-img>
        <div>
          <h2>Talented Student</h2>
          <p style="font-size: 20px">
            who want to have more job-related exprience before graduating?
          </p>
          <v-btn
            class="mt-4 rounded-lg"
            link
            to="/search"
            color="primary"
            large
            depressed
          >
            <v-icon class="mr-2">mdi-magnify</v-icon>
            Search for Position
          </v-btn>
        </div>
      </div>
      <div class="role-card">
        <v-img
          :src="require('../assets/project-owner.svg')"
          max-width="450"
        ></v-img>
        <div>
          <h2>Project Owner</h2>
          <p style="font-size: 20px">
            who want to get more talented students to help builing your awesome
            project?
          </p>
          <v-btn
            class="mt-4 rounded-lg"
            link
            to="/project/new"
            color="primary"
            large
            depressed
          >
            <v-icon class="mr-2">mdi-plus</v-icon>
            Post Your Project
          </v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Explore',
});
</script>

<style scoped>
.role-card {
  display: flex;
  align-items: center;
  margin: -80px 0;
}
</style>

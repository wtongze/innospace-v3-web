<template>
  <v-container class="explore pa-md-8">
    <h1>Explore</h1>
    <h2 class="font-weight-regular" style="font-size: 20px">What's your role?</h2>
    <div class="role-cards">
      <div style="width: 100%" class="mx-auto my-8 role-card">
        <v-row align="center" class="ma-0" justify="center">
          <v-col :class="isXs ? 'ma-n3 mb-n12' : 'ma-n8'">
            <img
              :src="require('@/assets/talented-student.svg')"
              height="300"
              class="d-block mx-auto"
            />
          </v-col>
          <v-col class="pa-8">
            <h2>Talented Student</h2>
            <p style="font-size: 18px">
              who want to have more job-related exprience before graduating?
            </p>
            <v-btn
              depressed
              :block="isXs"
              color="primary"
              class="mt-1"
              width="250"
              to="/explore/search"
            >
              <v-icon left dark> mdi-magnify </v-icon>
              Search for project
            </v-btn>
          </v-col>
        </v-row>
      </div>

      <div style="width: 100%" class="mx-auto my-8 role-card">
        <v-row align="center" class="ma-0" justify="center">
          <v-col :class="isXs ? 'ma-n3 mb-n12' : 'ma-n8'">
            <img
              :src="require('@/assets/project-owner.svg')"
              height="300"
              class="d-block mx-auto"
            />
          </v-col>
          <v-col class="pa-8">
            <h2>Project Owner</h2>
            <p style="font-size: 18px">
              who want to get more talented students to help builing your awesome project?
            </p>
            <v-btn
              depressed
              color="primary"
              :block="isXs"
              class="mt-1"
              width="250"
              to="/explore/new"
            >
              <v-icon left dark> mdi-plus </v-icon>
              Submit your project
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Explore',
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    isXs() {
      return this.$vuetify.breakpoint.xs;
    },
    isMd() {
      return this.$vuetify.breakpoint.md;
    },
  },
});
</script>

<style scoped>
.role-card {
  background-color: white;
  border-radius: 16px;
  border: 2px solid #f1f3f5;
}
</style>

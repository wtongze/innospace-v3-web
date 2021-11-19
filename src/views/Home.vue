<template>
  <v-container class="home pa-0 mt-3" fluid>
    <div class="header">
      <v-row justify="center" align="center">
        <v-col class="pa-4" cols="12" md="4">
          <h1 class="font-weight-bold text-h3 mb-2">InnoSpace,</h1>
          <h2 class="font-weight-medium" style="line-height: 30px">
            where <span class="marker-text">talented student</span> meet
            <span class="marker-text">project owners</span> and build great things together.
          </h2>
          <v-card elevation="0" class="rounded-lg mt-6" color="#f5f9fc">
            <v-card-title class="py-3">
              <v-icon class="mr-4">mdi-trophy</v-icon>
              2019 UCSC Springboard Award Winner
              <v-spacer></v-spacer>
              <v-btn
                icon
                href="https://officeofresearch.ucsc.edu/iatc/commercialization-/services/springboard-awardees.html"
                target="_blank"
              >
                <v-icon> mdi-open-in-new </v-icon>
              </v-btn>
            </v-card-title>
          </v-card>
          <div class="mt-6">
            <div>Sponsored By</div>
            <a target="_blank" href="https://officeofresearch.ucsc.edu/iatc/">
              <img :src="require('@/assets/ucsc.jpg')" height="50" class="d-inline-block ml-n3" />
              <img :src="require('@/assets/iatc.png')" height="50" class="d-inline-block ml-2" />
            </a>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div id="animate" style="max-height: 500px"></div>
        </v-col>
      </v-row>
    </div>
    <div class="role pa-4">
      <h2 class="text-center font-weight-medium mt-3">Choose your role...</h2>
      <div class="mx-auto">
        <v-row align="center" justify="center" class="ma-0">
          <v-col cols="4">
            <img
              :src="require('@/assets/talented-student.svg')"
              height="400"
              class="d-block mx-auto"
            />
          </v-col>
          <v-col cols="4">
            <h2>Talented Student</h2>
            <p style="font-size: 20px">
              who want to have more job-related exprience before graduating?
            </p>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" class="ma-0 mt-n6">
          <v-col cols="4">
            <img
              :src="require('@/assets/project-owner.svg')"
              height="400"
              class="d-block mx-auto"
            />
          </v-col>
          <v-col cols="4">
            <h2>Project Owner</h2>
            <p style="font-size: 20px">
              who want to get more talented students to help builing your awesome project?
            </p>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import lottie from 'lottie-web';
import animationData from '@/assets/scene.json';

export default Vue.extend({
  name: 'Home',

  mounted() {
    const element = document.getElementById('animate');
    if (element) {
      lottie.loadAnimation({
        container: element, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData,
      });
    }
  },
});
</script>

<style scoped>
.marker-text {
  font-family: 'Permanent Marker', cursive;
  color: #1976d2;
  font-size: 32px;
  letter-spacing: 2px;
}

.role {
  background-color: #f5f9fc;
}
</style>

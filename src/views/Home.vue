<template>
  <v-container class="home pa-0 mt-3" fluid>
    <div class="header px-1">
      <v-row
        justify="center"
        align="center"
        :class="$vuetify.breakpoint.mobile ? 'my-4' : 'my-16'"
        no-gutters
      >
        <v-col class="pa-4" cols="12" md="4">
          <h1 class="font-weight-bold text-h3 mb-2">InnoSpace,</h1>
          <h2 class="font-weight-medium" style="line-height: 30px">
            where <span class="marker-text text-primary">talented student</span> meet
            <span class="marker-text text-primary">project owners</span> and build great things
            together.
          </h2>
          <v-card elevation="0" class="rounded-lg mt-6" color="#f5f9fc">
            <v-row align="center" class="py-3 px-4" no-gutters>
              <v-col cols="1">
                <v-icon>mdi-trophy</v-icon>
              </v-col>
              <v-col>
                <div class="px-2">2019 UCSC Springboard Award Winner</div>
              </v-col>
              <v-col cols="1">
                <v-btn
                  icon
                  href="https://officeofresearch.ucsc.edu/iatc/commercialization-/services/springboard-awardees.html"
                  target="_blank"
                >
                  <v-icon> mdi-open-in-new </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
          <div class="mt-6">
            <div>Sponsored By</div>
            <a target="_blank" href="https://officeofresearch.ucsc.edu/iatc/">
              <img :src="require('@/assets/ucsc.jpg')" height="50" class="d-inline-block ml-n3" />
              <img
                :src="require('@/assets/iatc.png')"
                height="50"
                class="d-inline-block"
                :class="$vuetify.breakpoint.mobile ? 'ml-n1 mt-n4' : 'ml-2'"
              />
            </a>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div id="animate" style="max-height: 500px"></div>
        </v-col>
      </v-row>
    </div>
    <div class="role pa-4">
      <h2 class="text-center mt-3">Choose your role ...</h2>
      <div class="role-cards">
        <div
          :style="$vuetify.breakpoint.mobile ? 'width: 100%' : 'width: 55%'"
          class="mx-auto my-8 role-card"
        >
          <v-row align="center" class="ma-0">
            <v-col :class="$vuetify.breakpoint.xs ? 'ma-n3 mb-n12' : 'ma-n8'">
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
                :block="$vuetify.breakpoint.xs"
                color="primary"
                class="mt-1"
                width="250"
              >
                <v-icon left dark> mdi-magnify </v-icon>
                Search for position
              </v-btn>
            </v-col>
          </v-row>
        </div>

        <div
          :style="$vuetify.breakpoint.mobile ? 'width: 100%' : 'width: 55%'"
          class="mx-auto my-8 role-card"
        >
          <v-row align="center" class="ma-0">
            <v-col :class="$vuetify.breakpoint.xs ? 'ma-n3 mb-n12' : 'ma-n8'">
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
                :block="$vuetify.breakpoint.xs"
                class="mt-1"
                width="250"
              >
                <v-icon left dark> mdi-plus </v-icon>
                Submit your project
              </v-btn>
            </v-col>
          </v-row>
        </div>
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
  font-size: 32px;
  letter-spacing: 2px;
}

.text-primary {
  color: #1976d2;
}

.role {
  background-color: #f5f9fc;
}

.role-card {
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 24px #e8e8e8;
  transition: box-shadow 0.3s ease-in-out;
}

.role-card:hover {
  box-shadow: 0 0 96px #e0e0e0;
}
</style>

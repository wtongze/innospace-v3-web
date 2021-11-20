<template>
  <v-app>
    <v-app-bar app color="primary" dark flat>
      <div class="title" @click="goHome">InnoSpace</div>
      <v-spacer></v-spacer>
      <v-btn text>Login</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer style="background-color: #f1f3f5">
      <v-row align="center" justify="space-around" no-gutters>
        <v-col class="text-left">
          All Rights Reserverd © {{ new Date().getFullYear() }} InnoSpace.io
        </v-col>
        <v-col class="text-right">
          <div class="d-flex justify-end flex-column flex-md-row">
            <router-link to="/terms-and-conditions" class="clean-link mx-sm-2">
              Terms and Conditions
            </router-link>
            <router-link to="/privacy-policy" class="clean-link mx-sm-2">
              Privacy Policy
            </router-link>
            <router-link to="/cookies-policy" class="clean-link mx-sm-2">
              Cookies Policy
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),

  methods: {
    goHome() {
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
    },
  },
});
</script>

<style scoped>
.title {
  font-size: 20px;
  cursor: pointer;
}
</style>

<style>
.clean-link {
  color: #000 !important;
  text-decoration: none;
}

.legal-doc {
  word-break: break-word;
}

.legal-doc h1,
.legal-doc h2,
.legal-doc h3 {
  line-height: 1.25;
  margin-bottom: 4px;
  margin-top: 16px;
}
</style>

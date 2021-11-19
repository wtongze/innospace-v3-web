<template>
  <v-app>
    <v-app-bar app color="primary" dark flat>
      <v-app-bar-title>InnoSpace</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn text>Login</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer style="background-color: #f1f3f5">
      <v-row align="center" justify="space-around" no-gutters>
        <v-col class="text-left">
          All Rights Reserverd - © {{ new Date().getFullYear() }} InnoSpace.io
        </v-col>
        <v-col class="text-right">
          <router-link to="/terms-of-service" class="mx-2 clean-link">Terms of Service</router-link>
          <router-link to="/privacy-policy" class="mx-2 clean-link">Privacy Policy</router-link>
          <router-link to="/cookie-policy" class="mx-2 clean-link">Cookie Policy</router-link>
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
});
</script>

<style>
.v-app-bar-title__content {
  width: 100%;
}

.clean-link {
  color: #000 !important;
  text-decoration: none;
}
</style>

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
</style>

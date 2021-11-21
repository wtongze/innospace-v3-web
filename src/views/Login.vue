<template>
  <v-container class="login d-flex justify-center" :class="mdAndUp ? 'align-center' : ''">
    <v-card class="rounded-lg" :class="mdAndUp ? 'login-card pa-4' : 'login-card-mini'">
      <v-card-title class="login-card-title font-weight-bold mb-5">Sign In</v-card-title>
      <v-card-text>
        <v-text-field
          solo
          background-color="#f1f3f5"
          class="login-card-text-field"
          prepend-inner-icon="mdi-email"
          label="Email"
        ></v-text-field>
        <v-text-field
          type="password"
          solo
          background-color="#f1f3f5"
          class="login-card-text-field"
          prepend-inner-icon="mdi-lock"
          label="Password"
        ></v-text-field>
        <v-btn color="primary" elevation="0" block class="mb-4"> Sign in </v-btn>
        <v-divider></v-divider>
        <v-btn color="#f1f3f5" elevation="0" block class="mt-4 text-no-transform">
          SIGN IN with Google
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Login',
  computed: {
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
  },
});
</script>

<style scoped>
.login {
  height: 100%;
}

.login-card {
  max-width: 680px;
  width: 40%;
  border: 2px solid #f1f3f5;
  box-shadow: none !important;
}

.login-card-mini {
  width: 100%;
  box-shadow: none !important;
}

.login-card-title {
  font-size: 32px;
}

.text-no-transform {
  text-transform: none !important;
}
</style>

<style>
.login-card-text-field .v-input__slot {
  box-shadow: none !important;
}

.login-card-text-field .v-text-field__slot {
  margin: 0 8px !important;
}
</style>

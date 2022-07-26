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
        <v-alert type="info" text>Click signin button below to bypass login</v-alert>
        <v-btn color="primary" elevation="0" block class="mb-4 mt-4" @click="login">
          Sign in
        </v-btn>
        <v-divider></v-divider>
        <div id="firebaseui-auth-container" class="mb-n4"></div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

export default Vue.extend({
  name: 'Login',
  computed: {
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
  },
  data: () => ({
    auth: undefined,
  }),
  mounted() {
    if (this.$store.state.user) {
      this.$router.push('/dashboard');
    }
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: () => {
          ui.delete();
          this.$router.push('/dashboard');
          return false;
        },
      },
      signInFlow: this.mdAndUp ? 'popup' : 'redirect',
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
      tosUrl: '/terms-and-conditions',
      privacyPolicyUrl: '/privacy-policy',
    };
    ui.start('#firebaseui-auth-container', uiConfig);
  },
  methods: {
    login() {
      if (process.env.NODE_ENV === 'development') {
        const devUser = {
          displayName: 'John Doe',
          email: 'john.doe@example.com',
          // eslint-disable-next-line global-require
          photoURL: require('@/assets/logo.svg'),
        };
        this.$store.commit('setUser', devUser);
        this.$router.push('/dashboard');
      }
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

button.mdl-button {
  border-radius: 4px !important;
  box-shadow: none;
  border: 2px solid #f1f3f5;
}
</style>

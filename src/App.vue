<template>
  <v-app>
    <v-app-bar app color="primary" dark flat clipped-left>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="showNavDrawer && !$vuetify.breakpoint.lgAndUp"
      ></v-app-bar-nav-icon>
      <div class="title" @click="goHome">InnoSpace</div>
      <v-spacer></v-spacer>
      <v-btn text to="/login" v-if="showLoginBtn"> Login </v-btn>
      <v-btn text @click="$router.push('/dashboard')" v-if="showDashboardBtn"> Dashboard </v-btn>
      <v-btn text @click="logout" v-if="showLogoutBtn"> Logout </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-navigation-drawer
      app
      clipped
      floating
      color="#fafafa"
      class="nav-drawer"
      v-if="showNavDrawer"
      v-model="drawer"
      height="100%"
      :width="mdAndUp ? '300' : '80%'"
      :permanent="$vuetify.breakpoint.lgAndUp"
    >
      <v-list class="px-2">
        <v-list-item two-line>
          <v-list-item-avatar size="40">
            <img :src="photoURL" width="40" height="40" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              <b>{{ name }}</b>
            </v-list-item-title>
            <v-list-item-title>{{ email }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list nav dense class="mt-3 px-4">
        <v-list-item link class="px-4" v-for="item in navItems" :key="item.title" :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="nav-title">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="px-8 py-2 mb-3 d-flex flex-column nav-legal">
          <router-link
            v-for="legalItem in legalItems"
            :to="legalItem.to"
            :key="legalItem.to"
            class="clear-link legal-btn"
          >
            {{ legalItem.title }}
          </router-link>
          <div class="font-weight-medium mt-4">
            All Rights Reserved <br />© {{ new Date().getFullYear() }} InnoSpace.io
          </div>
        </div>
      </template>
    </v-navigation-drawer>

    <v-footer app absolute v-if="showFooter" class="footer">
      <v-row align="center" justify="space-around" no-gutters>
        <v-col class="text-left">
          All Rights Reserverd © {{ new Date().getFullYear() }} InnoSpace.io
        </v-col>
        <v-col class="text-right">
          <div class="d-flex justify-end flex-column flex-md-row">
            <router-link
              v-for="legalItem in legalItems"
              :to="legalItem.to"
              :key="legalItem.to"
              class="clean-link mx-sm-2"
            >
              {{ legalItem.title }}
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default Vue.extend({
  name: 'App',

  data: () => ({
    drawer: false,
    navItems: [
      {
        to: '/dashboard',
        icon: 'mdi-view-dashboard',
        title: 'Dashboard',
      },
      {
        to: '/explore',
        icon: 'mdi-compass',
        title: 'Explore',
      },
      {
        to: '/project',
        icon: 'mdi-cube',
        title: 'Project',
      },
      {
        to: '/application',
        icon: 'mdi-inbox',
        title: 'Application',
      },
      {
        to: '/profile',
        icon: 'mdi-account',
        title: 'Profile',
      },
    ] as { to: string; icon: string; title: string }[],
    legalItems: [
      {
        to: '/terms-and-conditions',
        title: 'Terms and Conditions',
      },
      {
        to: '/privacy-policy',
        title: 'Privacy Policy',
      },
      {
        to: '/cookies-policy',
        title: 'Cookies Policy',
      },
    ],
  }),

  computed: {
    showFooter() {
      return [
        '/',
        '/login',
        '/terms-and-conditions',
        '/privacy-policy',
        '/cookies-policy',
      ].includes(this.$route.path);
    },
    showNavDrawer() {
      return ![
        '/',
        '/login',
        '/terms-and-conditions',
        '/privacy-policy',
        '/cookies-policy',
      ].includes(this.$route.path);
    },
    showDashboardBtn() {
      return (
        ['/', '/terms-and-conditions', '/privacy-policy', '/cookies-policy'].includes(
          // eslint-disable-next-line comma-dangle
          this.$route.path
        ) && this.$store.state.user
      );
    },
    showLoginBtn() {
      return !['/login'].includes(this.$route.path) && !this.$store.state.user;
    },
    showLogoutBtn() {
      return !['/login'].includes(this.$route.path) && this.$store.state.user;
    },
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    name() {
      return this.$store.state.user?.displayName;
    },
    email() {
      return this.$store.state.user?.email;
    },
    photoURL() {
      return this.$store.state.user?.photoURL;
    },
  },

  methods: {
    goHome() {
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
    },
    async logout() {
      if (process.env.NODE_ENV === 'development') {
        this.$store.commit('setUser', undefined);
      } else {
        await firebase.auth().signOut();
      }
      this.$router.push('/');
    },
  },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('setUser', user);
      } else {
        this.$store.commit('setUser', undefined);
      }
    });
  },
});
</script>

<style scoped>
.title {
  font-size: 20px;
  cursor: pointer;
}

.legal-btn {
  color: inherit;
  text-decoration: none;
}

.nav-title {
  font-size: 16px !important;
}

.nav-legal {
  color: #7d7d7d;
  font-size: 14px;
}

.footer {
  background-color: #f1f3f5;
  font-size: 14px;
  color: #7d7d7d;
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

<style>
.custom-text-field .v-input__slot {
  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.custom-text-field .v-input__slot:hover {
  background-color: #e1e3e5 !important;
}

.custom-text-field.v-input--is-focused .v-input__slot:hover {
  background-color: #f1f3f5 !important;
}

.custom-text-field div[role='combobox'].v-input__slot {
  padding: 8px 12px !important;
}

.custom-text-field div[role='combobox'] .v-select__selections {
  min-height: 40px;
}
</style>

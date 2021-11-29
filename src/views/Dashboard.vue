<template>
  <v-container class="dashboard px-8 d-flex align-center">
    <v-row no-gutters align="center" class="flex-column flex-md-row">
      <v-col :cols="mdAndUp ? 5 : undefined">
        <img
          :src="require('../assets/dashboard-holder.svg')"
          class="dashboard-img"
          :class="mdAndUp ? '' : 'dashboard-img-mini'"
        />
      </v-col>
      <v-col :cols="mdAndUp ? 7 : undefined">
        <h1 class="text-h5 font-weight-bold">Hi {{ name }},</h1>
        <p class="mt-4 text-body-1">
          Nothing new here yet. You can check the navigation bar on the left to explore other
          projects on InnoSpace or track applications status. For project-owners, you can also edit
          your project information and review the applications you received.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Dashboard',
  computed: {
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    name() {
      return this.$store.state.user?.displayName;
    },
  },
  mounted() {
    console.log('mounted');
    this.$emit('dashboard-mount');
  },
});
</script>

<style scoped>
.dashboard {
  height: 100%;
}

.dashboard-img {
  width: 100%;
}

.dashboard-img-mini {
  max-height: 350px;
}
</style>

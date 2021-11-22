<template>
  <v-container class="dashboard px-8">
    <div class="d-flex align-center justify-md-center flex-md-row flex-column dashboard-box">
      <img :src="require('../assets/dashboard-holder.svg')" class="dashboard-img" />
      <div class="ml-md-8 px-md-0">
        <h1 style="font-size: 24px">Hi Tongze Wang,</h1>
        <p style="font-size: 18px" class="mt-4">
          Nothing new here yet. You can check the navigation bar on the left to explore other
          projects on InnoSpace or track applications status. For project-owners, you can also edit
          your project information and review the applications you received.
        </p>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Dashboard',
});
</script>

<style scoped>
.dashboard-box {
  height: calc(100vh - 124px);
}

.dashboard-img {
  width: 100%;
  max-width: 500px;
}
</style>

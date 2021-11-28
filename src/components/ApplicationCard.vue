<template>
  <div class="application-card px-8 py-4 my-4">
    <div class="d-flex align-center justify-space-between">
      <div class="d-flex align-center">
        <v-img
          :src="require('../assets/logo.svg')"
          max-height="50"
          max-width="50"
          class="mr-4"
        ></v-img>
        <div class="mr-4">
          <h3>Front-End Developer</h3>
          <h3 class="font-weight-medium" style="font-size: 16px">InnoSpace</h3>
        </div>
        <div>
          <v-chip color="warning" label class="font-weight-medium rounded-lg">
            Pending Review
          </v-chip>
        </div>
      </div>
      <div class="d-flex meta-box">
        <div class="meta-item">
          <h4 class="font-weight-medium">Type</h4>
          <div>Student</div>
        </div>
        <div class="meta-item">
          <h4 class="font-weight-medium">Name</h4>
          <div>Tongze Wang</div>
        </div>
      </div>
    </div>
    <div class="action mt-4 d-flex align-center justify-space-between">
      <div style="margin-left: 66px">2021/03/02 03:45 PM</div>
      <v-btn link color="#f7f7f7" depressed to="/application/123">
        Learn More
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ApplicationCard',
});
</script>

<style scoped>
.application-card {
  border: 1px rgba(0, 0, 0, 0.12) solid;
  border-radius: 8px;
}

.meta-box {
  background-color: #f7f7f7;
  padding: 16px;
  border-radius: 8px;
}

.meta-item {
  margin-right: 16px;
  width: 125px;
}

.tag {
  margin-right: 8px;
  font-weight: 500;
}
</style>

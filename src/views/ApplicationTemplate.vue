<template>
  <v-container class="position-template pa-md-8">
    <div class="d-flex align-center justify-space-between">
      <div class="d-flex align-center">
        <v-img
          :src="require('../assets/logo.svg')"
          max-height="50"
          max-width="50"
          class="mr-4"
        ></v-img>
        <div class="mr-4">
          <h1 style="font-size: 24px">Front-End Developer</h1>
          <h3 class="font-weight-medium mt-n1" style="font-size: 16px">
            InnoSpace
          </h3>
        </div>
        <div>
          <v-chip color="warning" label class="font-weight-medium rounded-lg">
            Pending Review
          </v-chip>
        </div>
      </div>
      <div class="d-flex align-center">
        <v-btn color="error" depressed class="mr-4">
          <v-icon class="mr-2">mdi-close</v-icon>
          Reject
        </v-btn>
        <v-btn color="success" depressed class="mr-4">
          <v-icon class="mr-2">mdi-check</v-icon>
          Accept
        </v-btn>
        <v-btn color="error" text>
          <v-icon class="mr-2">mdi-delete</v-icon>
          Withdraw
        </v-btn>
      </div>
    </div>
    <div class="mt-4 meta-card">
      <div class="d-flex align-center">
        <div class="meta-item">
          <div class="font-weight-medium">Name</div>
          <div>Tongze Wang</div>
        </div>
        <div class="meta-item">
          <div class="font-weight-medium">Email</div>
          <div>wtongze@gmail.com</div>
        </div>
        <div class="meta-item">
          <div class="font-weight-medium">Phone</div>
          <div>+1 831-400-7920</div>
        </div>
        <div class="meta-item">
          <div class="font-weight-medium">Type</div>
          <div>Student</div>
        </div>
      </div>
      <div class="d-flex align-center mt-4">
        <div class="meta-item">
          <div class="font-weight-medium">Sent / Received</div>
          <div>07/01/2021 03:12 PM</div>
        </div>
        <div class="meta-item">
          <div class="font-weight-medium">Withdrawed / Reviewed</div>
          <div>07/01/2021 03:12 PM</div>
        </div>
        <div class="meta-item">
          <div class="font-weight-medium">Rejected / Accepted</div>
          <div>07/01/2021 03:12 PM</div>
        </div>
      </div>
    </div>
    <div class="mt-6 resume">
      <v-btn block x-large depressed height="84">
        <v-icon class="mr-2">mdi-file-outline</v-icon>
        Resume
      </v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PositionTemplate',
});
</script>

<style scoped>
.meta-card {
  background-color: #f7f7f7;
  padding: 25px;
  border-radius: 8px;
}

.meta-item {
  width: 25%;
}
</style>

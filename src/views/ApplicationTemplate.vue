<template>
  <v-container class="application-template pa-md-8">
    <v-btn depressed class="mb-6" @click="$router.go(-1)">
      <v-icon left> mdi-chevron-left </v-icon>
      Back
    </v-btn>
    <div class="d-flex align-center justify-space-between">
      <div :class="baseClass" :style="mdAndUp ? '' : 'width: 100%'">
        <div class="d-flex align-center">
          <v-img
            :src="require('../assets/logo.svg')"
            max-height="50"
            max-width="50"
            class="mr-4"
          ></v-img>
          <div class="mr-4">
            <h1 style="font-size: 24px; line-height: 24px">Front-End Developer</h1>
            <h3 class="font-weight-medium" style="font-size: 16px">InnoSpace</h3>
          </div>
        </div>
        <div>
          <v-chip color="warning" label class="font-weight-medium rounded-lg mt-3 mt-md-0">
            Pending Review
          </v-chip>
        </div>
      </div>
      <div
        class="d-flex align-center mb-0 mb-md-0 justify-space-between"
        :style="mdAndUp ? '' : 'width: 100%'"
        v-if="mdAndUp"
      >
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
    <div class="mt-6 px-3 px-md-6">
      <v-row>
        <v-col :cols="cols">
          <div>
            <div class="font-weight-medium">Name</div>
            <div>Tongze Wang</div>
          </div>
        </v-col>
        <v-col :cols="cols">
          <div>
            <div class="font-weight-medium">Email</div>
            <div>wtongze@gmail.com</div>
          </div>
        </v-col>
        <v-col :cols="cols">
          <div>
            <div class="font-weight-medium">Phone</div>
            <div>+1 831-400-7920</div>
          </div>
        </v-col>
        <v-col :cols="cols">
          <div>
            <div class="font-weight-medium">Sent / Received</div>
            <div>07/01/2021 03:12 PM</div>
          </div>
        </v-col>
        <v-col :cols="cols">
          <div>
            <div class="font-weight-medium">Withdrawed / Reviewed</div>
            <div>07/01/2021 03:12 PM</div>
          </div>
        </v-col>
        <v-col :cols="cols">
          <div>
            <div class="font-weight-medium">Rejected / Accepted</div>
            <div>07/01/2021 03:12 PM</div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="mt-6 resume">
      <v-btn block x-large depressed height="84">
        <v-icon class="mr-2">mdi-file-outline</v-icon>
        Resume
      </v-btn>
    </div>
    <div
      class="d-flex align-center mt-6 mb-3 justify-space-between"
      style="width: 100%"
      v-if="!mdAndUp"
    >
      <v-btn color="error" depressed>
        <v-icon class="mr-2" left>mdi-close</v-icon>
        Reject
      </v-btn>
      <v-btn color="success" depressed>
        <v-icon class="mr-2" left>mdi-check</v-icon>
        Accept
      </v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PositionTemplate',
  data: () => ({
    fab: false,
    baseClass: [
      'd-flex',
      'flex-column',
      'flex-md-row',
      'align-start',
      'align-md-center',
      'justify-space-between',
    ],
  }),
  computed: {
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    cols() {
      if (this.mdAndUp) {
        return 4;
      }
      return 12;
    },
  },
});
</script>

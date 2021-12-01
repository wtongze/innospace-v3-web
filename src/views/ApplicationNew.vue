<template>
  <v-container class="application-new pa-md-8">
    <h1>New Application</h1>
    <v-row no-gutters class="mx-n2 mt-4">
      <v-col :cols="cols">
        <div class="mx-2">
          <p class="text-subtitle-1 font-weight-medium mb-1">Name</p>
          <v-text-field
            solo
            flat
            background-color="#f1f3f5"
            class="custom-text-field"
            placeholder="John Doe"
          ></v-text-field>
        </div>
      </v-col>
      <v-col :cols="cols">
        <div class="mx-2">
          <p class="text-subtitle-1 font-weight-medium mb-1">Email</p>
          <v-text-field
            solo
            flat
            background-color="#f1f3f5"
            class="custom-text-field"
            placeholder="john.doe@example.com"
          ></v-text-field>
        </div>
      </v-col>
      <v-col :cols="cols">
        <div class="mx-2">
          <p class="text-subtitle-1 font-weight-medium mb-1">Phone</p>
          <v-text-field
            solo
            flat
            background-color="#f1f3f5"
            class="custom-text-field"
            placeholder="+1 000-000-0000"
          ></v-text-field>
        </div>
      </v-col>
      <v-col :cols="cols">
        <div class="mx-2">
          <p class="text-subtitle-1 font-weight-medium mb-1">Resume</p>
          <v-file-input
            solo
            flat
            background-color="#f1f3f5"
            class="custom-text-field"
            prepend-icon=""
            placeholder="Click to upload"
          ></v-file-input>
        </div>
      </v-col>
    </v-row>
    <div class="d-flex align-center justify-space-between justify-md-end">
      <v-btn class="mr-0 mr-md-4" :text="mdAndUp" :depressed="!mdAndUp">Preview</v-btn>
      <v-btn color="primary" depressed to="/application/1">Submit</v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProjectNew',
  computed: {
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    cols() {
      if (this.mdAndUp) {
        return 6;
      }
      return 12;
    },
  },
});
</script>

<style scoped></style>

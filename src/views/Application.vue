<template>
  <v-container class="application">
    <h1>Application</h1>
    <div class="d-flex align-center justify-space-between mt-2 mb-n4">
      <v-tabs v-model="mode" style="margin-top: -28px">
        <v-tab>Sent</v-tab>
        <v-tab>Received</v-tab>
      </v-tabs>
      <v-select
        label="Sort"
        :items="sortOptions"
        solo
        class="sort-select mr-4"
        dense
      ></v-select>
      <v-text-field
        solo
        dense
        label="Filter"
        class="sort-select"
        clearable
      ></v-text-field>
    </div>
    <div>
      <application-card></application-card>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import ApplicationCard from '@/components/ApplicationCard.vue';

export default Vue.extend({
  name: 'Application',
  data: () => ({
    mode: 0,
    sortOptions: [
      {
        text: 'Default',
        value: 'default',
      },
      {
        text: 'By Name',
        value: 'by-name',
      },
    ] as {
      text: string;
      value: string;
    }[],
  }),
  components: {
    ApplicationCard,
  },
});
</script>

<style scoped>
.sort-select {
  width: 200px;
}
</style>

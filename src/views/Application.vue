<template>
  <v-container class="application pa-md-8">
    <h1>Application</h1>
    <v-tabs v-model="mode">
      <v-tab>Sent</v-tab>
      <v-tab>Received</v-tab>
    </v-tabs>
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

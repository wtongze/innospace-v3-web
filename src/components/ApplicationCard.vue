<template>
  <router-link :to="to" class="text-decoration-none black--text">
    <div class="application-card pa-4 px-md-8 my-4 rounded-lg" v-ripple>
      <div class="d-flex align-center justify-space-between">
        <div>
          <div class="d-flex align-start align-sm-center flex-column flex-sm-row">
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
            </div>
            <div class="mt-4 mt-sm-0">
              <v-chip color="warning" label class="font-weight-medium rounded-lg">
                Pending Review
              </v-chip>
            </div>
          </div>
          <div class="text-caption grey--text text--darken-3 mt-4">2021/03/02 03:45 PM</div>
        </div>
        <div class="d-none d-sm-block">
          <v-icon>mdi-information-outline</v-icon>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ApplicationCard',
  props: ['to'],
});
</script>

<style scoped>
.application-card {
  border: 2px #f1f3f5 solid;
}

.tag {
  margin-right: 8px;
  font-weight: 500;
}
</style>

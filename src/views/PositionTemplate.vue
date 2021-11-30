<template>
  <v-container class="position-template pa-md-8">
    <v-btn depressed class="mb-6" @click="$router.go(-1)">
      <v-icon left> mdi-chevron-left </v-icon>
      Back
    </v-btn>
    <div :class="baseClass">
      <div class="d-flex align-center">
        <v-img
          :src="require('../assets/logo.svg')"
          max-height="50"
          max-width="50"
          class="mr-4"
        ></v-img>
        <div class="mr-4">
          <h1 style="font-size: 24px">Front-End Developer</h1>
          <h3 class="font-weight-medium mt-n1" style="font-size: 16px">InnoSpace</h3>
        </div>
      </div>
      <div
        class="d-flex align-center mb-0 mb-md-0 justify-space-between"
        :style="mdAndUp ? '' : 'width: 100%'"
      >
        <v-btn color="error" text class="mr-md-4" v-if="mdAndUp">
          <v-icon class="mr-2">mdi-delete</v-icon>
          Delete
        </v-btn>
        <v-btn color="primary" text class="mr-md-4" v-if="mdAndUp">
          <v-icon class="mr-2">mdi-pencil</v-icon>
          Edit
        </v-btn>
        <v-btn color="info" depressed to="/application/new" v-if="mdAndUp">
          <v-icon class="mr-2">mdi-send</v-icon>
          Apply
        </v-btn>
        <v-speed-dial v-model="fab" bottom="bottom" right="right" class="fab" v-else>
          <template v-slot:activator>
            <v-btn v-model="fab" color="blue darken-2" dark fab>
              <v-icon v-if="fab"> mdi-close </v-icon>
              <v-icon v-else> mdi-account-plus </v-icon>
            </v-btn>
          </template>
          <v-btn fab dark small color="info">
            <v-icon>mdi-send</v-icon>
          </v-btn>
          <v-btn fab dark small color="primary">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn fab dark small color="error">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-speed-dial>
      </div>
    </div>
    <div :class="tagsClass">
      <div class="d-flex">
        <v-chip label class="tag">Node.js</v-chip>
        <v-chip label class="tag">TypeScript</v-chip>
        <v-chip label class="tag">Jest</v-chip>
      </div>
      <p class="mb-0 mt-2 mt-md-0 grey--text lighten-1--text">{{ new Date().toLocaleString() }}</p>
    </div>

    <div class="mt-6">
      <h2 class="mb-2" style="font-size: 20px">Type</h2>
      <div>
        <p>Unpaid Volunteer</p>
      </div>
    </div>
    <div class="mt-6">
      <h2 class="mb-2" style="font-size: 20px">Contact</h2>
      <div>
        <p>John Doe &lt;john.doe@example.com&gt;</p>
      </div>
    </div>
    <div class="description mt-6">
      <h2 class="mb-2" style="font-size: 20px">Description</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum magnam omnis sequi
          temporibus explicabo dicta dolorem, autem optio, obcaecati non et fugiat suscipit! Aperiam
          ipsum at iusto minima reiciendis!
        </p>
      </div>
    </div>
    <div class="requirement mt-6">
      <h2 class="mb-2" style="font-size: 20px">Requirement</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum magnam omnis sequi
          temporibus explicabo dicta dolorem, autem optio, obcaecati non et fugiat suscipit! Aperiam
          ipsum at iusto minima reiciendis!
        </p>
      </div>
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
      'flex-column-reverse',
      'flex-md-row',
      'align-start',
      'align-md-center',
      'justify-space-between',
    ],
    tagsClass: [
      'mt-4',
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
  },
});
</script>

<style scoped>
.tag {
  background-color: #f1f3f5 !important;
  margin-right: 8px;
  font-weight: 500;
}

.fab {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
}
</style>

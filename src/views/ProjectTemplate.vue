<template>
  <v-container class="project-template pa-md-8">
    <div :class="baseClass">
      <div class="d-flex align-center">
        <v-img
          :src="require('../assets/logo.svg')"
          max-height="50"
          max-width="50"
          class="mr-4"
        ></v-img>
        <h1>InnoSpace</h1>
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
        <v-btn color="info" depressed to="/position/new" v-if="mdAndUp">
          <v-icon class="mr-2">mdi-account-plus</v-icon>
          Add Position
        </v-btn>
        <v-btn color="info" to="/position/new" v-else fab class="fab">
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
      </div>
    </div>
    <div :class="tagsClass">
      <div class="d-flex">
        <v-chip label class="tag">Node.js</v-chip>
        <v-chip label class="tag">TypeScript</v-chip>
        <v-chip label class="tag">Jest</v-chip>
      </div>
      <v-btn
        :text="mdAndUp"
        color="primary"
        :outlined="!mdAndUp"
        elevation="0"
        class="mt-4 mt-md-0"
        :style="mdAndUp ? undefined : 'width: 100%'"
      >
        5 Open Positions
        <v-icon class="ml-1">mdi-chevron-down</v-icon>
      </v-btn>
    </div>
    <div class="description mt-6">
      <h2 class="mb-2" style="font-size: 20px">Contact</h2>
      <div>
        <p>John Doe &lt;john.doe@example.com&gt;</p>
      </div>
    </div>
    <div class="description mt-6">
      <h2 class="mb-2" style="font-size: 20px">Website</h2>
      <div class="d-flex align-center">
        <p class="mb-0 mr-2">https://example.com</p>
        <v-btn icon href="https://example.com" target="_blank">
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
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
    <div class="position mt-8">
      <h2 class="mb-2" style="font-size: 20px">Positions</h2>
      <div class="position-items">
        <div :class="positionItemsClass">
          <div class="d-flex flex-column flex-md-row align-start align-md-center">
            <div class="font-weight-medium mr-12">07/01/2021</div>
            <div>
              <h3 class="font-weight-medium" style="font-size: 18px">Front-End Developer</h3>
              <div>Unpaid Volunteer</div>
            </div>
          </div>
          <div>
            <v-btn
              :text="mdAndUp"
              :depressed="!mdAndUp"
              :color="mdAndUp ? 'primary' : '#f1f3f5'"
              to="/position/123"
              class="mt-4 mt-md-0"
              >Learn More</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProjectTemplate',
  data: () => ({
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
    positionItemsClass: [
      'position-item',
      'd-flex',
      'flex-column',
      'flex-md-row',
      'align-start',
      'align-md-center',
      'justify-space-between',
      'mb-4',
      'px-3',
      'px-md-6',
      'py-3',
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

.position-item {
  border: 2px #f1f3f5 solid;
  border-radius: 8px;
}
</style>

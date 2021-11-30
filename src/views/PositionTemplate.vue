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
      </div>
      <div class="d-flex align-center">
        <v-btn color="error" text class="mr-4">
          <v-icon class="mr-2">mdi-delete</v-icon>
          Delete
        </v-btn>
        <v-btn color="primary" outlined class="mr-4">
          <v-icon class="mr-2">mdi-pencil</v-icon>
          Edit
        </v-btn>
        <v-btn color="info" depressed to="/application/new">
          <v-icon class="mr-2">mdi-send</v-icon>
          Apply
        </v-btn>
      </div>
    </div>
    <div class="tags mt-4">
      <div>
        <v-chip label class="tag">Node.js</v-chip>
        <v-chip label class="tag">TypeScript</v-chip>
        <v-chip label class="tag">Jest</v-chip>
      </div>
    </div>
    <div class="mt-4 meta-card">
      <div class="d-flex align-center">
        <div class="meta-item">
          <div class="font-weight-medium">Type</div>
          <div>Unpaid Volunteer</div>
        </div>
        <div class="meta-item">
          <div class="font-weight-medium">Field</div>
          <div>Front-End Developer</div>
        </div>
        <div class="meta-item">
          <div class="font-weight-medium">Created at</div>
          <div>07/01/2021 03:12 PM</div>
        </div>
        <div class="meta-item">
          <div class="font-weight-medium">Due at</div>
          <div>Until Filled</div>
        </div>
      </div>
      <div class="mt-4 d-flex align-center">
        <div>
          <div class="font-weight-medium">Contact</div>
          <div>Tongze Wang &lt;twang141@ucsc.edu&gt;</div>
        </div>
      </div>
    </div>
    <div class="description mt-6">
      <h2 class="mb-2" style="font-size: 20px">Description</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum
          magnam omnis sequi temporibus explicabo dicta dolorem, autem optio,
          obcaecati non et fugiat suscipit! Aperiam ipsum at iusto minima
          reiciendis!
        </p>
      </div>
    </div>
    <div class="requirement mt-6">
      <h2 class="mb-2" style="font-size: 20px">Requirement</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum
          magnam omnis sequi temporibus explicabo dicta dolorem, autem optio,
          obcaecati non et fugiat suscipit! Aperiam ipsum at iusto minima
          reiciendis!
        </p>
      </div>
    </div>
    <div class="prefered mt-6">
      <h2 class="mb-2" style="font-size: 20px">Prefered</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum
          magnam omnis sequi temporibus explicabo dicta dolorem, autem optio,
          obcaecati non et fugiat suscipit! Aperiam ipsum at iusto minima
          reiciendis!
        </p>
      </div>
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

.tag {
  margin-right: 8px;
  font-weight: 500;
}
</style>

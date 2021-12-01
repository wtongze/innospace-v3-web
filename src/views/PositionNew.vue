<template>
  <v-container class="position-new pa-md-8">
    <h1>New Position</h1>
    <v-row no-gutters class="mx-n2 mt-4">
      <v-col :cols="cols">
        <div class="mx-2">
          <p class="text-subtitle-1 font-weight-medium mb-1">Title</p>
          <v-text-field
            solo
            flat
            background-color="#f1f3f5"
            class="custom-text-field"
            placeholder="Position Title"
          ></v-text-field>
        </div>
      </v-col>
      <v-col :cols="cols">
        <div class="mx-2">
          <p class="text-subtitle-1 font-weight-medium mb-1">Type</p>
          <v-select
            :items="['Unpaid Volunteer']"
            label="Position Type"
            solo
            flat
            background-color="#f1f3f5"
            class="custom-text-field"
          ></v-select>
        </div>
      </v-col>
      <v-col cols="12">
        <div class="mx-2">
          <p class="text-subtitle-1 font-weight-medium mb-1">Skills</p>
          <v-combobox
            v-model="skills.model"
            :items="skills.list"
            :search-input.sync="skills.search"
            hide-selected
            multiple
            solo
            flat
            background-color="#f1f3f5"
            class="custom-text-field"
          >
            <template v-slot:no-data>
              <v-list-item v-if="skills.search">
                <v-list-item-content>
                  <v-list-item-title>
                    No results matching "<strong>{{ skills.search }}</strong
                    >". Press <kbd>enter</kbd> to create a new one
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <template v-slot:selection="{ item }">
              <v-chip color="grey darken-1" dark class="font-weight-medium">
                {{ item }}
              </v-chip>
            </template>
          </v-combobox>
        </div>
      </v-col>
      <v-col cols="12">
        <div class="mx-2">
          <p class="text-subtitle-1 font-weight-medium mb-1">Position Description</p>
          <v-textarea
            solo
            flat
            background-color="#f1f3f5"
            class="custom-text-field"
            placeholder="Position Description"
          ></v-textarea>
        </div>
      </v-col>
      <v-col cols="12">
        <div class="mx-2">
          <p class="text-subtitle-1 font-weight-medium mb-1">Position Requirement</p>
          <v-textarea
            solo
            flat
            background-color="#f1f3f5"
            class="custom-text-field"
            placeholder="Position Requirement"
          ></v-textarea>
        </div>
      </v-col>
      <v-col cols="12">
        <div class="mx-2">
          <v-checkbox label="Visiable to all" class="mt-0 pt-0"></v-checkbox>
        </div>
      </v-col>
    </v-row>
    <div class="d-flex align-center justify-space-between justify-md-end">
      <v-btn class="mr-0 mr-md-4" :text="mdAndUp" :depressed="!mdAndUp">Preview</v-btn>
      <v-btn color="primary" depressed to="/project/innospace">Submit</v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PositionNew',
  data: () => ({
    skills: {
      model: [],
      search: null,
      list: ['C++', 'Node.js', 'Python', 'JavaScript', 'Vue.js', 'React.js'],
    },
  }),
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

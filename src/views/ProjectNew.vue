<template>
  <v-container class="pa-md-8">
    <h1>Create a New Project</h1>
    <v-row no-gutters class="mx-n2 mt-4">
      <v-col :cols="cols">
        <div class="mx-2">
          <p class="text-subtitle-1 font-weight-medium mb-1">Name</p>
          <v-text-field
            solo
            flat
            background-color="#f1f3f5"
            class="custom-text-field"
            placeholder="Project Name"
          ></v-text-field>
        </div>
      </v-col>
      <v-col :cols="cols">
        <div class="mx-2">
          <p class="text-subtitle-1 font-weight-medium mb-1">ID</p>
          <v-text-field
            solo
            flat
            background-color="#f1f3f5"
            class="custom-text-field"
            placeholder="project-id"
            hint="https://innospace.io/project/"
          ></v-text-field>
        </div>
      </v-col>
      <v-col :cols="cols">
        <div class="mx-2">
          <p class="text-subtitle-1 font-weight-medium mb-1">Logo</p>
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
      <v-col :cols="cols">
        <div class="mx-2">
          <p class="text-subtitle-1 font-weight-medium mb-1">Website</p>
          <v-text-field
            solo
            flat
            background-color="#f1f3f5"
            class="custom-text-field"
            placeholder="https://www.example.com"
          ></v-text-field>
        </div>
      </v-col>
      <v-col :cols="cols">
        <div class="mx-2">
          <p class="text-subtitle-1 font-weight-medium mb-1">Contact Name</p>
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
          <p class="text-subtitle-1 font-weight-medium mb-1">Contact Email</p>
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
      <v-col :cols="cols">
        <div class="mx-2">
          <p class="text-subtitle-1 font-weight-medium mb-1">Fields</p>
          <v-combobox
            v-model="fields.model"
            :items="fields.list"
            :search-input.sync="fields.search"
            hide-selected
            multiple
            solo
            flat
            background-color="#f1f3f5"
            class="custom-text-field"
          >
            <template v-slot:no-data>
              <v-list-item v-if="fields.search">
                <v-list-item-content>
                  <v-list-item-title>
                    No results matching "<strong>{{ fields.search }}</strong
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
          <p class="text-subtitle-1 font-weight-medium mb-1">Description</p>
          <v-textarea
            solo
            flat
            background-color="#f1f3f5"
            class="custom-text-field"
            placeholder="Project Description"
          ></v-textarea>
        </div>
      </v-col>
      <v-col cols="12">
        <div class="mx-2 d-flex justify-md-end">
          <v-btn color="primary" depressed :block="!mdAndUp" to="/project/innospace">
            Create Project
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProjectNew',
  data: () => ({
    skills: {
      model: [],
      search: null,
      list: ['C++', 'Node.js', 'Python', 'JavaScript', 'Vue.js', 'React.js'],
    },
    fields: {
      model: [],
      search: null,
      list: ['Web Development', 'Mobile App', 'Embedded System', 'Network Programming'],
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

<template>
  <v-container class="profile pa-md-8">
    <h1 class="mb-4">Profile</h1>
    <v-row no-gutters class="mx-n2">
      <v-col :cols="cols">
        <div class="mx-2">
          <p class="text-subtitle-1 font-weight-medium mb-1">Name</p>
          <v-text-field
            solo
            flat
            background-color="#f1f3f5"
            class="custom-text-field"
            :value="$store.state.user.displayName"
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
            :value="$store.state.user.email"
          ></v-text-field>
        </div>
      </v-col>
      <v-col :cols="cols">
        <div class="mx-2">
          <p class="text-subtitle-1 font-weight-medium mb-1">Phone Number</p>
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
                    No results matching "<strong>{{ search }}</strong
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
          <p class="text-subtitle-1 font-weight-medium mb-1">Interested Fields</p>
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
                    No results matching "<strong>{{ search }}</strong
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
        <div class="mx-2 d-flex justify-md-end">
          <v-btn color="primary" depressed :block="!mdAndUp">
            Save Profile
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Profile',
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

<style>
.custom-text-field .v-input__slot {
  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.custom-text-field .v-input__slot:hover {
  background-color: #e1e3e5 !important;
}

.custom-text-field.v-input--is-focused .v-input__slot:hover {
  background-color: #f1f3f5 !important;
}

.custom-text-field div[role='combobox'].v-input__slot {
  padding: 8px 12px !important;
}

.custom-text-field div[role='combobox'] .v-select__selections {
  min-height: 40px;
}
</style>

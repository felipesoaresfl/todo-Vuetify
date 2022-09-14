<template>
  <v-toolbar dense color="#43A047">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>ToDoList - Vuetify</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon color="white">
      <v-icon>fa-solid fa-magnifying-glass</v-icon>
    </v-btn>

    <v-btn icon color="white" :to="{ name: 'home' }">
      <v-icon>fa-solid fa-ellipsis-vertical</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

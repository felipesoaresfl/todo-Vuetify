<template>
  <div>
    <v-toolbar dense fixed color="#43A047" class="white--text">
      <v-toolbar-title>ToDoList - Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon color="white">
        <v-icon>fa-solid fa-magnifying-glass</v-icon>
      </v-btn>

      <v-btn icon color="white" @click.stop="drawer = !drawer">
        <v-icon>fa-solid fa-ellipsis-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
};
</script>

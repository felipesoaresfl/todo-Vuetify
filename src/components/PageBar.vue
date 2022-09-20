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

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ getLoggedUser.username }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
  computed: {
    getLoggedUser() {
      const userStr = localStorage.getItem("user");
      const user = JSON.parse(userStr);
      return user;
    },
  },
};
</script>

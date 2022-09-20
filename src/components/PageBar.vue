<template>
  <div>
    <v-toolbar dense fixed color="#43A047" class="white--text">
      <v-app-bar-nav-icon
        color="white"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>ToDoList - Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon color="white">
        <v-icon>fa-solid fa-magnifying-glass</v-icon>
      </v-btn>

      <v-btn icon color="white">
        <v-icon @click="loggingOut">mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-avatar color="blue">
            <span class="white--text text-h5">{{
              getLoggedUser?.name
                .split(" ")
                .map((e) => e[0])
                .join("")
            }}</span>
          </v-avatar>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ getLoggedUser.name }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ getLoggedUser.username }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="{ name: item.routes }"
        >
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
        { title: "Home", icon: "mdi-home", routes: "home" },
        { title: "Category", icon: "mdi-shape", routes: "taskSummary" },
      ],
    };
  },
  methods: {
    loggingOut() {
      localStorage.clear();
      this.$router.push({ name: "home" });
    },
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

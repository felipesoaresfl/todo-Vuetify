<template>
  <v-footer dark padless fixed color="green darken-1">
    <v-card flat tile class="green darken-1 white--text text-center mx-auto">
      <v-card-text>
        <v-btn
          v-for="item in links"
          :key="item.icon"
          :href="item.link"
          target="_blank"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text"
        >Copyright® {{ new Date().getFullYear() }} —
        <strong>Felipe Soares</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    links: [
      {
        icon: "mdi-github",
        link: "https://github.com/felipesoaresfl/todo-Vuetify",
      },
      {
        icon: "mdi-slack",
        link: "https://buserbrasil.slack.com/app_redirect?channel=U03A9DB8R8U",
      },
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/felipesoaresfl/",
      },
    ],
  }),
};
</script>
<style scoped></style>

<template>
  <v-main>
    <div class="d-flex justify-center green darken-1"></div>
    <div>
      <v-row class="text-center">
        <v-col cols="12">
          <v-img
            :src="require('../assets/todo-icon.png')"
            class="my-3"
            contain
            height="300"
          />
        </v-col>

        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">
            Bem-vindo ao TODO Vuetify
          </h1>

          <p class="subheading font-weight-regular">
            VueJS + Vuetify + API Mock
          </p>
          <p>
            <v-btn
              x-large
              rounded
              :elevation="10"
              color="green darken-1"
              dark
              :to="{ name: 'login' }"
            >
              Começar!
            </v-btn>
          </p>
        </v-col>
      </v-row>
    </div>
  </v-main>
</template>
<script>
export default {
  data: () => ({
    //   loading: false,
    //   selection: 1,
  }),

  // methods: {
  //   reserve() {
  //     this.loading = true;

  //     setTimeout(() => (this.loading = false), 2000);
  //   },
  // },
};
</script>

<style></style>

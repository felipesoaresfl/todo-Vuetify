<template>
  <v-container class="white" id="login-page">
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <v-tabs
          fixed-tabs
          background-color="green darken-1
"
          color="white"
          v-model="tabsForm"
        >
          <v-tab key="register"> Cadastrar </v-tab>
          <v-tab key="login"> Fazer Login </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="4">
        <v-tabs-items v-model="tabsForm" cols="3">
          <v-tab-item>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                :counter="20"
                :rules="nameRules"
                label="Nome"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Senha"
                type="password"
                required
              ></v-text-field>

              <v-text-field
                v-model="confirmPassword"
                :rules="[required, min6, matchingPasswords]"
                label="Confirmar Senha"
                type="password"
                required
              ></v-text-field>

              <v-checkbox
                v-model="checkbox"
                :rules="[(v) => !!v || 'Você deve concordar para continuar!']"
                label="Concorda com os termos de uso?"
                required
              ></v-checkbox>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                :to="{ name: 'taskList' }"
              >
                Cadastrar
              </v-btn>
            </v-form>
          </v-tab-item>
          <v-tab-item key="register">
            <v-form class="text-center white">
              <v-text-field
                v-model="email"
                label="Email"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Senha"
                type="password"
                :rules="passwordRules"
                required
              ></v-text-field>
              <v-btn
                color="success"
                class="justify-space-between"
                :to="{ name: 'taskList' }"
              >
                Entrar
              </v-btn>
            </v-form>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    successPass: false,
    successPass1: false,
    tabsForm: null,
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Nome é obrigatório",
      (v) => (v && v.length <= 10) || "Nome deve conter menos de 10 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "O e-mail é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "E-mail inválido",
    ],
    confirmPassword: "",
    password: "",
    passwordRules: [
      (v) => !!v || "A senha é obrigatória!",
      (v) => (v && v.length > 5) || "A senha deve conter mais de 5 caracteres",
    ],
    checkbox: false,
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    login() {
      this.loading = true;
    },
    matchingPasswords() {
      if (this.password === this.confirmPassword) {
        return true;
      } else {
        return "As senhas não são iguais.";
      }
    },
    required() {
      if (this.confirmPassword) {
        return true;
      } else {
        return "A confirmação de senha é obrigatória!";
      }
    },
    min6() {
      if (this.confirmPassword.length >= 6) {
        return true;
      } else {
        return "A senha deve conter mais de 5 caracteres.";
      }
    },
  },
};
</script>
<style scoped>
.entrar {
  color: white;
}
.col {
  padding: 0;
}
</style>

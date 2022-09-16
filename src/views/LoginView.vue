<template>
  <v-container class="white" id="login-page">
    <v-snackbar
      v-model="snackbar.show"
      :value="true"
      color="green darken-1"
      absolute
      left
      shaped
      top
    >
      <h3 style="font-size: 20 px">
        {{ snackbar.message }}
      </h3>
    </v-snackbar>
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <v-tabs
          fixed-tabs
          background-color="green darken-1"
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
                :counter="30"
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
                v-model="username"
                label="Usuário"
                :counter="20"
                required
                :rules="usernameRules"
                v-on:keyup.enter="login"
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
                :loading="loading"
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
                v-model="username"
                label="Usuário"
                required
                :rules="usernameRules"
                v-on:keyup.enter="login"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Senha"
                type="password"
                :rules="passwordRules"
                required
                v-on:keyup.enter="login"
              ></v-text-field>
              <v-btn
                :loading="loading"
                :disabled="!valid"
                color="success"
                class="justify-space-between"
                @click="login"
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
import AuthApi from "@/api/auth.api.js";

export default {
  data: () => ({
    successPass: false,
    successPass1: false,
    tabsForm: null,
    valid: true,
    name: "",
    username: "",
    email: "",
    confirmPassword: "",
    password: "",
    loading: false,
    snackbar: {
      show: false,
      message: "",
    },
    nameRules: [
      (v) => !!v || "Nome é obrigatório",
      (v) => (v && v.length <= 30) || "Nome deve conter menos de 30 caracteres",
    ],
    usernameRules: [
      (v) => !!v || "Usuário é obrigatório",
      (v) => (v && v.length <= 20) || "Nome deve conter menos de 20 caracteres",
    ],
    emailRules: [
      (v) => !!v || "O e-mail é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "E-mail inválido",
    ],
    passwordRules: [
      (v) => !!v || "A senha é obrigatória.",
      (v) => (v && v.length > 5) || "A senha deve conter mais de 5 caracteres",
    ],
    checkbox: false,
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    //logar usuário
    login() {
      this.loading = true;
      AuthApi.login(this.username, this.password)
        .then((user) => {
          console.log("login ok", user);
          this.saveLoggedUser(user);
          this.$router.push({ name: "taskList" });
        })
        .catch((error) => {
          console.log("login falhou", error);
          this.snackbar.message = "Usuário ou senha inválidos!";
          this.snackbar.show = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    //salvar usuário logado no localstorage
    saveLoggedUser(user) {
      window.localStorage.setItem("loggedUser", user.id);
      window.localStorage.setItem("loggedUserToken", user.token);
    },
    //validar campos de login e cadastro
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
        return "A confirmação de senha é obrigatória.";
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

<template>
  <v-main>
    <v-snackbar
      v-model="snackbar.show"
      :value="true"
      color="red"
      timeout="2000"
      absolute
      left
      top
    >
      <h3 style="font-size: 20 px">
        {{ snackbar.message }}
      </h3>
    </v-snackbar>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        :rules="[(v) => !!v || 'O campo tarefa é obrigatório']"
        label="Tarefa"
        name="title"
        v-model="task.title"
        required
      ></v-text-field>
      <v-select
        v-model="category"
        :items="items"
        :rules="[(v) => !!v || 'O campo item é obrigatório']"
        label="Categoria"
        name="category"
        required
      ></v-select>
      <v-text-field
        v-model="task.date"
        type="date"
        label="Data"
        name="date"
        required
        :rules="[(v) => !!v || 'O campo data é obrigatório']"
      >
      </v-text-field>
      <v-btn
        :disabled="!valid"
        :loading="loading"
        color="success"
        class="mr-4"
        @click="saveTask"
      >
        Salvar
      </v-btn>
      <v-btn color="error" class="mr-4" :to="{ name: 'taskList' }">
        Cancelar
      </v-btn>
    </v-form>
  </v-main>
</template>
<script>
import TaskApi from "@/api/tasks.api.js";

export default {
  data: () => ({
    valid: true,
    snackbar: {
      show: false,
      message: "",
    },
    loading: false,
    category: null,
    task: { title: "", date: "" },
    items: ["Estudos", "Trabalho", "Financeiro", "Outros"],
    // checkbox: false,
  }),
  methods: {
    saveTask() {
      this.loading = true;
      const newTask = {
        title: this.task.title,
        category: this.category,
        date: this.task.date,
      };
      TaskApi.addTask(newTask).then(() => {
        this.$router.push({ name: "taskList" });
      });

      this.loading = false;
    },
  },
};
</script>

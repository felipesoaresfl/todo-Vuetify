<template>
  <v-main class="overflow-hidden mt-4">
    <v-container>
      <v-row>
        <v-col class="pa-1" cols="12" v-for="task in tasks" :key="task.id">
          <v-card>
            <v-card-text>
              <div>#{{ task.id }}</div>
              <p class="ma-0 pa-0 text-h5 text--primary">{{ task.title }}</p>
            </v-card-text>
            <v-card-actions>
              <v-list-item class="grow">
                <v-row align="center" justify="end">
                  <v-btn
                    class="mx-3"
                    fab
                    dark
                    small
                    alt="Editar tarefa"
                    color="cyan"
                    :to="{ name: 'taskUpdate', params: { id: task.id } }"
                  >
                    <v-icon dark> mdi-pencil </v-icon>
                  </v-btn>

                  <v-btn small fab dark color="red" @click="deleteTask(task.id)"
                    ><v-icon>far fa-trash-alt fa-xs</v-icon></v-btn
                  >
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <div class="my-5">
        <v-btn color="green" fab dark :to="{ name: 'taskForms' }">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import TasksApi from "@/api/tasks.api.js";

export default {
  data: () => {
    return {
      tasks: [],
    };
  },
  methods: {
    getTasks() {
      TasksApi.getTasks().then((data) => {
        this.tasks = data;
      });
    },
    deleteTask(taskId) {
      TasksApi.removeTask(taskId).then(() => {
        this.getTasks();
      });
    },
  },
  created() {
    this.getTasks();
  },
};
</script>

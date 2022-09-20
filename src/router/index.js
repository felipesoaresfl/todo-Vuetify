import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import TaskSummaryView from "@/views/TaskSummaryView.vue";
import TasksListView from "@/views/TasksListView.vue";
import TasksUpdateView from "@/views/TaskUpdateView.vue";
import TaskFormsView from "@/views/TaskFormView.vue";
import PublicLayout from "@/layouts/PublicLayout.vue";
import PrivateLayout from "@/layouts/PrivateLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: PublicLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      {
        path: "login",
        name: "login",
        component: LoginView,
      },
    ],
  },
  {
    path: "/tasks",
    component: PrivateLayout,
    children: [
      {
        path: "summary",
        name: "taskSummary",
        component: TaskSummaryView,
      },
      {
        path: ":id",
        name: "taskUpdate",
        component: TasksUpdateView,
      },
      {
        path: "",
        name: "taskList",
        component: TasksListView,
      },
      {
        path: "/forms",
        name: "taskForms",
        component: TaskFormsView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

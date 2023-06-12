import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/login/index.vue";
import Register from "@/components/register.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;

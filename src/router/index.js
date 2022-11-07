import Vue from "vue";
import VueRouter from "vue-router";
import Board from "../views/Board.vue";
import RoundBased from "../views/RoundBased.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/board",
    name: "Board",
    component: Board,
  },
  {
    path: "/",
    name: "RoundBased",
    component: RoundBased,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

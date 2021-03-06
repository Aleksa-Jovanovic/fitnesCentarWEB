import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  /*{
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [*/
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/service",
    name: "Service",
    component: () => import("../views/Services.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/service/training",
    name: "Workout",
    component: () => import("../views/Workout.vue"),
  },
  {
    path: "/service/training/trainingDetails/:id",
    name: "WorkoutDetails",
    component: () => import("../views/WorkoutDetails.vue"),
  },
  {
    path: "/scheduling",
    name: "Schedule",
    component: () => import("../views/Schedule.vue"),
  },

  //],
  //},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

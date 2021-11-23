import Vue from "vue";
import VueRouter from "vue-router";

import PageOne from "../views/PageOne.vue";
import PageTwo from "../views/PageTwo.vue";
import PageThree from "../views/PageThree.vue";
import PageFour from "../views/PageFour.vue";
import PageFive from "../views/PageFive.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PageOne",
    component: PageOne,
  },
  {
    path: "/one",
    name: "PageOne",
    component: PageOne,
  },
  {
    path: "/two",
    name: "PageTwo",
    component: PageTwo,
  },
  {
    path: "/three",
    name: "PageThree",
    component: PageThree,
  },
  {
    path: "/four",
    name: "PageFour",
    component: PageFour,
  },
  {
    path: "/five",
    name: "PageFive",
    component: PageFive,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Logo from "../views/Logo.vue";
import Color from "../views/Color.vue";
import Typography from "../views/Typography.vue";
import Component from "../views/Component.vue";
import Photo from "../views/Photo.vue";
import Resouce from "../views/Resouce.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/logo",
    name: "Logo",
    component: Logo,
  },
  {
    path: "/color",
    name: "Color",
    component: Color,
  },
  {
    path: "/typography",
    name: "Typography",
    component: Typography,
  },
  {
    path: "/component",
    name: "Component",
    component: Component,
  },
  {
    path: "/photo",
    name: "Photo",
    component: Photo,
  },
  {
    path: "/resouce",
    name: "Resouce",
    component: Resouce,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

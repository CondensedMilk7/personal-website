import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import ProjectsView from "@/views/ProjectsView";
import BlogView from "@/views/BlogView";
import BlogsView from "@/views/BlogsView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogsView,
  },
  {
    path: "/blog/:blog",
    name: "read-blog",
    component: BlogView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "nav-active",
});

export default router;

import { createWebHistory, createRouter } from "vue-router";
import About from "./pages/About.vue";
import Blog from "./pages/Blog.vue";
import Contact from "./pages/Contact.vue";
import Portfolio from "./pages/Portfolio.vue";
import Resume from "./pages/Resume.vue";

const routes = [
  {
    path: "/",
    component: About,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: Portfolio,
  },
  {
    path: "/resume",
    name: "resume",
    component: Resume,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

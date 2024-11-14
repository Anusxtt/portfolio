import { createRouter, createWebHistory } from "vue-router";
import MyHome from "../views/MyHome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: MyHome,
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/",
    },
    {
      path: "/my-home",
      name: "My home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MyHome.vue"),
    },
    {
      path: "/my-about",
      name: "My about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MyAbout.vue"),
    },
    {
      path: "/my-skills",
      name: "My skills",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MySkills.vue"),
    },
    {
      path: "/my-education",
      name: "My education",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MyEducation.vue"),
    },
    {
      path: "/my-work",
      name: "My work",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MyWork.vue"),
    },
    {
      path: "/:catchAll(.*)", // จับทุกเส้นทางที่ไม่ตรงกับที่กำหนด
      redirect: "/", // เปลี่ยนเส้นทางไปยังหน้าแรกหรือหน้า Home
    },
  ],
});

export default router;

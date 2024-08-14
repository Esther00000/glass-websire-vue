import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../view/HomeView.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../view/ProductsView.vue"),
    children: [
      {
        path: "/products",
        redirect: { name: "Optical" }, // 預設分頁
      },
      {
        path: "optical",
        name: "Optical",
        component: () => import("../view/Optical.vue"),
      },
      {
        path: "sunglass",
        name: "Sunglass",
        component: () => import("../view/Sunglass.vue"),
      },
      {
        path: "functional",
        name: "Functional",
        component: () => import("../view/Functional.vue"),
      },
    ],
  },
  {
    path: "/stores",
    name: "Stores",
    component: () => import("../view/StoresView.vue"),
  },
  {
    path: "/store/:id",
    name: "Store",
    component: () => import("../view/StoreView.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../view/BlogView.vue"),
  },
  {
    path: "/blogPage",
    name: "blogPage",
    component: () => import("../view/blogPageView.vue"),
  },
  {
    path: "/question",
    name: "Question",
    component: () => import("../view/QuestionView.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // 跳轉頁面時皆自動回頁面頂部
    return { top: 0 };
  },
});

export default router;

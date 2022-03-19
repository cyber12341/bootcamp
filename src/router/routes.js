const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        name: "Kelas",
        path: "/kelas",
        component: () => import("src/pages/KelasPage.vue"),
      },
      {
        name: "DetailKelas",
        path: "kelas/:slug",
        component: () => import("src/pages/DetailKelasPage.vue"),
      },
      {
        name: "PackageDetailPage",
        path: "program/:slug",
        component: () => import("src/pages/PackageDetailPage.vue"),
      },
      {
        name: "BlogPage",
        path: "/blog",
        component: () => import("src/pages/BlogPage.vue"),
      },
      {
        name: "DetailBlog",
        path: "blog/:slug",
        component: () => import("src/pages/DetailBlog.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;

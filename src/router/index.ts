import { createRouter, createWebHashHistory } from "vue-router";

import { staticRoutes } from "./staticRoutes";
import defaultRoutes from './layout.ts';

const routes: any = staticRoutes.concat(defaultRoutes);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

import {createRouter, createWebHashHistory } from 'vue-router'

import { staticRoutes } from './staticRoutes'

const routes: any = staticRoutes.c

const router = createRouter({
    history: createWebHashHistory(),

});
import { RoutesDataItem } from "@/utils/route";
import BlankLayout from "@/layout/blankLayout.vue";
import Layout from "@/layout/index.vue";

import Workplace from "@/views/home/Workplace.vue";

const LayoutRoutes: Array<RoutesDataItem> = [
  /*
  {
    title: 'index-layout.menu.home',
    path: '/home',
    component: ()=> import('@/views/home/index.vue')
  }, */
  {
    name: "Home",
    path: "/home",
    redirect: "/home/workplace",
    component: Layout,
    meta: { title: "index-layout.menu.home", icon: "el-icon-s-tools" },
    children: [
      {
        name: "Workplace",
        path: "workplace",
        component: () => Workplace,
        meta: {
          title: "index-layout.menu.home.workplace",
          icon: "el-icon-eleme",
        },
      },
      {
        name: "editor",
        path: "editor",
        redirect: "/component/editor/tuieditor",
        component: Layout,
        meta: {
          title: "index-layout.menu.component.editor",
          icon: "el-icon-eleme",
        },
        children: [
          {
            name: "tui",
            path: "tuieditor",
            component: () =>
              import("@/views/component/editor/tui-editor/index.vue"),
            meta: { title: "index-layout.menu.component.editor.tui-editor" },
          },
          {
            name: "cke",
            path: "ckeditor",
            component: () =>
              import("@/views/component/editor/ckeditor/index.vue"),
            meta: { title: "index-layout.menu.component.editor.ckeditor" },
          },
        ],
      },
      {
        name: "Edit",
        path: "custombreadcrumbs",
        component: () => import("@/views/custom-breadcrumbs/index.vue"),
        meta: {
          title: "index-layout.menu.home.custom-breadcrumbs",
          icon: "el-icon-s-tools",
        },
        breadcrumb: [
          // {
          //   title: 'index-layout.menu.home.custom-breadcrumbs',
          //   path: '/home/custombreadcrumbs',
          // },
          // {
          //   title: 'index-layout.menu.home',
          //   path: '/home',
          // },
          // {
          //   title: 'index-layout.menu.home.custom-breadcrumbs.liqingsong.cc',
          //   path: 'http://liqingsong.cc',
          // },
        ],
      },
      // {
      //   icon: 'detail',
      //   title: 'index-layout.menu.home.docs',
      //   path: 'http://admin-element-vue.liqingsong.cc/',
      //   belongTopMenu: '/home',
      //   redirect: ''
      // },
    ],
  },

  {
    name: 'components',
    path: '/component',
    redirect: '/component/icon/svg',
    component: Layout,
    meta: {title: 'index-layout.menu.component',},
    children:[
        {
            name: 'index-layout.menu.component.icon',
            path: 'icon',
            redirect: '/component/icon/svg',
            component: Layout,
            meta: {title: 'index-layout.menu.component.icon',icon: 'el-icon-eleme',},
            children: [
                {
                    name:'svg',
                    path: 'svg',
                    component: () => import('@/views/component/icon/svg/index.vue'),
                    meta: {title: 'index-layout.menu.component.icon.svg',}
                },
                {
                  name: 'font',
                  path: 'font',
                  component: () => import('@/views/component/icon/font/index.vue'),
                  meta:{title: 'index-layout.menu.component.icon.font',}
                },
            ]
        },
        {
            name: 'editor',
            path: 'editor',
            redirect: '/component/editor/tuieditor',
            component: Layout,
            meta:{title: 'index-layout.menu.component.editor',icon: 'editor',},
            children: [
                {
                    name: 'tuieditor',
                    path: 'tuieditor',
                    component: () => import('@/views/component/editor/tui-editor/index.vue'),
                    meta: {title: 'index-layout.menu.component.editor.tui-editor',}
                },
                {
                    name: 'ck',
                    path: 'ckeditor',
                    component: () => import('@/views/component/editor/ckeditor/index.vue'),
                    meta: {title: 'index-layout.menu.component.editor.ckeditor',}
                }
            ]
        }
    ]
  },

  // {
  //   icon: 'page',
  //   title: 'index-layout.menu.pages',
  //   path: '/pagesample',
  //   redirect: '/pagesample/list/table',
  //   component: BlankLayout,
  //   children: [
  //     {
  //       icon: 'list',
  //       title: 'index-layout.menu.pages.list',
  //       path: 'list',
  //       redirect: '/pagesample/list/table',
  //       component: BlankLayout,
  //       children: [
  //         {
  //           title: 'index-layout.menu.pages.list.table',
  //           path: 'table',
  //           component: ()=> import('@/views/pagesample/list/table/index.vue'),
  //         },
  //         {
  //           title: 'index-layout.menu.pages.list.highly-adaptive-table',
  //           path: 'highlyadaptivetable',
  //           component: ()=> import('@/views/pagesample/list/highly-adaptive-table/index.vue'),
  //         },
  //         {
  //           title: 'index-layout.menu.pages.list.search',
  //           path: 'search',
  //           redirect: '/pagesample/list/search/table',
  //           component: BlankLayout,
  //           children: [
  //             {
  //               title: 'index-layout.menu.pages.list.search.table',
  //               path: 'table',
  //               component: ()=> import('@/views/pagesample/list/search/table/index.vue'),
  //             }
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       icon: 'edit',
  //       title: 'index-layout.menu.pages.form',
  //       path: 'form',
  //       redirect: '/pagesample/form/basic',
  //       component: BlankLayout,
  //       children: [
  //         {
  //           title: 'index-layout.menu.pages.form.basic',
  //           path: 'basic',
  //           component: ()=> import('@/views/pagesample/form/basic/index.vue'),
  //         },
  //         {
  //           title: 'index-layout.menu.pages.form.complex',
  //           path: 'complex',
  //           component: ()=> import('@/views/pagesample/form/complex/index.vue'),
  //         },
  //       ],
  //     },
  //     {
  //       icon: 'detail',
  //       title: 'index-layout.menu.pages.detail',
  //       path: 'detail',
  //       redirect: '/pagesample/detail/basic',
  //       component: BlankLayout,
  //       children: [
  //         {
  //           title: 'index-layout.menu.pages.detail.basic',
  //           path: 'basic',
  //           component: ()=> import('@/views/pagesample/detail/basic/index.vue'),
  //         },
  //         {
  //           title: 'index-layout.menu.pages.detail.module',
  //           path: 'module',
  //           component: ()=> import('@/views/pagesample/detail/module/index.vue'),
  //         },
  //         {
  //           title: 'index-layout.menu.pages.detail.table',
  //           path: 'table',
  //           component: ()=> import('@/views/pagesample/detail/table/index.vue'),
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   icon: 'permissions',
  //   title: 'index-layout.menu.roles',
  //   path: '/roles',
  //   redirect: '/roles/all',
  //   component: BlankLayout,
  //   children: [
  //     {
  //       icon: 'detail',
  //       title: 'index-layout.menu.roles.all',
  //       path: 'all',
  //       component: ()=> import('@/views/roles/all/index.vue'),
  //     },
  //     {
  //       icon: 'detail',
  //       roles: ['user'],
  //       title: 'index-layout.menu.roles.user',
  //       path: 'user',
  //       component: ()=> import('@/views/roles/user/index.vue'),
  //     },
  //     {
  //       icon: 'detail',
  //       roles: ['test'],
  //       title: 'index-layout.menu.roles.test',
  //       path: 'test',
  //       component: ()=> import('@/views/roles/test/index.vue'),
  //     },
  //   ],
  // },
];

export default LayoutRoutes;

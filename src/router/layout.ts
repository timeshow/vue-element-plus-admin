import { RoutesDataItem } from '@/utils/route'
import BlankLayout from '@/layout/blankLayout.vue'
import Layout from '@/layout/index.vue'

import Workplace from '@/views/home/Workplace.vue'

const LayoutRoutes: Array<RoutesDataItem> = [
    {
        name: 'Home',
        path: '/home',
        redirect: '/home/workplace',
        component: Layout,
        meta: { title: 'index-layout.menu.home', icon: 'el-icon-s-tools' },
        children: [
            {
                name: 'Workplace',
                path: 'workplace',
                component: () => Workplace,
                meta: {
                    title: 'index-layout.menu.home.workplace',
                    icon: 'el-icon-eleme',
                },
            },
            {
                name: 'editor',
                path: 'editor',
                redirect: '/component/editor/tuieditor',
                component: Layout,
                meta: {
                    title: 'index-layout.menu.component.editor',
                    icon: 'el-icon-eleme',
                },
                children: [
                    {
                        name: 'tui',
                        path: 'tuieditor',
                        component: () =>
                            import(
                                '@/views/component/editor/tui-editor/index.vue'
                            ),
                        meta: {
                            title: 'index-layout.menu.component.editor.tui-editor',
                        },
                    },
                    {
                        name: 'cke',
                        path: 'ckeditor',
                        component: () =>
                            import(
                                '@/views/component/editor/ckeditor/index.vue'
                            ),
                        meta: {
                            title: 'index-layout.menu.component.editor.ckeditor',
                        },
                    },
                ],
            },
            {
                name: 'Edit',
                path: 'custombreadcrumbs',
                component: () => import('@/views/custom-breadcrumbs/index.vue'),
                meta: {
                    title: 'index-layout.menu.home.custom-breadcrumbs',
                    icon: 'el-icon-s-tools',
                },
            },
        ],
    },
    //组件
    {
        name: 'components',
        path: '/component',
        redirect: '/component/basic/icon',
        component: BlankLayout,
        meta: { title: 'index-layout.menu.component' },
        children: [
            {
                name: 'Basic',
                path: 'basic',
                redirect: '/component/basic/icon',
                component: Layout,
                meta: {
                    title: 'index-layout.menu.component.basic',
                    icon: 'el-icon-eleme',
                },
                children: [
                    {
                        name: 'Color',
                        path: 'color',
                        component: () =>
                            import('@/views/component/basic/color/index.vue'),
                        meta: {
                            title: 'index-layout.menu.component.basic.color',
                        },
                    },
                    {
                        name: 'Icon',
                        path: 'icon',
                        component: () =>
                            import('@/views/component/basic/icon/index.vue'),
                        meta: {
                            title: 'index-layout.menu.component.basic.icon',
                        },
                    },
                    {
                        name: 'Button',
                        path: 'button',
                        component: () =>
                            import('@/views/component/basic/button/index.vue'),
                        meta: {
                            title: 'index-layout.menu.component.basic.button',
                        },
                    },
                    {
                        name: 'Link',
                        path: 'link',
                        component: () =>
                            import('@/views/component/basic/link/index.vue'),
                        meta: {
                            title: 'index-layout.menu.component.basic.link',
                        },
                    },
                ],
            },
            {
                name: 'Form',
                path: 'form',
                redirect: '/component/form/form',
                component: Layout,
                meta: {
                    title: 'index-layout.menu.component.form',
                    icon: 'el-icon-eleme',
                },
                children: [
                    {
                        name: 'Form',
                        path: 'form',
                        component: () =>
                            import('@/views/component/form/form/index.vue'),
                        meta: {
                            title: 'index-layout.menu.component.form.form',
                        },
                    },
                    {
                        name: 'ck',
                        path: 'ckeditor',
                        component: () =>
                            import(
                                '@/views/component/editor/ckeditor/index.vue'
                            ),
                        meta: {
                            title: 'index-layout.menu.component.editor.ckeditor',
                        },
                    },
                ],
            },
        ],
    },
    //page
    {
        name: 'Page',
        path: '/page',
        redirect: '/page/list/table',
        component: BlankLayout,
        meta: { title: 'index-layout.menu.page' },
        children: [
            {
                name: 'List',
                path: 'list',
                redirect: '/page/list/table',
                component: Layout,
                meta: { icon: 'list', title: 'index-layout.menu.page.list' },
                children: [
                    {
                        name: 'table',
                        path: 'table',
                        component: () =>
                            import('@/views/page/list/table/index.vue'),
                        meta: { title: 'index-layout.menu.page.list.table' },
                    },
                    {
                        name: 'Multitable',
                        path: 'multitable',
                        component: () =>
                            import('@/views/page/list/table/multitable.vue'),
                        meta: {
                            title: 'index-layout.menu.page.list.multitable',
                        },
                    },
                    {
                        name: 'Expandtable',
                        path: 'expandtable',
                        component: () =>
                            import('@/views/page/list/table/expandtable.vue'),
                        meta: {
                            title: 'index-layout.menu.page.list.expandtable',
                        },
                    },
                    {
                        name: 'Statustable',
                        path: 'statustable',
                        component: () =>
                            import('@/views/page/list/table/statustable.vue'),
                        meta: {
                            title: 'index-layout.menu.page.list.statustable',
                        },
                    },
                    {
                        name: 'Ordertable',
                        path: 'ordertable',
                        component: () =>
                            import('@/views/page/list/table/ordertable.vue'),
                        meta: {
                            title: 'index-layout.menu.page.list.ordertable',
                        },
                    },
                    {
                        name: 'search',
                        path: 'search',
                        redirect: '/page/list/search/table',
                        component: BlankLayout,
                        meta: { title: 'index-layout.menu.page.list.search' },
                        children: [
                            {
                                name: 'tables',
                                path: 'table',
                                component: () =>
                                    import(
                                        '@/views/page/list/search/table/index.vue'
                                    ),
                                meta: {
                                    title: 'index-layout.menu.page.list.search.table',
                                },
                            },
                        ],
                    },
                ],
            },
            {
                name: 'form',
                path: 'form',
                redirect: '/page/form/basic',
                component: BlankLayout,
                meta: { icon: 'edit', title: 'index-layout.menu.page.form' },
                children: [
                    // {
                    //   name: "Simple",
                    //   path: "simple",
                    //   component: () => import("@/views/page/form/basic/simple.vue"),
                    //   meta: { title: "index-layout.menu.page.form.simple" },
                    // },
                    {
                        name: 'basic',
                        path: 'basic',
                        component: () =>
                            import('@/views/page/form/basic/index.vue'),
                        meta: { title: 'index-layout.menu.page.form.basic' },
                    },
                    {
                        name: 'complex',
                        path: 'complex',
                        component: () =>
                            import('@/views/page/form/complex/index.vue'),
                        meta: { title: 'index-layout.menu.page.form.complex' },
                    },
                ],
            },
            {
                name: 'detail',
                path: 'detail',
                redirect: '/page/detail/basic',
                component: BlankLayout,
                meta: {
                    icon: 'detail',
                    title: 'index-layout.menu.page.detail',
                },
                children: [
                    {
                        name: 'basic',
                        path: 'basic',
                        component: () =>
                            import('@/views/page/detail/basic/index.vue'),
                        meta: { title: 'index-layout.menu.page.detail.basic' },
                    },
                    {
                        name: 'module',
                        path: 'module',
                        component: () =>
                            import('@/views/page/detail/module/index.vue'),
                        meta: { title: 'index-layout.menu.page.detail.module' },
                    },
                    {
                        name: 'detail_table',
                        path: 'table',
                        component: () =>
                            import('@/views/page/detail/table/index.vue'),
                        meta: { title: 'index-layout.menu.page.detail.table' },
                    },
                ],
            },
        ],
    },

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
]

export default LayoutRoutes

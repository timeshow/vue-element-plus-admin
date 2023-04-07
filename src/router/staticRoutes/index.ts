import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import BlankLayout from '@/layout/blankLayout.vue'
import Error from '@/views/404.vue'

/**
 *
 * 路由配置规则：
 *
 * {
 *  path:'',路径
 *  name:'',路由名称，生成menu时menu name
 *  meta:{},额外信息，icon为menu中的icon
 *  children: [], 子路由，menu中的子menu 没有时可为空数组
 * }
 *
 */

export const staticRoutes = [
    {
        name: 'Index',
        path: '/',
        component: BlankLayout,
        redirect: '/home/workplace',
    },
    {
        name: 'Login',
        path: '/user/login',
        component: Login,
        meta: { title: '登录', icon: 'el-icon-eleme' },
        hidden: true,
    },
    {
        name: 'Register',
        path: '/user/register',
        component: Register,
        meta: { title: '注册', icon: 'el-icon-eleme' },
        hidden: true,
    },
    {
        name: '404',
        path: '/404',
        component: () => Error,
        meta: { title: '错误页面', icon: 'el-icon-eleme' },
        hidden: true,
    },
]

import Home from '@/views/home/Home.vue';
import Login from '@/views/Login.vue'

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
    path: "/",
    name: "首页",
    component: Home,
    children: [],
    meta: {
      icon: "el-icon-s-home",
    },
  },
  {
    name: 'Login',
    path: '/Login',
    component: Login,
    meta: { title: '登录', icon: 'el-icon-eleme' },
    hidden: true
},
];

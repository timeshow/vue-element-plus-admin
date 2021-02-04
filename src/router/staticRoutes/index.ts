import Layout from '@/layout/index.vue'
import Home from "@/views/home/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Workplace from '@/views/home/Workplace.vue'
import securityLayout from '@/layout/securityLayout.vue'

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
  // {
  //   name: "Home",
  //   path: "/",
  //   component: Layout,
  //   redirect: "/home/workplace",
  //   meta: {
  //     title: "首页",
  //     icon: "el-icon-s-home",
  //   },
  //   children: [
  //     {
  //       name: "Workplace",
  //       path: "/home/workplace",
  //       component: Workplace,
  //       meta: { title: "工作台", icon: "el-icon-s-tools" },
  //     },
  //   ],
  // },
  {
    name: "Login",
    path: "/user/login",
    component: Login,
    meta: { title: "登录", icon: "el-icon-eleme" },
    hidden: true,
  },
  {
    name: "Register",
    path: "/user/register",
    component: Register,
    meta: { title: "注册", icon: "el-icon-eleme" },
    hidden: true,
  },
];

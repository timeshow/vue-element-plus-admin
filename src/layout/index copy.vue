<template>
    <div id="indexlayout">
        <left
            :collapsed="collapsed"
            :topNavEnable="topNavEnable"
            :belongTopMenu="belongTopMenu"
            :defaultActive="defaultActive"
            :menuData="permissionMenuData"
        >
        </left>

        <div id="indexlayout-right" :class="{ 'fiexd-header': headFixed }">
            <right-top
                :collapsed="collapsed"
                :topNavEnable="topNavEnable"
                :belongTopMenu="belongTopMenu"
                :toggleCollapsed="toggleCollapsed"
                :breadCrumbs="breadCrumbs"
                :menuData="permissionMenuData"
            >
            </right-top>

            <div class="indexlayout-right-main">
                <permission :roles="routeItem.roles">
                    <router-view></router-view>
                </permission>
                <right-footer></right-footer>
            </div>
        </div>

        <settings></settings>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { StateType as GlobalStateType } from '@/store/global'
import { StateType as UserStateType } from '@/store/module/user'
import {
    vueRoutes,
    RoutesDataItem,
    getRouteItem,
    getSelectLeftMenuPath,
    formatRoutePathTheParents,
    getRouteBelongTopMenu,
    getBreadcrumbRoutes,
    BreadcrumbType,
    getPermissionMenuData,
} from '@/utils/route'
import { mergeUnique as ArrayMergeUnique } from '@/utils/array'
import useTitle from '@/composables/useTitle'
import IndexLayoutRoutes from '@/router/layout'
import Permission from '@/components/permission/index.vue'
import Left from '@/layout/components/left.vue'
import RightTop from '@/layout/components/rightTop.vue'
import RightFooter from '@/layout/components/rightFooter.vue'
import Settings from '@/layout/components/settings.vue'
interface LayoutSetup {
    collapsed: boolean
    toggleCollapsed: () => void
    topNavEnable: boolean
    belongTopMenu: string
    headFixed: boolean
    defaultActive: string
    breadCrumbs: BreadcrumbType[]
    permissionMenuData: RoutesDataItem[]
    routeItem: RoutesDataItem
}
export default defineComponent({
    name: 'Layout',
    components: {
        Permission,
        Left,
        RightTop,
        RightFooter,
        Settings,
    },
    setup(): LayoutSetup {
        const store = useStore<{
            global: GlobalStateType
            user: UserStateType
        }>()
        const route = useRoute()
        // 所有菜单路由
        const menuData: RoutesDataItem[] = vueRoutes(IndexLayoutRoutes)
        // 当前路由 item
        const routeItem = computed<RoutesDataItem>(() =>
            getRouteItem(route.path, menuData)
        )
        // 有权限的菜单
        const permissionMenuData = computed<RoutesDataItem[]>(() =>
            getPermissionMenuData(store.state.user.currentUser.roles, menuData)
        )
        // 当前路由的顶部菜单path
        const belongTopMenu = computed<string>(() =>
            getRouteBelongTopMenu(routeItem.value)
        )
        // 当前路由的父路由path[]
        const routeParentPaths = computed<string[]>(() =>
            formatRoutePathTheParents(routeItem.value.path)
        )
        // 收缩左侧
        const collapsed = computed<boolean>(() => store.state.global.collapsed)
        const toggleCollapsed = (): void => {
            store.commit('global/changeLayoutCollapsed', !collapsed.value)
        }
        // 右侧顶部导航是否开启
        const topNavEnable = computed<boolean>(
            () => store.state.global.topNavEnable
        )
        // 右侧顶部是否固定
        const headFixed = computed<boolean>(() => store.state.global.headFixed)
        // 左侧选择的菜单
        const defaultActive = computed<string>(() =>
            getSelectLeftMenuPath(routeItem.value)
        )
        // 面包屑导航
        const breadCrumbs = computed<BreadcrumbType[]>(() =>
            getBreadcrumbRoutes(
                routeItem.value,
                routeParentPaths.value,
                menuData
            )
        )
        // 设置title
        useTitle(routeItem)

        console.log('permissionMenuData=:')
        console.log(store.state.user.currentUser.roles)

        return {
            collapsed: collapsed as unknown as boolean,
            toggleCollapsed,
            topNavEnable: topNavEnable as unknown as boolean,
            belongTopMenu: belongTopMenu as unknown as string,
            headFixed: headFixed as unknown as boolean,
            defaultActive: defaultActive as unknown as string,
            breadCrumbs: breadCrumbs as unknown as BreadcrumbType[],
            permissionMenuData:
                permissionMenuData as unknown as RoutesDataItem[],
            routeItem: routeItem as unknown as RoutesDataItem,
        }
    },
})
</script>
<style lang="scss">
@import '../assets/css/variables.scss';
#indexlayout {
    display: flex;
    height: 100vh;
    overflow: hidden;
}
#indexlayout-right {
    position: relative;
    flex: 1;
    overflow: auto;
    background-color: $mainBgColor;
    &.fiexd-header {
        display: flex;
        flex-direction: column;
        .indexlayout-right-main {
            flex: 1;
            overflow: auto;
        }
    }
}
.indexlayout-main-conent {
    margin: 24px;
    position: relative;
}
</style>

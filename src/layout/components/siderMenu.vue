<template>
    <el-menu
        class="index-layout-leftmenu"
        :collapse="collapsed"
        :collapse-transition="false"
        :default-active="defaultActive"
    >
        <sider-menu-item
            v-for="item in newMenuData"
            :key="item.path"
            :routeItem="item"
            :topNavEnable="topNavEnable"
            :belongTopMenu="belongTopMenu"
        >
        </sider-menu-item>
    </el-menu>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from 'vue'
import { RoutesDataItem } from '@/utils/route'
import SiderMenuItem from '@/layout/components/siderMenuItem.vue'
interface SiderMenuSetup {
    newMenuData: RoutesDataItem[]
}
export default defineComponent({
    name: 'SiderMenu',
    props: {
        collapsed: {
            type: Boolean,
            default: false,
        },
        topNavEnable: {
            type: Boolean,
            default: true,
        },
        belongTopMenu: {
            type: String,
            default: '',
        },
        defaultActive: {
            type: String,
            default: '',
        },
        menuData: {
            type: Array as PropType<RoutesDataItem[]>,
            default: [],
        },
    },
    components: {
        SiderMenuItem,
    },
    setup(props): SiderMenuSetup {
        const { menuData, topNavEnable } = toRefs(props)
        const newMenuData = computed<RoutesDataItem[]>(() => {
            if (!topNavEnable.value) {
                return menuData.value as RoutesDataItem[]
            }
            const MenuItems: RoutesDataItem[] = []
            for (
                let index = 0, len = menuData.value.length;
                index < len;
                index += 1
            ) {
                const element = menuData.value[index]
                if (element.children) {
                    MenuItems.push(...(element.children as RoutesDataItem[]))
                }
            }

            return MenuItems
        })
        return {
            newMenuData: newMenuData as unknown as RoutesDataItem[],
        }
    },
})
</script>

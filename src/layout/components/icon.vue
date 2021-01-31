<template>
    <Icons :type="type" />
</template>
<script lang="ts">
/**
 * IndexLayout icon , 主要用于菜单
 * 使用说明：
 *   >>> 在这里可以对以下字体图标进行引入替换，达到 IndexLayout icon 统一效果：
 *     import Icons from '@/components/iconSvg';
 *     import Icons from '@/components/iconFont';
 */
import { defineComponent } from "vue";
//import Icons from "@/components/iconSvg.vue";
// import Icons from '@/components/iconFont';
export default defineComponent({
    name: 'Icon',
    props: {
        type: {
            type: String,
            required: true
        }
    },
    components: {
        //Icons
    }
})
</script>
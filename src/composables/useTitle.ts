/**
 * 设置 html Title  composables
 */
import { ComputedRef, onMounted, Ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import settings from '@/config/settings';
import { RoutesDataItem } from '@/utils/route';

export default function useTitle(route: ComputedRef<RoutesDataItem> | Ref<RoutesDataItem>): void {
    const{ t } = useI18n();

    const setTitle = (title: string): void => {
        document.title = `${t(title)} - ${settings.siteTitle}`;
    } 

    watch<RoutesDataItem, false>(route,(route) => {
        setTitle(route.name);
    })

    onMounted(()=> {
        setTitle(route.value.name);
    })

}
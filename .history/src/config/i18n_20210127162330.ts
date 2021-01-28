/**
 * 国际化 入口 locale
 */
import { createI18n } from "vue-i18n";
import { getLocale, setLocale ,importAllLocales} from "@/utils/i18n";


/**
 * elementPlus 多语言配置
 */
import enUS from "element-plus/lib/locale/lang/en";
import zhCN from "element-plus/lib/locale/lang/zh-cn";
import messages from '@/locale/index'

const i18n = createI18n({
    locale: 'enUS',
    messages
})

export default i18n
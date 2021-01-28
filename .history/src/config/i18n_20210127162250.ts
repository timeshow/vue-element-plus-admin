/**
 * 国际化 入口 locale
 */
import { createI18n } from "vue-i18n";
import { getLocale, setLocale ,importAllLocales} from "@/utils/i18n";
import messages from '@/locale/index'

const i18n = createI18n({
    locale: 'enUS',
    messages
})

export default i18n
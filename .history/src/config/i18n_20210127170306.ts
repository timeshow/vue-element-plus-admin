/**
 * 国际化 入口 locale
 */
import { createI18n } from "vue-i18n";
import { getLocale, setLocale ,importAllLocales} from "@/utils/i18n";


/**
 * elementPlus 多语言配置
 */
import en_US from "element-plus/lib/locale/lang/en";
import zh_CN from "element-plus/lib/locale/lang/zh-cn";
import messages from '@/locale/index'

const elementPlusMessages: { [key: string]: any } = {
  "zh_CN": zh_CN,
  "en_US": en_US,
};

/**
 * 框架 多语言配置
 */
//export const messages = importAllLocales();

// const i18n = createI18n({
//   legacy: false,
//   locale: getLocale(),
//   messages
// });

const i18n = createI18n({
    locale: getLocale(),
    messages
})

/**
 * 设置语言
 * @param locale
 */
export function setI18nLanguage(locale: string, realReload = false) {
  setLocale(locale, realReload, function () {
    // i18n.global.locale = locale // legacy: true
    i18n.global.locale = locale;
  });
}

export default i18n;

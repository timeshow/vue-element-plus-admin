/**
 * 国际化 入口 locale
 */

import { createI18n } from "vue-i18n";

/**
 * elementPlus 多语言配置
 */
import enUS from "element-plus/lib/locale/lang/en";
import zhCN from "element-plus/lib/locale/lang/zh-cn";
import { getLocale, importAllLocales, setLocale } from "@/utils/i18n";
//import zhTW from "element-plus/lib/locale/lang/zh-tw";

export const elementPlusMessages: { [key: string]: any } = {
  "zh-CN": zhCN,
  //"zh-TW": zhTW,
  "en-US": enUS,
};

/**
 * 框架 多语言配置
 */
export const messages = importAllLocales();

const i18n = createI18n({
  legacy: false,
  locale: getLocale(),
  messages
});

/**
 * 设置语言
 * @param locale 
 */
export function setI18nLanguage(locale: string, realReload = false){
  setLocale(locale, realReload, function(){
    i18n.global.locale.value = locale
  })
}
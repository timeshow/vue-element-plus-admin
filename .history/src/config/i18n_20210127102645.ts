/**
 * 国际化 入口 locale
 */

import { createI18n } from 'vue-i18n'


/**
 * elementPlus 多语言配置
 */
import enUS from 'element-plus/lib/locale/lang/en';
import zhCN from 'element-plus/lib/locale/lang/zh-cn';
import zhTW from 'element-plus/lib/locale/lang/zh-tw';

export const elementPlusMessages: { [key: string]: any} = {
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    'en-US': enUS,
}

/**
 * 框架 多语言配置
 */



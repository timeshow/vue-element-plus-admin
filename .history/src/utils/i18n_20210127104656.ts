/**
 * 国际化 utils
 */

import { VueMessageType } from 'vue-i18n'

//存储key
export const localeKey = 'locale';

//默认语言
export const defaultLang = 'zh-CN';

 /**
 * 验证语言命名规则 zh-CN
 * @returns boolen
 */
export const localeNameExp = (lang: string): boolean => {
    const localeExp = new RegExp(`^([a-z]{2})-?([A-Z]{2})?$`);
    return localeExp.test(lang);
}

/**
 * 设置 html lang 属性值
 * @param lang 语言的 key
 */
export const setHtmlLang = (lang: string) => {
    /**
     * axios.defaults.headers.common['Accept-Language'] = locale
     */
    document.querySelector('html')?.setAttribute('lang', lang);
}

/**
 * 获取当前选择的语言
 * @returns string
 */
export const getLocale = (): string => {
    const lang = typeof window.localStorage !== 'undefined' ? window.localStorage.getItem(localeKey) : '';
    const isNavigatorLanguageValid = typeof navigator !== 'undefined' && typeof navigator.language === 'string';
    const browserLang = isNavigatorLanguageValid ? navigator.language.split('-').join('-') : ''
}





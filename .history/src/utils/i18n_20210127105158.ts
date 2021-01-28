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
    const browserLang = isNavigatorLanguageValid ? navigator.language.split('-').join('-') : '';
    return lang || browserLang || defaultLang;
}

/**
 * 切换语言
 * @param lang 语言的 key
 * @param realReload 是否刷新页面，默认刷新
 */
export const setLocale = (lang: string, realReload = true, callback: Function) => {
    if(lang !== undefined && !localeNameExp(lang)){
        // for reset when lang === undefined
        throw new Error('setLocale lang format error');
    }
    if(getLocale() !== lang){
        if(typeof window.localStorage !== 'undefined'){
            window.localStorage.setItem(localeKey, lang || '');
        }
        
    }
}


/**
 * 自定义 token 操作
 */
import localforage from 'localforage'
import settings from '@/config/settings'

/**
 * 获取本地Token
 */
export const getToken = async(): P
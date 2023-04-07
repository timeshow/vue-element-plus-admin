/**
 * Store utils
 */
import { Module, ModuleTree } from 'vuex'

/**
 * 自定义项目 Store Module 类型
 * 为自动导入的 store 做类型限制
 */
export interface StoreModuleType<S> extends Module<S, S> {
    namespaced: true
    name: string
}

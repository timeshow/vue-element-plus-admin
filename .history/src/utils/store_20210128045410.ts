/**
 * Store utils
 */
import { Module, ModuleTree } from 'vuex';

/**
 * 自定义项目 Store Module 类型
 * 为自动导入的 store 做类型限制
 * [@/store文件夹下定义的 store]与[@/views文件夹下定义的`文件store.ts`] 必须继承此类型
 */
export interface StoreModuleType<S> extends Module<S, S> {
  namespaced: true;
  name: string;
}
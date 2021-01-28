import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { StoreModuleType, } from "@/utils/store";
import user from '@/store/module/user'


export const store = createStore<ModuleType>({
    modules: {
        user
    }
})

export function useStore(): Store<StateType> {
    return baseUseStore()
}
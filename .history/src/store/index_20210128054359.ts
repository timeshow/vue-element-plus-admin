import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { ModuleType, StateType } from '@/store/global'
//import { ModuleType } from '/@/store/global'


export const store = createStore<ModuleType>({
    modules: {
        
    }
})

export function useStore(): store<StateType> {
    return baseUseStore()
}
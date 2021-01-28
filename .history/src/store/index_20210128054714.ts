import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { ModuleType, StateType } from '@/store/global'


export const store = createStore<ModuleType>({
    modules: {
        
    }
})

export function useStore(): Store<StateType> {
    return baseUseStore()
}
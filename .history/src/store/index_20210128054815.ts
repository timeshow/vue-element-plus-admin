import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { ModuleType, StateType } from '@/store/global'
import user from './modules/user'


export const store = createStore<ModuleType>({
    modules: {
        
    }
})

export function useStore(): Store<StateType> {
    return baseUseStore()
}
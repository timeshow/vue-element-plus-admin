import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { ModuleType, StateType } from '@/store/global'
import user from './module/user'


export const store = createStore({
    modules: {
        user
    }
})

export default store;
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { ModuleType, StateType } from '@/store/global'
import user from '@/store/module/user'


export const store = createStore({
    modules: {
        user
    }
})

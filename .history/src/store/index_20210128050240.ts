import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { ModuleType } from '@/store/global'
//import { ModuleType } from '/@/store/global'


export const store = createStore<M>({
    modules: {
        layout
    }
})
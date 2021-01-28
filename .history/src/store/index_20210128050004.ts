import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { ModuleType  } from '/@/store/index'


export const store = createStore<ModuleType >({
    modules: {
        layout
    }
})
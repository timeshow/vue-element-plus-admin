import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { ModuleType  } from '/@/type/store/index'


export const store = createStore<ModuleType >({
    modules: {
        layout
    }
})
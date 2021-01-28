import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { ModuleTy}
//import { ModuleType } from '/@/store/global'


export const store = createStore<ModuleType>({
    modules: {
        layout
    }
})
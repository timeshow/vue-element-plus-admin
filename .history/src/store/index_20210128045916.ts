import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { IState } from '/@/type/store/index'


export const store = createStore<IState>({
    modules: {
        layout
    }
})
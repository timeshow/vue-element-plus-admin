import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { StoreModel  } from '/@/store/global'


export const store = createStore<StoreModel>({
    modules: {
        layout
    }
})
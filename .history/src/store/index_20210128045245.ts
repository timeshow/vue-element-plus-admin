import { createStore, Store, useStore as baseUseStore } from 'vuex'


export const store = createStore<IState>({
    modules: {
        layout
    }
})
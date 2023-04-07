import { createStore, Store, useStore as baseUseStore } from 'vuex'
import global from './global'
import user from './module/user'

export const store = createStore<any>({
    modules: {
        global,
        user,
    },
})

export default store

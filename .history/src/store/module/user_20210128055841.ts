import { login, logout, getInfo } from '@/api/user'

const getDefaultState = () => {
    return {
      token: '',
      name: '',
      avatar: ''
    }
  }
  
  const state = getDefaultState()

  const mutations = {
    RESET_STATE: (state) => {
      Object.assign(state, getDefaultState())
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    }
  }

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
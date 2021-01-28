import { login, logout, getInfo } from '@/api/user'

const getDefaultState = () => {
    return {
      token: getToken(),
      name: '',
      avatar: ''
    }
  }
  
  const state = getDefaultState()

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
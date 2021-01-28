import { login, logout, getInfo } from '@/api/user'

const getDefaultState = () => {
    return {
      token: '',
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
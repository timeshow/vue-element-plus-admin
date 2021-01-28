import { Mutation, Action } from 'vuex';
import { StoreModuleType } from "@/utils/store";
import { ResponseData } from '@/utils/request';
import { login, queryCurrent, queryMessage } from '@/api/user'
import { removeToken } from "@/utils/auth";
import { setToken, LoginParamsType } from '@/type/user';

export interface CurrentUser {
  id: number;
  name: string;
  avatar: string;
  roles: string[];
}

export interface StateType {
  loginStatus?: 'ok' | 'error';
  currentUser: CurrentUser;
  message: number;
}

export interface ModuleType extends StoreModuleType<StateType> {
  state: StateType;
  mutations: {
    changeLoginStatus: Mutation<StateType>;
    saveCurrentUser: Mutation<StateType>;
    saveMessage: Mutation<StateType>;
  };
  actions: {
    login: Action<StateType, StateType>;
    fetchCurrent: Action<StateType, StateType>;
    fetchMessage: Action<StateType, StateType>;
    logout: Action<StateType, StateType>;
  };
}

const initState: StateType = {
  loginStatus: undefined,
  currentUser: {
    id: 0,
    name: '',
    avatar: '',
    roles: [],
  },
  message: 0,
}

const StoreModel: ModuleType = {
  namespaced: true,
  name: 'user',
  state: {
    ...initState
  },
  mutations: {
    changeLoginStatus(state, payload){
      state.loginStatus = payload;
    },
    saveCurrentUser(state, payload) {
      state.currentUser = {
        ...initState.currentUser,
        ...payload,
      }
    },
    saveMessage(state, payload) {
      state.message = payload;
    }
  },
  actions: {
    async login({ commit }, payload: LoginParamsType){
      let status = undefined;
      try{
        const response: ResponseData = await login(payload);
        const { data } = response;
        setToken(data.token || '');
        status = 'ok';
      }catch(error){
        if(error.message && error.message === 'CustomError'){
          status = 'error';
        }
      }
      commit('changeLoginStatus', status);
      if(status === 'ok'){
        return true;
      }else if(status === 'error'){
        return false;
      }
      return undefined;
    },
    async fetchCurrent({ commit }) {
      try {
        const response: ResponseData = await queryCurrent();
        const { data } = response;
        commit('saveCurrentUser', data || {});
        return true;
      } catch (error) {
        return false;
      }
    },
    async fetchMessage({ commit }) {
      try {
        const response: ResponseData = await queryMessage();
        const { data } = response;        
        commit('saveMessage', data || 0);
        return true;
      } catch (error) {
        return false;
      }
    },
    async logout({ commit }) {
      try {
        await removeToken();
        commit('saveCurrentUser', { ...initState.currentUser });
        return true;
      } catch (error) {
        return false;
      }
    }
  }
}



export default StoreModel;
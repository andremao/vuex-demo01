export const MUTATION_TYPES = {
  CHANGE_NAME: 'changeName',
};

export const ACTION_TYPES = {
  CHANGE_NAME_ASYNC: 'changeNameAsync',
};

export default {
  namespaced: true,
  state: {
    name: 'zs',
    age: 18,
  },
  // 用户
  getters: {
    heheda(state, getters, rootState, rootGetters) {
      console.log('=========begin======');
      console.log('state:', state);
      console.log('getters:', getters);
      console.log('rootState:', rootState);
      console.log('rootGetters:', rootGetters);
      console.log('=========end======');
      return 'user getters heheda';
    },
  },
  mutations: {
    [MUTATION_TYPES.CHANGE_NAME](state, payload, rootState) {
      // 这个state只有本模块的
      console.log(state, 'user得state');
      console.log(rootState, 'root的state');

      state.name = payload;
    },
  },
  actions: {
    [ACTION_TYPES.CHANGE_NAME_ASYNC]({ commit, getters, rootState }, payload) {
      console.log(getters.heheda, 'getters.heheda');

      console.log(rootState, 'rootState');

      setTimeout(() => {
        payload = 'Action-' + payload;
        // commit(MUTATION_TYPES.CHANGE_NAME, payload, { root: true });
        commit(MUTATION_TYPES.CHANGE_NAME, payload);
      }, 1000);
    },
  },
  modules: {},
};

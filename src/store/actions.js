import { MUTATION_TYPES } from './mutations';

export default {
  decreaseCountAsync({ commit }) {
    setTimeout(() => {
      // commit('decreaseCount');
      commit(MUTATION_TYPES.DECREASE_COUNT);
      // 封装的思想不是让程序变得可维护，让使用者用起来爽一些吗？
    }, 1000);
  },
};

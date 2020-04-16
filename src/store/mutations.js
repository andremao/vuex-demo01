export const MUTATION_TYPES = {
  INCREASE_COUNT: 'increaseCount',
  DECREASE_COUNT: 'decreaseCount',
};

export default {
  [MUTATION_TYPES.INCREASE_COUNT](state, payload) {
    if (payload !== undefined) {
      state.count += payload.reduce((sum, v) => sum + v, 0);
    } else {
      state.count++;
    }
  },
  [MUTATION_TYPES.DECREASE_COUNT](state) {
    state.count--;
  },
  changeName(state, payload) {
    console.log('root mutation change name called..., payload: ', payload);
  },
};

<template>
  <div class="home">
    home page, count: {{ count }}
    <button @click="increaseCount()">递增</button>
    <button @click="decreaseCountAsync()">递减</button>

    <comp001 />

    <comp002 />

    <hr />

    {{ $store.state }}

    <hr />

    user name: {{ $store.state.user.name }}

    <button @click="changeName('张三heheda')">Change User Name</button>

    <button @click="changeNameAsync('张三hahah')">
      Change User Name Async
    </button>

    <hr />

    <input type="text" v-model="name" />
  </div>
</template>

<script>
import Comp001 from '../components/Comp001';
import Comp002 from '../components/Comp002';

import { mapState, mapMutations, mapActions } from 'vuex';

import MUTATION_TYPES from '../store/mutation-types';

import ACTION_TYPES from '../store/action-types';

export default {
  name: 'Home',
  components: {
    Comp001,
    Comp002,
  },
  computed: {
    ...mapState(['count']),
    // ...mapState('user', ['name', 'age']),
    name: {
      get() {
        return this.$store.state.user.name;
      },
      set(value) {
        this.$store.commit('user/' + MUTATION_TYPES.USER.CHANGE_NAME, value);
      },
    },
  },
  methods: {
    ...mapMutations([
      MUTATION_TYPES.INCREASE_COUNT,
      MUTATION_TYPES.DECREASE_COUNT,
    ]), // 推荐
    // this.$store.commit('increaseCount', payload)

    ...mapMutations('user', [MUTATION_TYPES.USER.CHANGE_NAME]), // 模块的mapMutations使用

    ...mapActions(['decreaseCountAsync']), // 推荐
    // this.$store.dispatch('decreaseCountAsync', payload)

    ...mapActions('user', [ACTION_TYPES.USER.CHANGE_NAME_ASYNC]), // 模块的mapActions用法

    // changeUserName() {
    //   // this.$store.commit(`user/${MUTATION_TYPES.CHANGE_NAME}`, '张三');
    //   this.$store.commit(MUTATION_TYPES.USER.CHANGE_NAME, '张三');
    // },
  },
  created() {
    console.log(this.$store.state);
  },
};

//
</script>

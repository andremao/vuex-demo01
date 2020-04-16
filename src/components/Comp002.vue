<template>
  <div>
    Comp002, count: {{ $store.state.count }}, getCountMsg:
    {{ $store.getters.getCountMsg }}
    <button @click="$store.commit('decreaseCount')">递减</button>
  </div>
</template>

<script>
export default {
  // computed: {
  //   getCountMsg() {
  //     return `count msg---- ${this.$store.state.count}`;
  //   },
  // },
};
</script>

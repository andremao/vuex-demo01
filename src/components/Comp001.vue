<template>
  <div>
    Comp001, count: {{ $store.state.count }}, getCountMsg:
    {{ $store.getters.getCountMsg }}
    <button @click="increaseCount([50, 50, 100])">
      递增
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  // computed: {
  //   getCountMsg() {
  //     return `count msg---- ${this.$store.state.count}`;
  //   },
  // },
  methods: {
    ...mapMutations(['increaseCount']),
  },
};
</script>

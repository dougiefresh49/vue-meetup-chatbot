<template>
  <div class="home">
    <button @click="increment">increment</button>
    {{ count }}

    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import useCounter from '../composition-functions/counter.js';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const { count, increment } = useCounter();
    return {
      count,
      increment,
    };
  },
};
</script>

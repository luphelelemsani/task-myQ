<script>
import { defineComponent } from 'vue';
import VueCliButton from '@/vue-cli-button.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VueCliButton
  }
});
</script>

<template>
  <div id="app">
    <vue-cli-button text="crazy button" color="blue"/>
  </div>
</template>

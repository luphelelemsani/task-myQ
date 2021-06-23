<template>
  <div>Nothing to see here</div>
  <p>{{ count }}</p>
  <div @click="increment">
    <VueCliButton text="crazy button" color="blue" />
  </div>
</template>

<script>
import VueCliButton from "vue-cli-button";
export default {
  components: { VueCliButton },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <VBtn @click="onClick" :style="{ background: color }" class="btn">
      CLICK ME
    </VBtn>
    <div>
      {{ numberOfBtns }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberOfBtns: null,
    };
  },
  methods: {
    onClick(min, max) {
      this.numberOfBtns = Math.floor(Math.random() * (max - min) + min);
    },
  },
  props: {
    color: String,
  },
};
</script>

<style>
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
</style>

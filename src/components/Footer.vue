<template>
  <footer>
    <p>Copyright &copy; 2021</p>
    <p>{{ time }}</p>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      time: "",
    };
  },

  created() {
    const date = new Date();
    this.time =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  },
  methods: {
    getNow() {},
  },
};
</script>

<style scoped>
a {
  color: #333;
}

footer {
  margin-top: 30px;
  text-align: center;
}
</style>

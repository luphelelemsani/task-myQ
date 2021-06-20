<template>
  <div id="nav">
    <Button />
  </div>
</template>
<script>
import Button from "./Button";

export default {
  name: "Products",
  components: {
    Button,
  },
};
</script>
<style scoped>
div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

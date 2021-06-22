<template>
  <header>
    <div class="container">
      <div><h3>MyQuest</h3></div>
      <div>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

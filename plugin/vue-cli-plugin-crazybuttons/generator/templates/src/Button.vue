<template>
  <!-- <div>
    <VBtn @click="onClick" :style="{ background: color }" class="btn">
      Log event to console
    </VBtn>
    <div v-if="numberOfBtns">
      {{ numberOfBtns }}
    </div> -->
  <div>
    <button @click="onClick(2, 6)" :style="{ background: color }" class="btn">
      Log event to console
    </button>
    <div>
      {{ numberOfBtns }}
    </div>
    <div v-if="numberOfBtns === 3">
      <button @click="deleteBtn" class="btn hide">Delete</button>
    </div>
    <div v-if="numberOfBtns === 4">
      {{ date }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      numberOfBtns: null,
      date: "",
    };
  },
  methods: {
    onClick(min, max) {
      this.numberOfBtns = Math.floor(Math.random() * (max - min) + min);
    },
    deleteBtn() {
      document.getElementById("btn").style.display = "none";
    },
    date_function: function () {
      var currentDate = new Date();
      console.log(currentDate);

      var formatted_date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
      this.date = formatted_date;
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
.hide {
  transition: all 0.4s ease-out;
}
</style>

<template>
  <button @click="onClick(2, 6)" class="btn" :style="{ background: color }">
    {{text}}
  </button>
  <div class="number-container">
    <span>{{ numberOfBtns }}</span>
  </div>
  <div v-if="numberOfBtns === 2" @click="clickHandle">
    <button @click="onClick(2, 6)" class="btn">
      Crazy Click
    </button>
    <button @click="onClick(2, 6)" class="btn">
      Crazy Click
    </button>
  </div>
  
  <div v-if="numberOfBtns === 3">
    <button @click="deleteBtn()" class="btn hide" :class="{ remove: isDelete }">
      {{ del }}
    </button>
  </div>
  <div v-if="numberOfBtns === 4">
    <h1>{{ date }}</h1>
  </div>
  <div v-if="numberOfBtns === 5">
    <div class="weather-wrap">
      <div class="location">
        <div class="location">
          <h1 @click="setWeather()">
            {{ weather.name }}, {{ weather.sys.country }}
          </h1>
        </div>
        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}°C</div>
          <div class="weather">{{ weather.weather[0].description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      numberOfBtns: null,
      date: null,
      del: "delete",
      isDelete: false,
      location: "Tokyo",
      weather: {},

      api_key: "6b0e73c2e8993783058ae0a1debf4f01",
      url_base: "https://api.openweathermap.org/data/2.5/",
    };
  },
  props:{ 
    text: String,
    color: String
  },
  methods: {
    onClick(min, max) {
      this.numberOfBtns = Math.floor(Math.random() * (max - min) + min);
    },
    deleteBtn() {
      this.isDelete = true;
    },
    clickHandle() {
      alert("Whhooops you forget one 😭😭😭");
    },
    async fetchWeather() {
      const res = await fetch(
        `${this.url_base}weather?q=${this.location}&units=metric&appid=${this.api_key}`
      );
      const data = await res.json();
      return data;
    },
    setWeather() {
      console.log(this.weather);
    },
  },
  mounted: function() {
    this.date = new Date().toDateString();
  },
  async created() {
    this.weather = await this.fetchWeather();
  },
};
</script>

<style>
.hide {
  background: red;
}
.hide:active {
  transition: opacity 0.5s;
}
span {
  color: green;
  font-size: 1.5rem;
}
.number-container {
  margin: 50px;
}
.weather-box {
  text-align: center;
}
.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: rgb(161, 56, 56);
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather-box .weather {
  color: rgb(173, 56, 56);
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
h1 {
  background: -webkit-linear-gradient(#1385a1, #0e0f0f);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

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

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
  color: rgba(0, 255, 71, 0.25);
  box-shadow: 5px 4px 4px 2px rgba(0, 255, 71, 0.35);
}

.btn-block {
  display: block;
  width: 100%;
}
.hide {
  background: red;
}
button.remove {
  animation: removed-item-animation 1s cubic-bezier(0.55, -0.04, 0.91, 0.94)
    forwards;
  transform-origin: 0% 100%;
}

@keyframes removed-item-animation {
  0% {
    opacity: 1;
    transform: rotateZ(0);
  }

  100% {
    opacity: 0;
    transform: translateY(600px) rotateZ(90deg);
  }
}
</style>


import { openBlock, createBlock, Fragment, createVNode, toDisplayString, createCommentVNode } from 'vue';

var script = {
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
      url_base: "https://api.openweathermap.org/data/2.5/"
    };
  },

  props: {
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
      const res = await fetch(`${this.url_base}weather?q=${this.location}&units=metric&appid=${this.api_key}`);
      const data = await res.json();
      return data;
    },

    setWeather() {
      console.log(this.weather);
    }

  },
  mounted: function () {
    this.date = new Date().toDateString();
  },

  async created() {
    this.weather = await this.fetchWeather();
  }

};

const _hoisted_1 = {
  class: "number-container"
};
const _hoisted_2 = {
  key: 1
};
const _hoisted_3 = {
  key: 2
};
const _hoisted_4 = {
  key: 3
};
const _hoisted_5 = {
  class: "weather-wrap"
};
const _hoisted_6 = {
  class: "location"
};
const _hoisted_7 = {
  class: "location"
};
const _hoisted_8 = {
  class: "weather-box"
};
const _hoisted_9 = {
  class: "temp"
};
const _hoisted_10 = {
  class: "weather"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Fragment, null, [createVNode("button", {
    onClick: _cache[1] || (_cache[1] = $event => $options.onClick(2, 6)),
    class: "btn",
    style: {
      background: $props.color
    }
  }, toDisplayString($props.text), 5), createVNode("div", _hoisted_1, [createVNode("span", null, toDisplayString($data.numberOfBtns), 1)]), $data.numberOfBtns === 2 ? (openBlock(), createBlock("div", {
    key: 0,
    onClick: _cache[4] || (_cache[4] = (...args) => $options.clickHandle && $options.clickHandle(...args))
  }, [createVNode("button", {
    onClick: _cache[2] || (_cache[2] = $event => $options.onClick(2, 6)),
    class: "btn"
  }, " Crazy Click "), createVNode("button", {
    onClick: _cache[3] || (_cache[3] = $event => $options.onClick(2, 6)),
    class: "btn"
  }, " Crazy Click ")])) : createCommentVNode("", true), $data.numberOfBtns === 3 ? (openBlock(), createBlock("div", _hoisted_2, [createVNode("button", {
    onClick: _cache[5] || (_cache[5] = $event => $options.deleteBtn()),
    class: ["btn hide", {
      remove: $data.isDelete
    }]
  }, toDisplayString($data.del), 3)])) : createCommentVNode("", true), $data.numberOfBtns === 4 ? (openBlock(), createBlock("div", _hoisted_3, [createVNode("h1", null, toDisplayString($data.date), 1)])) : createCommentVNode("", true), $data.numberOfBtns === 5 ? (openBlock(), createBlock("div", _hoisted_4, [createVNode("div", _hoisted_5, [createVNode("div", _hoisted_6, [createVNode("div", _hoisted_7, [createVNode("h1", {
    onClick: _cache[6] || (_cache[6] = $event => $options.setWeather())
  }, toDisplayString($data.weather.name) + ", " + toDisplayString($data.weather.sys.country), 1)]), createVNode("div", _hoisted_8, [createVNode("div", _hoisted_9, toDisplayString(Math.round($data.weather.main.temp)) + "°C", 1), createVNode("div", _hoisted_10, toDisplayString($data.weather.weather[0].description), 1)])])])])) : createCommentVNode("", true)], 64);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.hide {\n  background: red;\n}\n.hide:active {\n  transition: opacity 0.5s;\n}\nspan {\n  color: green;\n  font-size: 1.5rem;\n}\n.number-container {\n  margin: 50px;\n}\n.weather-box {\n  text-align: center;\n}\n.weather-box .temp {\n  display: inline-block;\n  padding: 10px 25px;\n  color: rgb(161, 56, 56);\n  font-size: 102px;\n  font-weight: 900;\n  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);\n  background-color: rgba(255, 255, 255, 0.25);\n  border-radius: 16px;\n  margin: 30px 0px;\n  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);\n}\n.weather-box .weather {\n  color: rgb(173, 56, 56);\n  font-size: 48px;\n  font-weight: 700;\n  font-style: italic;\n  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);\n}\nh1 {\n  background: -webkit-linear-gradient(#1385a1, #0e0f0f);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.btn {\n  display: inline-block;\n  background: #000;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  margin: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 15px;\n  font-family: inherit;\n}\n.btn:focus {\n  outline: none;\n}\n.btn:active {\n  transform: scale(0.98);\n  color: rgba(0, 255, 71, 0.25);\n  box-shadow: 5px 4px 4px 2px rgba(0, 255, 71, 0.35);\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.hide {\n  background: red;\n}\nbutton.remove {\n  animation: removed-item-animation 1s cubic-bezier(0.55, -0.04, 0.91, 0.94)\n    forwards;\n  transform-origin: 0% 100%;\n}\n@keyframes removed-item-animation {\n0% {\n    opacity: 1;\n    transform: rotateZ(0);\n}\n100% {\n    opacity: 0;\n    transform: translateY(600px) rotateZ(90deg);\n}\n}\n";
styleInject(css_248z);

script.render = render;

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = script; // Attach install function executed by Vue.use()

  installable.install = app => {
    app.component('VueCliButton', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;

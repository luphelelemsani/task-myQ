'use strict';var vue=require('vue');function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = {
  components: {},
  data: function data() {
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
    onClick: function onClick(min, max) {
      this.numberOfBtns = Math.floor(Math.random() * (max - min) + min);
    },
    deleteBtn: function deleteBtn() {
      this.isDelete = true;
    },
    clickHandle: function clickHandle() {
      alert("Whhooops you forget one 😭😭😭");
    },
    fetchWeather: function fetchWeather() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("".concat(_this.url_base, "weather?q=").concat(_this.location, "&units=metric&appid=").concat(_this.api_key));

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                data = _context.sent;
                return _context.abrupt("return", data);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setWeather: function setWeather() {
      console.log(this.weather);
    }
  },
  mounted: function mounted() {
    this.date = new Date().toDateString();
  },
  created: function created() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.fetchWeather();

            case 2:
              _this2.weather = _context2.sent;

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};var _hoisted_1 = {
  class: "number-container"
};
var _hoisted_2 = {
  key: 1
};
var _hoisted_3 = {
  key: 2
};
var _hoisted_4 = {
  key: 3
};
var _hoisted_5 = {
  class: "weather-wrap"
};
var _hoisted_6 = {
  class: "location"
};
var _hoisted_7 = {
  class: "location"
};
var _hoisted_8 = {
  class: "weather-box"
};
var _hoisted_9 = {
  class: "temp"
};
var _hoisted_10 = {
  class: "weather"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock(vue.Fragment, null, [vue.createVNode("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.onClick(2, 6);
    }),
    class: "btn",
    style: {
      background: $props.color
    }
  }, vue.toDisplayString($props.text), 5), vue.createVNode("div", _hoisted_1, [vue.createVNode("span", null, vue.toDisplayString($data.numberOfBtns), 1)]), $data.numberOfBtns === 2 ? (vue.openBlock(), vue.createBlock("div", {
    key: 0,
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.clickHandle && $options.clickHandle.apply($options, arguments);
    })
  }, [vue.createVNode("button", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.onClick(2, 6);
    }),
    class: "btn"
  }, " Crazy Click "), vue.createVNode("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.onClick(2, 6);
    }),
    class: "btn"
  }, " Crazy Click ")])) : vue.createCommentVNode("", true), $data.numberOfBtns === 3 ? (vue.openBlock(), vue.createBlock("div", _hoisted_2, [vue.createVNode("button", {
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.deleteBtn();
    }),
    class: ["btn hide", {
      remove: $data.isDelete
    }]
  }, vue.toDisplayString($data.del), 3)])) : vue.createCommentVNode("", true), $data.numberOfBtns === 4 ? (vue.openBlock(), vue.createBlock("div", _hoisted_3, [vue.createVNode("h1", null, vue.toDisplayString($data.date), 1)])) : vue.createCommentVNode("", true), $data.numberOfBtns === 5 ? (vue.openBlock(), vue.createBlock("div", _hoisted_4, [vue.createVNode("div", _hoisted_5, [vue.createVNode("div", _hoisted_6, [vue.createVNode("div", _hoisted_7, [vue.createVNode("h1", {
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $options.setWeather();
    })
  }, vue.toDisplayString($data.weather.name) + ", " + vue.toDisplayString($data.weather.sys.country), 1)]), vue.createVNode("div", _hoisted_8, [vue.createVNode("div", _hoisted_9, vue.toDisplayString(Math.round($data.weather.main.temp)) + "°C", 1), vue.createVNode("div", _hoisted_10, vue.toDisplayString($data.weather.weather[0].description), 1)])])])])) : vue.createCommentVNode("", true)], 64);
}function styleInject(css, ref) {
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
}var css_248z = "\n.hide {\n  background: red;\n}\n.hide:active {\n  transition: opacity 0.5s;\n}\nspan {\n  color: green;\n  font-size: 1.5rem;\n}\n.number-container {\n  margin: 50px;\n}\n.weather-box {\n  text-align: center;\n}\n.weather-box .temp {\n  display: inline-block;\n  padding: 10px 25px;\n  color: rgb(161, 56, 56);\n  font-size: 102px;\n  font-weight: 900;\n  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);\n  background-color: rgba(255, 255, 255, 0.25);\n  border-radius: 16px;\n  margin: 30px 0px;\n  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);\n}\n.weather-box .weather {\n  color: rgb(173, 56, 56);\n  font-size: 48px;\n  font-weight: 700;\n  font-style: italic;\n  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);\n}\nh1 {\n  background: -webkit-linear-gradient(#1385a1, #0e0f0f);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.btn {\n  display: inline-block;\n  background: #000;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  margin: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 15px;\n  font-family: inherit;\n}\n.btn:focus {\n  outline: none;\n}\n.btn:active {\n  transform: scale(0.98);\n  color: rgba(0, 255, 71, 0.25);\n  box-shadow: 5px 4px 4px 2px rgba(0, 255, 71, 0.35);\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.hide {\n  background: red;\n}\nbutton.remove {\n  animation: removed-item-animation 1s cubic-bezier(0.55, -0.04, 0.91, 0.94)\n    forwards;\n  transform-origin: 0% 100%;\n}\n@keyframes removed-item-animation {\n0% {\n    opacity: 1;\n    transform: rotateZ(0);\n}\n100% {\n    opacity: 0;\n    transform: translateY(600px) rotateZ(90deg);\n}\n}\n";
styleInject(css_248z);script.render = render;// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = script; // Attach install function executed by Vue.use()

  installable.install = function (app) {
    app.component('VueCliButton', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default': component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;
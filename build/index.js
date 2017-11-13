module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Loading = __webpack_require__(2);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactLoadingComponent = function (_Component) {
  _inherits(ReactLoadingComponent, _Component);

  function ReactLoadingComponent() {
    _classCallCheck(this, ReactLoadingComponent);

    return _possibleConstructorReturn(this, (ReactLoadingComponent.__proto__ || Object.getPrototypeOf(ReactLoadingComponent)).apply(this, arguments));
  }

  _createClass(ReactLoadingComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Loading2.default, this.props);
    }
  }]);

  return ReactLoadingComponent;
}(_react.Component);

exports.default = ReactLoadingComponent;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Audio = __webpack_require__(3);

var _Audio2 = _interopRequireDefault(_Audio);

var _BallTriangle = __webpack_require__(4);

var _BallTriangle2 = _interopRequireDefault(_BallTriangle);

var _Bars = __webpack_require__(5);

var _Bars2 = _interopRequireDefault(_Bars);

var _Circles = __webpack_require__(6);

var _Circles2 = _interopRequireDefault(_Circles);

var _Grid = __webpack_require__(7);

var _Grid2 = _interopRequireDefault(_Grid);

var _Hearts = __webpack_require__(8);

var _Hearts2 = _interopRequireDefault(_Hearts);

var _Oval = __webpack_require__(9);

var _Oval2 = _interopRequireDefault(_Oval);

var _Puff = __webpack_require__(10);

var _Puff2 = _interopRequireDefault(_Puff);

var _Rings = __webpack_require__(11);

var _Rings2 = _interopRequireDefault(_Rings);

var _SpinningCircles = __webpack_require__(12);

var _SpinningCircles2 = _interopRequireDefault(_SpinningCircles);

var _TailSpin = __webpack_require__(13);

var _TailSpin2 = _interopRequireDefault(_TailSpin);

var _ThreeDots = __webpack_require__(14);

var _ThreeDots2 = _interopRequireDefault(_ThreeDots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * type: 
 */

exports.default = function (props) {
  var params = _extends({}, props);
  if (!params.width) {
    params.width = 64;
  }

  if (!params.height) {
    params.height = 64;
  }

  if (!params.fill) {
    params.fill = '#ffffff';
  }
  var loaders = [_react2.default.createElement(_Audio2.default, params), _react2.default.createElement(_BallTriangle2.default, params), _react2.default.createElement(_Bars2.default, params), _react2.default.createElement(_Circles2.default, params), _react2.default.createElement(_Grid2.default, params), _react2.default.createElement(_Hearts2.default, params), _react2.default.createElement(_Oval2.default, params), _react2.default.createElement(_Puff2.default, params), _react2.default.createElement(_Rings2.default, params), _react2.default.createElement(_SpinningCircles2.default, params), _react2.default.createElement(_TailSpin2.default, params), _react2.default.createElement(_ThreeDots2.default, params)];
  var types = ['audio', 'ball_triangle', 'bars', 'circles', 'grid', 'hearts', 'oval', 'puff', 'rings', 'spinning_circles', 'tail_spin', 'three_dots'];
  var indexOfTypes = types.indexOf(params.type);
  return indexOfTypes < 0 ? loaders[0] : loaders[indexOfTypes];
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var width = _ref.width,
        height = _ref.height,
        fill = _ref.fill;
    return _react2.default.createElement(
        "svg",
        { width: width, height: height, viewBox: "0 0 55 80", xmlns: "http://www.w3.org/2000/svg", fill: fill },
        _react2.default.createElement(
            "g",
            { transform: "matrix(1 0 0 -1 0 80)" },
            _react2.default.createElement(
                "rect",
                { width: "10", height: "20", rx: "3" },
                _react2.default.createElement("animate", { attributeName: "height",
                    begin: "0s", dur: "4.3s",
                    values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20", calcMode: "linear",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "rect",
                { x: "15", width: "10", height: "80", rx: "3" },
                _react2.default.createElement("animate", { attributeName: "height",
                    begin: "0s", dur: "2s",
                    values: "80;55;33;5;75;23;73;33;12;14;60;80", calcMode: "linear",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "rect",
                { x: "30", width: "10", height: "50", rx: "3" },
                _react2.default.createElement("animate", { attributeName: "height",
                    begin: "0s", dur: "1.4s",
                    values: "50;34;78;23;56;23;34;76;80;54;21;50", calcMode: "linear",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "rect",
                { x: "45", width: "10", height: "30", rx: "3" },
                _react2.default.createElement("animate", { attributeName: "height",
                    begin: "0s", dur: "2s",
                    values: "30;45;13;80;56;72;45;76;34;23;67;30", calcMode: "linear",
                    repeatCount: "indefinite" })
            )
        )
    );
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
      var width = _ref.width,
          height = _ref.height,
          fill = _ref.fill;
      return _react2.default.createElement(
            "svg",
            { width: width, height: height, viewBox: "0 0 57 57", xmlns: "http://www.w3.org/2000/svg", stroke: fill },
            _react2.default.createElement(
                  "g",
                  { fill: "none", fillRule: "evenodd" },
                  _react2.default.createElement(
                        "g",
                        { transform: "translate(1 1)", strokeWidth: "2" },
                        _react2.default.createElement(
                              "circle",
                              { cx: "5", cy: "50", r: "5" },
                              _react2.default.createElement("animate", { attributeName: "cy",
                                    begin: "0s", dur: "2.2s",
                                    values: "50;5;50;50",
                                    calcMode: "linear",
                                    repeatCount: "indefinite" }),
                              _react2.default.createElement("animate", { attributeName: "cx",
                                    begin: "0s", dur: "2.2s",
                                    values: "5;27;49;5",
                                    calcMode: "linear",
                                    repeatCount: "indefinite" })
                        ),
                        _react2.default.createElement(
                              "circle",
                              { cx: "27", cy: "5", r: "5" },
                              _react2.default.createElement("animate", { attributeName: "cy",
                                    begin: "0s", dur: "2.2s",
                                    from: "5", to: "5",
                                    values: "5;50;50;5",
                                    calcMode: "linear",
                                    repeatCount: "indefinite" }),
                              _react2.default.createElement("animate", { attributeName: "cx",
                                    begin: "0s", dur: "2.2s",
                                    from: "27", to: "27",
                                    values: "27;49;5;27",
                                    calcMode: "linear",
                                    repeatCount: "indefinite" })
                        ),
                        _react2.default.createElement(
                              "circle",
                              { cx: "49", cy: "50", r: "5" },
                              _react2.default.createElement("animate", { attributeName: "cy",
                                    begin: "0s", dur: "2.2s",
                                    values: "50;50;5;50",
                                    calcMode: "linear",
                                    repeatCount: "indefinite" }),
                              _react2.default.createElement("animate", { attributeName: "cx",
                                    from: "49", to: "49",
                                    begin: "0s", dur: "2.2s",
                                    values: "49;5;27;49",
                                    calcMode: "linear",
                                    repeatCount: "indefinite" })
                        )
                  )
            )
      );
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var width = _ref.width,
        height = _ref.height,
        fill = _ref.fill;
    return _react2.default.createElement(
        "svg",
        { width: width, height: height, viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg", fill: fill },
        _react2.default.createElement(
            "rect",
            { y: "10", width: "15", height: "120", rx: "6" },
            _react2.default.createElement("animate", { attributeName: "height",
                begin: "0.5s", dur: "1s",
                values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear",
                repeatCount: "indefinite" }),
            _react2.default.createElement("animate", { attributeName: "y",
                begin: "0.5s", dur: "1s",
                values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear",
                repeatCount: "indefinite" })
        ),
        _react2.default.createElement(
            "rect",
            { x: "30", y: "10", width: "15", height: "120", rx: "6" },
            _react2.default.createElement("animate", { attributeName: "height",
                begin: "0.25s", dur: "1s",
                values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear",
                repeatCount: "indefinite" }),
            _react2.default.createElement("animate", { attributeName: "y",
                begin: "0.25s", dur: "1s",
                values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear",
                repeatCount: "indefinite" })
        ),
        _react2.default.createElement(
            "rect",
            { x: "60", width: "15", height: "140", rx: "6" },
            _react2.default.createElement("animate", { attributeName: "height",
                begin: "0s", dur: "1s",
                values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear",
                repeatCount: "indefinite" }),
            _react2.default.createElement("animate", { attributeName: "y",
                begin: "0s", dur: "1s",
                values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear",
                repeatCount: "indefinite" })
        ),
        _react2.default.createElement(
            "rect",
            { x: "90", y: "10", width: "15", height: "120", rx: "6" },
            _react2.default.createElement("animate", { attributeName: "height",
                begin: "0.25s", dur: "1s",
                values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear",
                repeatCount: "indefinite" }),
            _react2.default.createElement("animate", { attributeName: "y",
                begin: "0.25s", dur: "1s",
                values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear",
                repeatCount: "indefinite" })
        ),
        _react2.default.createElement(
            "rect",
            { x: "120", y: "10", width: "15", height: "120", rx: "6" },
            _react2.default.createElement("animate", { attributeName: "height",
                begin: "0.5s", dur: "1s",
                values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear",
                repeatCount: "indefinite" }),
            _react2.default.createElement("animate", { attributeName: "y",
                begin: "0.5s", dur: "1s",
                values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear",
                repeatCount: "indefinite" })
        )
    );
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var width = _ref.width,
        height = _ref.height,
        fill = _ref.fill;
    return _react2.default.createElement(
        "svg",
        { width: width, height: height, viewBox: "0 0 135 135", xmlns: "http://www.w3.org/2000/svg", fill: fill },
        _react2.default.createElement(
            "path",
            { d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z" },
            _react2.default.createElement("animateTransform", {
                attributeName: "transform",
                type: "rotate",
                from: "0 67 67",
                to: "-360 67 67",
                dur: "2.5s",
                repeatCount: "indefinite" })
        ),
        _react2.default.createElement(
            "path",
            { d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z" },
            _react2.default.createElement("animateTransform", {
                attributeName: "transform",
                type: "rotate",
                from: "0 67 67",
                to: "360 67 67",
                dur: "8s",
                repeatCount: "indefinite" })
        )
    );
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var width = _ref.width,
        height = _ref.height,
        fill = _ref.fill;
    return _react2.default.createElement(
        "svg",
        { width: width, height: height, viewBox: "0 0 105 105", xmlns: "http://www.w3.org/2000/svg", fill: fill },
        _react2.default.createElement(
            "circle",
            { cx: "12.5", cy: "12.5", r: "12.5" },
            _react2.default.createElement("animate", { attributeName: "fill-opacity",
                begin: "0s", dur: "1s",
                values: "1;.2;1", calcMode: "linear",
                repeatCount: "indefinite" })
        ),
        _react2.default.createElement(
            "circle",
            { cx: "12.5", cy: "52.5", r: "12.5", fillOpacity: ".5" },
            _react2.default.createElement("animate", { attributeName: "fill-opacity",
                begin: "100ms", dur: "1s",
                values: "1;.2;1", calcMode: "linear",
                repeatCount: "indefinite" })
        ),
        _react2.default.createElement(
            "circle",
            { cx: "52.5", cy: "12.5", r: "12.5" },
            _react2.default.createElement("animate", { attributeName: "fill-opacity",
                begin: "300ms", dur: "1s",
                values: "1;.2;1", calcMode: "linear",
                repeatCount: "indefinite" })
        ),
        _react2.default.createElement(
            "circle",
            { cx: "52.5", cy: "52.5", r: "12.5" },
            _react2.default.createElement("animate", { attributeName: "fill-opacity",
                begin: "600ms", dur: "1s",
                values: "1;.2;1", calcMode: "linear",
                repeatCount: "indefinite" })
        ),
        _react2.default.createElement(
            "circle",
            { cx: "92.5", cy: "12.5", r: "12.5" },
            _react2.default.createElement("animate", { attributeName: "fill-opacity",
                begin: "800ms", dur: "1s",
                values: "1;.2;1", calcMode: "linear",
                repeatCount: "indefinite" })
        ),
        _react2.default.createElement(
            "circle",
            { cx: "92.5", cy: "52.5", r: "12.5" },
            _react2.default.createElement("animate", { attributeName: "fill-opacity",
                begin: "400ms", dur: "1s",
                values: "1;.2;1", calcMode: "linear",
                repeatCount: "indefinite" })
        ),
        _react2.default.createElement(
            "circle",
            { cx: "12.5", cy: "92.5", r: "12.5" },
            _react2.default.createElement("animate", { attributeName: "fill-opacity",
                begin: "700ms", dur: "1s",
                values: "1;.2;1", calcMode: "linear",
                repeatCount: "indefinite" })
        ),
        _react2.default.createElement(
            "circle",
            { cx: "52.5", cy: "92.5", r: "12.5" },
            _react2.default.createElement("animate", { attributeName: "fill-opacity",
                begin: "500ms", dur: "1s",
                values: "1;.2;1", calcMode: "linear",
                repeatCount: "indefinite" })
        ),
        _react2.default.createElement(
            "circle",
            { cx: "92.5", cy: "92.5", r: "12.5" },
            _react2.default.createElement("animate", { attributeName: "fill-opacity",
                begin: "200ms", dur: "1s",
                values: "1;.2;1", calcMode: "linear",
                repeatCount: "indefinite" })
        )
    );
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var width = _ref.width,
        height = _ref.height,
        fill = _ref.fill;
    return _react2.default.createElement(
        "svg",
        { width: width, height: height, viewBox: "0 0 140 64", xmlns: "http://www.w3.org/2000/svg", fill: fill },
        _react2.default.createElement(
            "path",
            { d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z", fillOpacity: ".5" },
            _react2.default.createElement("animate", { attributeName: "fill-opacity",
                begin: "0s", dur: "1.4s",
                values: "0.5;1;0.5",
                calcMode: "linear",
                repeatCount: "indefinite" })
        ),
        _react2.default.createElement(
            "path",
            { d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z", fillOpacity: ".5" },
            _react2.default.createElement("animate", { attributeName: "fill-opacity",
                begin: "0.7s", dur: "1.4s",
                values: "0.5;1;0.5",
                calcMode: "linear",
                repeatCount: "indefinite" })
        ),
        _react2.default.createElement("path", { d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z" })
    );
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var width = _ref.width,
        height = _ref.height,
        fill = _ref.fill;
    return _react2.default.createElement(
        "svg",
        { width: width, height: height, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", stroke: fill },
        _react2.default.createElement(
            "g",
            { fill: "none", fillRule: "evenodd" },
            _react2.default.createElement(
                "g",
                { transform: "translate(1 1)", strokeWidth: "2" },
                _react2.default.createElement("circle", { strokeOpacity: ".5", cx: "18", cy: "18", r: "18" }),
                _react2.default.createElement(
                    "path",
                    { d: "M36 18c0-9.94-8.06-18-18-18" },
                    _react2.default.createElement("animateTransform", {
                        attributeName: "transform",
                        type: "rotate",
                        from: "0 18 18",
                        to: "360 18 18",
                        dur: "1s",
                        repeatCount: "indefinite" })
                )
            )
        )
    );
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var width = _ref.width,
        height = _ref.height,
        fill = _ref.fill;
    return _react2.default.createElement(
        "svg",
        { width: width, height: height, viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg", stroke: fill },
        _react2.default.createElement(
            "g",
            { fill: "none", fillRule: "evenodd", strokeWidth: "2" },
            _react2.default.createElement(
                "circle",
                { cx: "22", cy: "22", r: "1" },
                _react2.default.createElement("animate", { attributeName: "r",
                    begin: "0s", dur: "1.8s",
                    values: "1; 20",
                    calcMode: "spline",
                    keyTimes: "0; 1",
                    keySplines: "0.165, 0.84, 0.44, 1",
                    repeatCount: "indefinite" }),
                _react2.default.createElement("animate", { attributeName: "stroke-opacity",
                    begin: "0s", dur: "1.8s",
                    values: "1; 0",
                    calcMode: "spline",
                    keyTimes: "0; 1",
                    keySplines: "0.3, 0.61, 0.355, 1",
                    repeatCount: "indefinite" })
            ),
            _react2.default.createElement(
                "circle",
                { cx: "22", cy: "22", r: "1" },
                _react2.default.createElement("animate", { attributeName: "r",
                    begin: "-0.9s", dur: "1.8s",
                    values: "1; 20",
                    calcMode: "spline",
                    keyTimes: "0; 1",
                    keySplines: "0.165, 0.84, 0.44, 1",
                    repeatCount: "indefinite" }),
                _react2.default.createElement("animate", { attributeName: "stroke-opacity",
                    begin: "-0.9s", dur: "1.8s",
                    values: "1; 0",
                    calcMode: "spline",
                    keyTimes: "0; 1",
                    keySplines: "0.3, 0.61, 0.355, 1",
                    repeatCount: "indefinite" })
            )
        )
    );
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
      var width = _ref.width,
          height = _ref.height,
          fill = _ref.fill;
      return _react2.default.createElement(
            "svg",
            { width: width, height: height, viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg", stroke: fill },
            _react2.default.createElement(
                  "g",
                  { fill: "none", fillRule: "evenodd", transform: "translate(1 1)", strokeWidth: "2" },
                  _react2.default.createElement(
                        "circle",
                        { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
                        _react2.default.createElement("animate", { attributeName: "r",
                              begin: "1.5s", dur: "3s",
                              values: "6;22",
                              calcMode: "linear",
                              repeatCount: "indefinite" }),
                        _react2.default.createElement("animate", { attributeName: "stroke-opacity",
                              begin: "1.5s", dur: "3s",
                              values: "1;0", calcMode: "linear",
                              repeatCount: "indefinite" }),
                        _react2.default.createElement("animate", { attributeName: "stroke-width",
                              begin: "1.5s", dur: "3s",
                              values: "2;0", calcMode: "linear",
                              repeatCount: "indefinite" })
                  ),
                  _react2.default.createElement(
                        "circle",
                        { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
                        _react2.default.createElement("animate", { attributeName: "r",
                              begin: "3s", dur: "3s",
                              values: "6;22",
                              calcMode: "linear",
                              repeatCount: "indefinite" }),
                        _react2.default.createElement("animate", { attributeName: "stroke-opacity",
                              begin: "3s", dur: "3s",
                              values: "1;0", calcMode: "linear",
                              repeatCount: "indefinite" }),
                        _react2.default.createElement("animate", { attributeName: "stroke-width",
                              begin: "3s", dur: "3s",
                              values: "2;0", calcMode: "linear",
                              repeatCount: "indefinite" })
                  ),
                  _react2.default.createElement(
                        "circle",
                        { cx: "22", cy: "22", r: "8" },
                        _react2.default.createElement("animate", { attributeName: "r",
                              begin: "0s", dur: "1.5s",
                              values: "6;1;2;3;4;5;6",
                              calcMode: "linear",
                              repeatCount: "indefinite" })
                  )
            )
      );
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var width = _ref.width,
        height = _ref.height,
        fill = _ref.fill;
    return _react2.default.createElement(
        "svg",
        { width: width, height: height, viewBox: "0 0 58 58", xmlns: "http://www.w3.org/2000/svg" },
        _react2.default.createElement(
            "g",
            { fill: "none", fillRule: "evenodd" },
            _react2.default.createElement(
                "g",
                { transform: "translate(2 1)", stroke: fill, strokeWidth: "1.5" },
                _react2.default.createElement(
                    "circle",
                    { cx: "42.601", cy: "11.462", r: "5", fillOpacity: "1", fill: fill },
                    _react2.default.createElement("animate", { attributeName: "fill-opacity",
                        begin: "0s", dur: "1.3s",
                        values: "1;0;0;0;0;0;0;0", calcMode: "linear",
                        repeatCount: "indefinite" })
                ),
                _react2.default.createElement(
                    "circle",
                    { cx: "49.063", cy: "27.063", r: "5", fillOpacity: "0", fill: fill },
                    _react2.default.createElement("animate", { attributeName: "fill-opacity",
                        begin: "0s", dur: "1.3s",
                        values: "0;1;0;0;0;0;0;0", calcMode: "linear",
                        repeatCount: "indefinite" })
                ),
                _react2.default.createElement(
                    "circle",
                    { cx: "42.601", cy: "42.663", r: "5", fillOpacity: "0", fill: fill },
                    _react2.default.createElement("animate", { attributeName: "fill-opacity",
                        begin: "0s", dur: "1.3s",
                        values: "0;0;1;0;0;0;0;0", calcMode: "linear",
                        repeatCount: "indefinite" })
                ),
                _react2.default.createElement(
                    "circle",
                    { cx: "27", cy: "49.125", r: "5", fillOpacity: "0", fill: fill },
                    _react2.default.createElement("animate", { attributeName: "fill-opacity",
                        begin: "0s", dur: "1.3s",
                        values: "0;0;0;1;0;0;0;0", calcMode: "linear",
                        repeatCount: "indefinite" })
                ),
                _react2.default.createElement(
                    "circle",
                    { cx: "11.399", cy: "42.663", r: "5", fillOpacity: "0", fill: fill },
                    _react2.default.createElement("animate", { attributeName: "fill-opacity",
                        begin: "0s", dur: "1.3s",
                        values: "0;0;0;0;1;0;0;0", calcMode: "linear",
                        repeatCount: "indefinite" })
                ),
                _react2.default.createElement(
                    "circle",
                    { cx: "4.938", cy: "27.063", r: "5", fillOpacity: "0", fill: fill },
                    _react2.default.createElement("animate", { attributeName: "fill-opacity",
                        begin: "0s", dur: "1.3s",
                        values: "0;0;0;0;0;1;0;0", calcMode: "linear",
                        repeatCount: "indefinite" })
                ),
                _react2.default.createElement(
                    "circle",
                    { cx: "11.399", cy: "11.462", r: "5", fillOpacity: "0", fill: fill },
                    _react2.default.createElement("animate", { attributeName: "fill-opacity",
                        begin: "0s", dur: "1.3s",
                        values: "0;0;0;0;0;0;1;0", calcMode: "linear",
                        repeatCount: "indefinite" })
                ),
                _react2.default.createElement(
                    "circle",
                    { cx: "27", cy: "5", r: "5", fillOpacity: "0", fill: fill },
                    _react2.default.createElement("animate", { attributeName: "fill-opacity",
                        begin: "0s", dur: "1.3s",
                        values: "0;0;0;0;0;0;0;1", calcMode: "linear",
                        repeatCount: "indefinite" })
                )
            )
        )
    );
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var width = _ref.width,
        height = _ref.height,
        fill = _ref.fill;
    return _react2.default.createElement(
        "svg",
        { width: width, height: height, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" },
        _react2.default.createElement(
            "defs",
            null,
            _react2.default.createElement(
                "linearGradient",
                { x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "a" },
                _react2.default.createElement("stop", { stopColor: fill, stopOpacity: "0", offset: "0%" }),
                _react2.default.createElement("stop", { stopColor: fill, stopOpacity: ".631", offset: "63.146%" }),
                _react2.default.createElement("stop", { stopColor: fill, offset: "100%" })
            )
        ),
        _react2.default.createElement(
            "g",
            { fill: "none", fillRule: "evenodd" },
            _react2.default.createElement(
                "g",
                { transform: "translate(1 1)" },
                _react2.default.createElement(
                    "path",
                    { d: "M36 18c0-9.94-8.06-18-18-18", id: "Oval-2", stroke: "url(#a)", strokeWidth: "2" },
                    _react2.default.createElement("animateTransform", {
                        attributeName: "transform",
                        type: "rotate",
                        from: "0 18 18",
                        to: "360 18 18",
                        dur: "0.9s",
                        repeatCount: "indefinite" })
                ),
                _react2.default.createElement(
                    "circle",
                    { fill: fill, cx: "36", cy: "18", r: "1" },
                    _react2.default.createElement("animateTransform", {
                        attributeName: "transform",
                        type: "rotate",
                        from: "0 18 18",
                        to: "360 18 18",
                        dur: "0.9s",
                        repeatCount: "indefinite" })
                )
            )
        )
    );
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
          value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
          var width = _ref.width,
              height = _ref.height,
              fill = _ref.fill;
          return _react2.default.createElement(
                    "svg",
                    { width: width, height: height, viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", fill: fill },
                    _react2.default.createElement(
                              "circle",
                              { cx: "15", cy: "15", r: "15" },
                              _react2.default.createElement("animate", { attributeName: "r", from: "15", to: "15",
                                        begin: "0s", dur: "0.8s",
                                        values: "15;9;15", calcMode: "linear",
                                        repeatCount: "indefinite" }),
                              _react2.default.createElement("animate", { attributeName: "fill-opacity", from: "1", to: "1",
                                        begin: "0s", dur: "0.8s",
                                        values: "1;.5;1", calcMode: "linear",
                                        repeatCount: "indefinite" })
                    ),
                    _react2.default.createElement(
                              "circle",
                              { cx: "60", cy: "15", r: "9", fillOpacity: "0.3" },
                              _react2.default.createElement("animate", { attributeName: "r", from: "9", to: "9",
                                        begin: "0s", dur: "0.8s",
                                        values: "9;15;9", calcMode: "linear",
                                        repeatCount: "indefinite" }),
                              _react2.default.createElement("animate", { attributeName: "fill-opacity", from: "0.5", to: "0.5",
                                        begin: "0s", dur: "0.8s",
                                        values: ".5;1;.5", calcMode: "linear",
                                        repeatCount: "indefinite" })
                    ),
                    _react2.default.createElement(
                              "circle",
                              { cx: "105", cy: "15", r: "15" },
                              _react2.default.createElement("animate", { attributeName: "r", from: "15", to: "15",
                                        begin: "0s", dur: "0.8s",
                                        values: "15;9;15", calcMode: "linear",
                                        repeatCount: "indefinite" }),
                              _react2.default.createElement("animate", { attributeName: "fill-opacity", from: "1", to: "1",
                                        begin: "0s", dur: "0.8s",
                                        values: "1;.5;1", calcMode: "linear",
                                        repeatCount: "indefinite" })
                    )
          );
};

/***/ })
/******/ ]);
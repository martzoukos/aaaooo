webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/letter.jsx":
/*!*******************************!*\
  !*** ./components/letter.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/smartzoukos/Projects/aaaooo/components/letter.jsx";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// alphabet sounds:
// https://freesound.org/search/?q=alphabet&f=grouping_pack:%224371_The%20Alphabet%22%20&s=%22score%20desc%22&g=1&advanced=&a_tag=&a_filename=&a_description=&a_packname=&a_soundid=&a_username=
// https://freesound.org/people/dersuperanton/sounds/434730/
// https://www.npmjs.com/package/react-sound
var Letter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Letter, _React$Component);

  function Letter(props) {
    var _this;

    _classCallCheck(this, Letter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Letter).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateLetterValue", function (event) {
      console.log(event.key);

      if ( // https://keycode.info/
      // This seemingly random list of keys representes alphanumeric and special characters. 
      event.keyCode >= 48 && event.keyCode <= 90 || event.keyCode >= 96 && event.keyCode <= 111 || event.keyCode >= 160 && event.keyCode <= 165 || event.keyCode >= 186 && event.keyCode <= 223) {
        _this.setState({
          letterValue: event.key
        });
      }
    });

    _this.key = 0;
    _this.state = {
      letterValue: _this.props.value
    };
    return _this;
  }

  _createClass(Letter, [{
    key: "render",
    value: function render() {
      // Rerender the component to refire the animation on each keystroke.
      // I know, yuk.
      ++this.key;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4149969638" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "letter__input",
        key: this.key,
        className: "jsx-4149969638" + " " + "letter__character",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, this.state.letterValue), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        autoFocus: true,
        readOnly: true,
        id: "letter__input",
        onKeyDown: this.updateLetterValue,
        value: this.state.letterValue,
        className: "jsx-4149969638",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("audio", {
        src: "./static/alphabet/z.wav",
        controls: true,
        autoPlay: true,
        className: "jsx-4149969638",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4149969638",
        css: "@-webkit-keyframes reset-jsx-4149969638{from{color:#fd1265;}to{color:#ff5994;}}@keyframes reset-jsx-4149969638{from{color:#fd1265;}to{color:#ff5994;}}.letter__character.jsx-4149969638{background-color:#edff8f;-webkit-animation-name:reset-jsx-4149969638;animation-name:reset-jsx-4149969638;-webkit-animation-duration:.5s;animation-duration:.5s;color:#ff5994;font-family:\"Comic Sans MS\",cursive,sans-serif;position:absolute;top:0;left:0;right:0;bottom:0;font-size:80vh;line-height:80vh;text-align:center;}#letter__input.jsx-4149969638{position:absolute !important;height:1px;width:1px;overflow:hidden;-webkit-clip:rect(1px 1px 1px 1px);clip:rect(1px 1px 1px 1px);-webkit-clip:rect(1px,1px,1px,1px);clip:rect(1px,1px,1px,1px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFydHpvdWtvcy9Qcm9qZWN0cy9hYWFvb28vY29tcG9uZW50cy9sZXR0ZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEaUIsQUFHMkIsQUFDRixBQUlRLEFBaUJJLGNBdEJULEFBQ0YsV0FLRyxJQWlCVCxXQUFXLFVBQ04sZ0JBQ1csdUNBbEJMLHVCQW1CUSwrQkFqQmpCLGNBQ21DLGlCQWlCbEQsOEJBaEJtQixrQkFDWixNQUNDLE9BQ0MsUUFDQyxTQUNNLGVBQ0UsaUJBQ0Msa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9zbWFydHpvdWtvcy9Qcm9qZWN0cy9hYWFvb28vY29tcG9uZW50cy9sZXR0ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gYWxwaGFiZXQgc291bmRzOlxuLy8gaHR0cHM6Ly9mcmVlc291bmQub3JnL3NlYXJjaC8/cT1hbHBoYWJldCZmPWdyb3VwaW5nX3BhY2s6JTIyNDM3MV9UaGUlMjBBbHBoYWJldCUyMiUyMCZzPSUyMnNjb3JlJTIwZGVzYyUyMiZnPTEmYWR2YW5jZWQ9JmFfdGFnPSZhX2ZpbGVuYW1lPSZhX2Rlc2NyaXB0aW9uPSZhX3BhY2tuYW1lPSZhX3NvdW5kaWQ9JmFfdXNlcm5hbWU9XG4vLyBodHRwczovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL2RlcnN1cGVyYW50b24vc291bmRzLzQzNDczMC9cbi8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlYWN0LXNvdW5kXG5cbmNsYXNzIExldHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdCBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmtleSA9IDA7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICBcdGxldHRlclZhbHVlOiB0aGlzLnByb3BzLnZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUxldHRlclZhbHVlID0gKGV2ZW50KSA9PiB7XG4gIFx0Y29uc29sZS5sb2coZXZlbnQua2V5KTtcbiAgXHRpZiAoXG4gIFx0XHQvLyBodHRwczovL2tleWNvZGUuaW5mby9cbiAgXHRcdC8vIFRoaXMgc2VlbWluZ2x5IHJhbmRvbSBsaXN0IG9mIGtleXMgcmVwcmVzZW50ZXMgYWxwaGFudW1lcmljIGFuZCBzcGVjaWFsIGNoYXJhY3RlcnMuIFxuICBcdFx0KGV2ZW50LmtleUNvZGUgPj0gNDggJiYgZXZlbnQua2V5Q29kZSA8PSA5MClcbiAgXHQgIHx8IChldmVudC5rZXlDb2RlID49IDk2ICYmIGV2ZW50LmtleUNvZGUgPD0gMTExKVxuICBcdCAgfHwgKGV2ZW50LmtleUNvZGUgPj0gMTYwICYmIGV2ZW50LmtleUNvZGUgPD0gMTY1KVxuICBcdCAgfHwgKGV2ZW50LmtleUNvZGUgPj0gMTg2ICYmIGV2ZW50LmtleUNvZGUgPD0gMjIzKSlcbiAgXHR7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHQgIFx0bGV0dGVyVmFsdWU6IGV2ZW50LmtleVxuXHRcdCAgfSk7XHRcbiAgXHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Ly8gUmVyZW5kZXIgdGhlIGNvbXBvbmVudCB0byByZWZpcmUgdGhlIGFuaW1hdGlvbiBvbiBlYWNoIGtleXN0cm9rZS5cblx0XHQvLyBJIGtub3csIHl1ay5cbiAgICArK3RoaXMua2V5O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiPlxuXHRcdFx0XHQ8bGFiZWwgXG5cdFx0XHRcdFx0aHRtbEZvcj1cImxldHRlcl9faW5wdXRcIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImxldHRlcl9fY2hhcmFjdGVyXCJcblx0XHRcdFx0XHRrZXk9e3RoaXMua2V5fSA+XG5cdFx0ICBcdFx0e3RoaXMuc3RhdGUubGV0dGVyVmFsdWV9XG5cdFx0ICBcdDwvbGFiZWw+XG5cdFx0ICBcdDxpbnB1dCBcblx0XHQgIFx0XHRhdXRvRm9jdXMgXG5cdFx0ICBcdFx0cmVhZE9ubHlcblx0XHQgIFx0XHRpZD1cImxldHRlcl9faW5wdXRcIiBcblx0XHQgIFx0XHRvbktleURvd249e3RoaXMudXBkYXRlTGV0dGVyVmFsdWV9IFxuXHRcdCAgXHRcdHZhbHVlPXt0aGlzLnN0YXRlLmxldHRlclZhbHVlfVxuXHRcdCAgXHRcdC8+XG5cdFx0ICBcdDxhdWRpbyBzcmM9XCIuL3N0YXRpYy9hbHBoYWJldC96LndhdlwiIGNvbnRyb2xzIGF1dG9QbGF5Lz5cblx0XHQgIFx0PHN0eWxlIGpzeD57YFxuXHRcdCAgXHRcdEBrZXlmcmFtZXMgcmVzZXQge1xuXHRcdFx0XHRcdCAgZnJvbSB7Y29sb3I6ICNmZDEyNjU7fVxuXHRcdFx0XHRcdCAgdG8ge2NvbG9yOiAjZmY1OTk0O31cblx0XHRcdFx0XHR9XG5cblx0XHQgIFx0XHQubGV0dGVyX19jaGFyYWN0ZXIge1xuXHRcdCAgXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2VkZmY4Zjtcblx0XHRcdFx0XHQgIGFuaW1hdGlvbi1uYW1lOiByZXNldDtcblx0XHRcdFx0XHQgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xuXG5cdFx0ICBcdFx0XHRjb2xvcjogI2ZmNTk5NDtcblx0XHQgIFx0XHRcdGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcblx0XHQgIFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHQgIFx0XHRcdHRvcDogMDtcblx0XHQgIFx0XHRcdGxlZnQ6IDA7XG5cdFx0ICBcdFx0XHRyaWdodDogMDtcblx0XHQgIFx0XHRcdGJvdHRvbTogMDtcblx0XHQgIFx0XHRcdGZvbnQtc2l6ZTogODB2aDtcblx0XHQgIFx0XHRcdGxpbmUtaGVpZ2h0OiA4MHZoO1xuXHRcdCAgXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCNsZXR0ZXJfX2lucHV0IHsgLyogaHR0cHM6Ly9zbm9vay5jYS9hcmNoaXZlcy9odG1sX2FuZF9jc3MvaGlkaW5nLWNvbnRlbnQtZm9yLWFjY2Vzc2liaWxpdHkgKi9cblx0XHRcdCAgXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuXHRcdFx0XHQgICAgaGVpZ2h0OiAxcHg7IHdpZHRoOiAxcHg7XG5cdFx0XHRcdCAgICBvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHQgICAgY2xpcDogcmVjdCgxcHggMXB4IDFweCAxcHgpOyAvKiBJRTYsIElFNyAqL1xuXHRcdFx0XHQgICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuXHRcdFx0XHQgIH1cblx0XHQgIFx0YH08L3N0eWxlPlxuXHRcdCAgPC9kaXY+XG5cdCAgKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExldHRlclxuIl19 */\n/*@ sourceURL=/Users/smartzoukos/Projects/aaaooo/components/letter.jsx */",
        __self: this
      }));
    }
  }]);

  return Letter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Letter);

/***/ })

})
//# sourceMappingURL=index.js.8f9f2ed4f8961a1557b1.hot-update.js.map
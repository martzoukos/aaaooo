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

var Letter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Letter, _React$Component);

  function Letter(props) {
    var _this;

    _classCallCheck(this, Letter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Letter).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateLetterValue", function (event) {
      if ( // https://keycode.info/
      // This seemingly random list of keys representes alphanumeric and special characters. 
      event.keyCode >= 48 && event.keyCode <= 90 || event.keyCode >= 96 && event.keyCode <= 111 || event.keyCode >= 160 && event.keyCode <= 165 || event.keyCode >= 186 && event.keyCode <= 223) {
        _this.setState({
          letterValue: event.key,
          soundFile: "./static/alphabet/".concat(event.key, ".wav")
        });
      }
    });

    _this.key = 0;
    _this.state = {
      letterValue: _this.props.value,
      soundFile: "./static/alphabet/".concat(_this.props.value, ".wav")
    };
    return _this;
  }

  _createClass(Letter, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1766542530" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "letter__input",
        className: "jsx-1766542530" + " " + "letter__character",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, this.state.letterValue), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        autoFocus: true,
        readOnly: true,
        id: "letter__input",
        onKeyDown: this.updateLetterValue,
        value: this.state.letterValue,
        className: "jsx-1766542530" + " " + "visuallyhidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("audio", {
        src: this.state.soundFile,
        autoPlay: true,
        className: "jsx-1766542530",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1766542530",
        css: ".visuallyhidden.jsx-1766542530{position:absolute !important;height:1px;width:1px;overflow:hidden;-webkit-clip:rect(1px 1px 1px 1px);clip:rect(1px 1px 1px 1px);-webkit-clip:rect(1px,1px,1px,1px);clip:rect(1px,1px,1px,1px);}@-webkit-keyframes reset-jsx-1766542530{from{color:#fd1265;}to{color:#ff5994;}}@keyframes reset-jsx-1766542530{from{color:#fd1265;}to{color:#ff5994;}}.letter__character.jsx-1766542530{background-color:#edff8f;-webkit-animation-name:reset-jsx-1766542530;animation-name:reset-jsx-1766542530;-webkit-animation-duration:.5s;animation-duration:.5s;color:#ff5994;font-family:\"Comic Sans MS\",cursive,sans-serif;position:absolute;top:0;left:0;right:0;bottom:0;font-size:80vh;line-height:80vh;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFydHpvdWtvcy9Qcm9qZWN0cy9hYWFvb28vY29tcG9uZW50cy9sZXR0ZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDaUIsQUFJcUMsQUFRVixBQUNGLEFBSVEsY0FMTCxBQUNGLFdBS0csSUFiVCxXQUFXLFVBQ04sZ0JBQ1csdUNBWUwsdUJBWFEsK0JBYWpCLGNBQ21DLGlCQWJsRCw4QkFjbUIsa0JBQ1osTUFDQyxPQUNDLFFBQ0MsU0FDTSxlQUNFLGlCQUNDLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvc21hcnR6b3Vrb3MvUHJvamVjdHMvYWFhb29vL2NvbXBvbmVudHMvbGV0dGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIExldHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdCBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmtleSA9IDA7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICBcdGxldHRlclZhbHVlOiB0aGlzLnByb3BzLnZhbHVlLFxuICAgIFx0c291bmRGaWxlOiBgLi9zdGF0aWMvYWxwaGFiZXQvJHt0aGlzLnByb3BzLnZhbHVlfS53YXZgXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUxldHRlclZhbHVlID0gKGV2ZW50KSA9PiB7XG4gIFx0aWYgKFxuICBcdFx0Ly8gaHR0cHM6Ly9rZXljb2RlLmluZm8vXG4gIFx0XHQvLyBUaGlzIHNlZW1pbmdseSByYW5kb20gbGlzdCBvZiBrZXlzIHJlcHJlc2VudGVzIGFscGhhbnVtZXJpYyBhbmQgc3BlY2lhbCBjaGFyYWN0ZXJzLiBcbiAgXHRcdChldmVudC5rZXlDb2RlID49IDQ4ICYmIGV2ZW50LmtleUNvZGUgPD0gOTApXG4gIFx0ICB8fCAoZXZlbnQua2V5Q29kZSA+PSA5NiAmJiBldmVudC5rZXlDb2RlIDw9IDExMSlcbiAgXHQgIHx8IChldmVudC5rZXlDb2RlID49IDE2MCAmJiBldmVudC5rZXlDb2RlIDw9IDE2NSlcbiAgXHQgIHx8IChldmVudC5rZXlDb2RlID49IDE4NiAmJiBldmVudC5rZXlDb2RlIDw9IDIyMykpXG4gIFx0e1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0ICBcdGxldHRlclZhbHVlOiBldmVudC5rZXksXG5cdFx0ICBcdHNvdW5kRmlsZTogYC4vc3RhdGljL2FscGhhYmV0LyR7ZXZlbnQua2V5fS53YXZgXG5cdFx0ICB9KTtcdFxuICBcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIj5cblx0XHRcdFx0PGxhYmVsIFxuXHRcdFx0XHRcdGh0bWxGb3I9XCJsZXR0ZXJfX2lucHV0XCJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJsZXR0ZXJfX2NoYXJhY3RlclwiID5cblx0XHQgIFx0XHR7dGhpcy5zdGF0ZS5sZXR0ZXJWYWx1ZX1cblx0XHQgIFx0PC9sYWJlbD5cblx0XHQgIFx0PGlucHV0IFxuXHRcdCAgXHRcdGF1dG9Gb2N1cyBcblx0XHQgIFx0XHRyZWFkT25seVxuXHRcdCAgXHRcdGlkPVwibGV0dGVyX19pbnB1dFwiIFxuXHRcdCAgXHRcdGNsYXNzTmFtZT1cInZpc3VhbGx5aGlkZGVuXCJcblx0XHQgIFx0XHRvbktleURvd249e3RoaXMudXBkYXRlTGV0dGVyVmFsdWV9IFxuXHRcdCAgXHRcdHZhbHVlPXt0aGlzLnN0YXRlLmxldHRlclZhbHVlfVxuXHRcdCAgXHRcdC8+XG5cdFx0ICBcdDxhdWRpbyBzcmM9e3RoaXMuc3RhdGUuc291bmRGaWxlfSBhdXRvUGxheS8+XG5cdFx0ICBcdDxzdHlsZSBqc3g+e2Bcblx0XHQgIFx0XHQudmlzdWFsbHloaWRkZW4ge1xuXHRcdFx0XHRcdFx0LyogaHR0cHM6Ly9zbm9vay5jYS9hcmNoaXZlcy9odG1sX2FuZF9jc3MvaGlkaW5nLWNvbnRlbnQtZm9yLWFjY2Vzc2liaWxpdHkgKi9cblx0XHRcdCAgXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuXHRcdFx0XHQgICAgaGVpZ2h0OiAxcHg7IHdpZHRoOiAxcHg7XG5cdFx0XHRcdCAgICBvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHQgICAgY2xpcDogcmVjdCgxcHggMXB4IDFweCAxcHgpOyAvKiBJRTYsIElFNyAqL1xuXHRcdFx0XHQgICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuXHRcdCAgXHRcdH1cblxuXHRcdCAgXHRcdEBrZXlmcmFtZXMgcmVzZXQge1xuXHRcdFx0XHRcdCAgZnJvbSB7Y29sb3I6ICNmZDEyNjU7fVxuXHRcdFx0XHRcdCAgdG8ge2NvbG9yOiAjZmY1OTk0O31cblx0XHRcdFx0XHR9XG5cblx0XHQgIFx0XHQubGV0dGVyX19jaGFyYWN0ZXIge1xuXHRcdCAgXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2VkZmY4Zjtcblx0XHRcdFx0XHQgIGFuaW1hdGlvbi1uYW1lOiByZXNldDtcblx0XHRcdFx0XHQgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xuXG5cdFx0ICBcdFx0XHRjb2xvcjogI2ZmNTk5NDtcblx0XHQgIFx0XHRcdGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcblx0XHQgIFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHQgIFx0XHRcdHRvcDogMDtcblx0XHQgIFx0XHRcdGxlZnQ6IDA7XG5cdFx0ICBcdFx0XHRyaWdodDogMDtcblx0XHQgIFx0XHRcdGJvdHRvbTogMDtcblx0XHQgIFx0XHRcdGZvbnQtc2l6ZTogODB2aDtcblx0XHQgIFx0XHRcdGxpbmUtaGVpZ2h0OiA4MHZoO1xuXHRcdCAgXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHQgIFx0YH08L3N0eWxlPlxuXHRcdCAgPC9kaXY+XG5cdCAgKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExldHRlclxuIl19 */\n/*@ sourceURL=/Users/smartzoukos/Projects/aaaooo/components/letter.jsx */",
        __self: this
      }));
    }
  }]);

  return Letter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Letter);

/***/ })

})
//# sourceMappingURL=index.js.1a6b6a06f823acb5f964.hot-update.js.map
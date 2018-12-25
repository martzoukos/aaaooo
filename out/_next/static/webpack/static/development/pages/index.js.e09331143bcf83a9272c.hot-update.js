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
        key: this.key,
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
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("audio", {
        src: this.state.soundFile,
        autoPlay: true,
        className: "jsx-1766542530",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1766542530",
        css: ".visuallyhidden.jsx-1766542530{position:absolute !important;height:1px;width:1px;overflow:hidden;-webkit-clip:rect(1px 1px 1px 1px);clip:rect(1px 1px 1px 1px);-webkit-clip:rect(1px,1px,1px,1px);clip:rect(1px,1px,1px,1px);}@-webkit-keyframes reset-jsx-1766542530{from{color:#fd1265;}to{color:#ff5994;}}@keyframes reset-jsx-1766542530{from{color:#fd1265;}to{color:#ff5994;}}.letter__character.jsx-1766542530{background-color:#edff8f;-webkit-animation-name:reset-jsx-1766542530;animation-name:reset-jsx-1766542530;-webkit-animation-duration:.5s;animation-duration:.5s;color:#ff5994;font-family:\"Comic Sans MS\",cursive,sans-serif;position:absolute;top:0;left:0;right:0;bottom:0;font-size:80vh;line-height:80vh;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFydHpvdWtvcy9Qcm9qZWN0cy9hYWFvb28vY29tcG9uZW50cy9sZXR0ZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDaUIsQUFJcUMsQUFRVixBQUNGLEFBSVEsY0FMTCxBQUNGLFdBS0csSUFiVCxXQUFXLFVBQ04sZ0JBQ1csdUNBWUwsdUJBWFEsK0JBYWpCLGNBQ21DLGlCQWJsRCw4QkFjbUIsa0JBQ1osTUFDQyxPQUNDLFFBQ0MsU0FDTSxlQUNFLGlCQUNDLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvc21hcnR6b3Vrb3MvUHJvamVjdHMvYWFhb29vL2NvbXBvbmVudHMvbGV0dGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIExldHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdCBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmtleSA9IDA7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICBcdGxldHRlclZhbHVlOiB0aGlzLnByb3BzLnZhbHVlLFxuICAgIFx0c291bmRGaWxlOiBgLi9zdGF0aWMvYWxwaGFiZXQvJHt0aGlzLnByb3BzLnZhbHVlfS53YXZgXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUxldHRlclZhbHVlID0gKGV2ZW50KSA9PiB7XG4gIFx0aWYgKFxuICBcdFx0Ly8gaHR0cHM6Ly9rZXljb2RlLmluZm8vXG4gIFx0XHQvLyBUaGlzIHNlZW1pbmdseSByYW5kb20gbGlzdCBvZiBrZXlzIHJlcHJlc2VudGVzIGFscGhhbnVtZXJpYyBhbmQgc3BlY2lhbCBjaGFyYWN0ZXJzLiBcbiAgXHRcdChldmVudC5rZXlDb2RlID49IDQ4ICYmIGV2ZW50LmtleUNvZGUgPD0gOTApXG4gIFx0ICB8fCAoZXZlbnQua2V5Q29kZSA+PSA5NiAmJiBldmVudC5rZXlDb2RlIDw9IDExMSlcbiAgXHQgIHx8IChldmVudC5rZXlDb2RlID49IDE2MCAmJiBldmVudC5rZXlDb2RlIDw9IDE2NSlcbiAgXHQgIHx8IChldmVudC5rZXlDb2RlID49IDE4NiAmJiBldmVudC5rZXlDb2RlIDw9IDIyMykpXG4gIFx0e1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0ICBcdGxldHRlclZhbHVlOiBldmVudC5rZXksXG5cdFx0ICBcdHNvdW5kRmlsZTogYC4vc3RhdGljL2FscGhhYmV0LyR7ZXZlbnQua2V5fS53YXZgXG5cdFx0ICB9KTtcdFxuICBcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIj5cblx0XHRcdFx0PGxhYmVsIFxuXHRcdFx0XHRcdGh0bWxGb3I9XCJsZXR0ZXJfX2lucHV0XCJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJsZXR0ZXJfX2NoYXJhY3RlclwiXG5cdFx0XHRcdFx0a2V5PXt0aGlzLmtleX0gPlxuXHRcdCAgXHRcdHt0aGlzLnN0YXRlLmxldHRlclZhbHVlfVxuXHRcdCAgXHQ8L2xhYmVsPlxuXHRcdCAgXHQ8aW5wdXQgXG5cdFx0ICBcdFx0YXV0b0ZvY3VzIFxuXHRcdCAgXHRcdHJlYWRPbmx5XG5cdFx0ICBcdFx0aWQ9XCJsZXR0ZXJfX2lucHV0XCIgXG5cdFx0ICBcdFx0Y2xhc3NOYW1lPVwidmlzdWFsbHloaWRkZW5cIlxuXHRcdCAgXHRcdG9uS2V5RG93bj17dGhpcy51cGRhdGVMZXR0ZXJWYWx1ZX0gXG5cdFx0ICBcdFx0dmFsdWU9e3RoaXMuc3RhdGUubGV0dGVyVmFsdWV9XG5cdFx0ICBcdFx0Lz5cblx0XHQgIFx0PGF1ZGlvIHNyYz17dGhpcy5zdGF0ZS5zb3VuZEZpbGV9IGF1dG9QbGF5Lz5cblx0XHQgIFx0PHN0eWxlIGpzeD57YFxuXHRcdCAgXHRcdC52aXN1YWxseWhpZGRlbiB7XG5cdFx0XHRcdFx0XHQvKiBodHRwczovL3Nub29rLmNhL2FyY2hpdmVzL2h0bWxfYW5kX2Nzcy9oaWRpbmctY29udGVudC1mb3ItYWNjZXNzaWJpbGl0eSAqL1xuXHRcdFx0ICBcdFx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdCAgICBoZWlnaHQ6IDFweDsgd2lkdGg6IDFweDtcblx0XHRcdFx0ICAgIG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdCAgICBjbGlwOiByZWN0KDFweCAxcHggMXB4IDFweCk7IC8qIElFNiwgSUU3ICovXG5cdFx0XHRcdCAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG5cdFx0ICBcdFx0fVxuXG5cdFx0ICBcdFx0QGtleWZyYW1lcyByZXNldCB7XG5cdFx0XHRcdFx0ICBmcm9tIHtjb2xvcjogI2ZkMTI2NTt9XG5cdFx0XHRcdFx0ICB0byB7Y29sb3I6ICNmZjU5OTQ7fVxuXHRcdFx0XHRcdH1cblxuXHRcdCAgXHRcdC5sZXR0ZXJfX2NoYXJhY3RlciB7XG5cdFx0ICBcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmZjhmO1xuXHRcdFx0XHRcdCAgYW5pbWF0aW9uLW5hbWU6IHJlc2V0O1xuXHRcdFx0XHRcdCAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XG5cblx0XHQgIFx0XHRcdGNvbG9yOiAjZmY1OTk0O1xuXHRcdCAgXHRcdFx0Zm9udC1mYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1xuXHRcdCAgXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdCAgXHRcdFx0dG9wOiAwO1xuXHRcdCAgXHRcdFx0bGVmdDogMDtcblx0XHQgIFx0XHRcdHJpZ2h0OiAwO1xuXHRcdCAgXHRcdFx0Ym90dG9tOiAwO1xuXHRcdCAgXHRcdFx0Zm9udC1zaXplOiA4MHZoO1xuXHRcdCAgXHRcdFx0bGluZS1oZWlnaHQ6IDgwdmg7XG5cdFx0ICBcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdCAgXHRgfTwvc3R5bGU+XG5cdFx0ICA8L2Rpdj5cblx0ICApXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGV0dGVyXG4iXX0= */\n/*@ sourceURL=/Users/smartzoukos/Projects/aaaooo/components/letter.jsx */",
        __self: this
      }));
    }
  }]);

  return Letter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Letter);

/***/ })

})
//# sourceMappingURL=index.js.e09331143bcf83a9272c.hot-update.js.map
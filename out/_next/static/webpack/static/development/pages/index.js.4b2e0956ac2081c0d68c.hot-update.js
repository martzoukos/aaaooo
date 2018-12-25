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
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "letter__input",
        key: this.key,
        className: "jsx-4149969638" + " " + "letter__character",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
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
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("audio", {
        src: "./static/alphabet/z.wav",
        controls: true,
        autoPlay: true,
        className: "jsx-4149969638",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4149969638",
        css: "@-webkit-keyframes reset-jsx-4149969638{from{color:#fd1265;}to{color:#ff5994;}}@keyframes reset-jsx-4149969638{from{color:#fd1265;}to{color:#ff5994;}}.letter__character.jsx-4149969638{background-color:#edff8f;-webkit-animation-name:reset-jsx-4149969638;animation-name:reset-jsx-4149969638;-webkit-animation-duration:.5s;animation-duration:.5s;color:#ff5994;font-family:\"Comic Sans MS\",cursive,sans-serif;position:absolute;top:0;left:0;right:0;bottom:0;font-size:80vh;line-height:80vh;text-align:center;}#letter__input.jsx-4149969638{position:absolute !important;height:1px;width:1px;overflow:hidden;-webkit-clip:rect(1px 1px 1px 1px);clip:rect(1px 1px 1px 1px);-webkit-clip:rect(1px,1px,1px,1px);clip:rect(1px,1px,1px,1px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFydHpvdWtvcy9Qcm9qZWN0cy9hYWFvb28vY29tcG9uZW50cy9sZXR0ZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEaUIsQUFHMkIsQUFDRixBQUlRLEFBaUJJLGNBdEJULEFBQ0YsV0FLRyxJQWlCVCxXQUFXLFVBQ04sZ0JBQ1csdUNBbEJMLHVCQW1CUSwrQkFqQmpCLGNBQ21DLGlCQWlCbEQsOEJBaEJtQixrQkFDWixNQUNDLE9BQ0MsUUFDQyxTQUNNLGVBQ0UsaUJBQ0Msa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9zbWFydHpvdWtvcy9Qcm9qZWN0cy9hYWFvb28vY29tcG9uZW50cy9sZXR0ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gYWxwaGFiZXQgc291bmRzOlxuLy8gaHR0cHM6Ly9mcmVlc291bmQub3JnL3NlYXJjaC8/cT1hbHBoYWJldCZmPWdyb3VwaW5nX3BhY2s6JTIyNDM3MV9UaGUlMjBBbHBoYWJldCUyMiUyMCZzPSUyMnNjb3JlJTIwZGVzYyUyMiZnPTEmYWR2YW5jZWQ9JmFfdGFnPSZhX2ZpbGVuYW1lPSZhX2Rlc2NyaXB0aW9uPSZhX3BhY2tuYW1lPSZhX3NvdW5kaWQ9JmFfdXNlcm5hbWU9XG4vLyBodHRwczovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL2RlcnN1cGVyYW50b24vc291bmRzLzQzNDczMC9cbi8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlYWN0LXNvdW5kXG5cbmNsYXNzIExldHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdCBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmtleSA9IDA7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICBcdGxldHRlclZhbHVlOiB0aGlzLnByb3BzLnZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUxldHRlclZhbHVlID0gKGV2ZW50KSA9PiB7XG4gIFx0aWYgKFxuICBcdFx0Ly8gaHR0cHM6Ly9rZXljb2RlLmluZm8vXG4gIFx0XHQvLyBUaGlzIHNlZW1pbmdseSByYW5kb20gbGlzdCBvZiBrZXlzIHJlcHJlc2VudGVzIGFscGhhbnVtZXJpYyBhbmQgc3BlY2lhbCBjaGFyYWN0ZXJzLiBcbiAgXHRcdChldmVudC5rZXlDb2RlID49IDQ4ICYmIGV2ZW50LmtleUNvZGUgPD0gOTApXG4gIFx0ICB8fCAoZXZlbnQua2V5Q29kZSA+PSA5NiAmJiBldmVudC5rZXlDb2RlIDw9IDExMSlcbiAgXHQgIHx8IChldmVudC5rZXlDb2RlID49IDE2MCAmJiBldmVudC5rZXlDb2RlIDw9IDE2NSlcbiAgXHQgIHx8IChldmVudC5rZXlDb2RlID49IDE4NiAmJiBldmVudC5rZXlDb2RlIDw9IDIyMykpXG4gIFx0e1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0ICBcdGxldHRlclZhbHVlOiBldmVudC5rZXlcblx0XHQgIH0pO1x0XG4gIFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdC8vIFJlcmVuZGVyIHRoZSBjb21wb25lbnQgdG8gcmVmaXJlIHRoZSBhbmltYXRpb24gb24gZWFjaCBrZXlzdHJva2UuXG5cdFx0Ly8gSSBrbm93LCB5dWsuXG4gICAgKyt0aGlzLmtleTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZXR0ZXJcIj5cblx0XHRcdFx0PGxhYmVsIFxuXHRcdFx0XHRcdGh0bWxGb3I9XCJsZXR0ZXJfX2lucHV0XCJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJsZXR0ZXJfX2NoYXJhY3RlclwiXG5cdFx0XHRcdFx0a2V5PXt0aGlzLmtleX0gPlxuXHRcdCAgXHRcdHt0aGlzLnN0YXRlLmxldHRlclZhbHVlfVxuXHRcdCAgXHQ8L2xhYmVsPlxuXHRcdCAgXHQ8aW5wdXQgXG5cdFx0ICBcdFx0YXV0b0ZvY3VzIFxuXHRcdCAgXHRcdHJlYWRPbmx5XG5cdFx0ICBcdFx0aWQ9XCJsZXR0ZXJfX2lucHV0XCIgXG5cdFx0ICBcdFx0b25LZXlEb3duPXt0aGlzLnVwZGF0ZUxldHRlclZhbHVlfSBcblx0XHQgIFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5sZXR0ZXJWYWx1ZX1cblx0XHQgIFx0XHQvPlxuXHRcdCAgXHQ8YXVkaW8gc3JjPVwiLi9zdGF0aWMvYWxwaGFiZXQvei53YXZcIiBjb250cm9scyBhdXRvUGxheS8+XG5cdFx0ICBcdDxzdHlsZSBqc3g+e2Bcblx0XHQgIFx0XHRAa2V5ZnJhbWVzIHJlc2V0IHtcblx0XHRcdFx0XHQgIGZyb20ge2NvbG9yOiAjZmQxMjY1O31cblx0XHRcdFx0XHQgIHRvIHtjb2xvcjogI2ZmNTk5NDt9XG5cdFx0XHRcdFx0fVxuXG5cdFx0ICBcdFx0LmxldHRlcl9fY2hhcmFjdGVyIHtcblx0XHQgIFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlZGZmOGY7XG5cdFx0XHRcdFx0ICBhbmltYXRpb24tbmFtZTogcmVzZXQ7XG5cdFx0XHRcdFx0ICBhbmltYXRpb24tZHVyYXRpb246IC41cztcblxuXHRcdCAgXHRcdFx0Y29sb3I6ICNmZjU5OTQ7XG5cdFx0ICBcdFx0XHRmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XG5cdFx0ICBcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0ICBcdFx0XHR0b3A6IDA7XG5cdFx0ICBcdFx0XHRsZWZ0OiAwO1xuXHRcdCAgXHRcdFx0cmlnaHQ6IDA7XG5cdFx0ICBcdFx0XHRib3R0b206IDA7XG5cdFx0ICBcdFx0XHRmb250LXNpemU6IDgwdmg7XG5cdFx0ICBcdFx0XHRsaW5lLWhlaWdodDogODB2aDtcblx0XHQgIFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQjbGV0dGVyX19pbnB1dCB7IC8qIGh0dHBzOi8vc25vb2suY2EvYXJjaGl2ZXMvaHRtbF9hbmRfY3NzL2hpZGluZy1jb250ZW50LWZvci1hY2Nlc3NpYmlsaXR5ICovXG5cdFx0XHQgIFx0XHRwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcblx0XHRcdFx0ICAgIGhlaWdodDogMXB4OyB3aWR0aDogMXB4O1xuXHRcdFx0XHQgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0ICAgIGNsaXA6IHJlY3QoMXB4IDFweCAxcHggMXB4KTsgLyogSUU2LCBJRTcgKi9cblx0XHRcdFx0ICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcblx0XHRcdFx0ICB9XG5cdFx0ICBcdGB9PC9zdHlsZT5cblx0XHQgIDwvZGl2PlxuXHQgIClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZXR0ZXJcbiJdfQ== */\n/*@ sourceURL=/Users/smartzoukos/Projects/aaaooo/components/letter.jsx */",
        __self: this
      }));
    }
  }]);

  return Letter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Letter);

/***/ })

})
//# sourceMappingURL=index.js.4b2e0956ac2081c0d68c.hot-update.js.map
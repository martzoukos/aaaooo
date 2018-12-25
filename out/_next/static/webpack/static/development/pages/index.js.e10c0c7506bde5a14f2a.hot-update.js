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
      // Rerender the component to refire the animation on each keystroke.
      // I know, yuk.
      ++this.key;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3819539186" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "letter__input",
        key: this.key,
        className: "jsx-3819539186" + " " + "letter__character",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, this.state.letterValue), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        autoFocus: true,
        readOnly: true,
        id: "letter__input",
        onKeyDown: this.updateLetterValue,
        value: this.state.letterValue,
        className: "jsx-3819539186" + " " + "visuallyhidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("audio", {
        src: this.state.soundFile,
        autoPlay: true,
        className: "jsx-3819539186",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3819539186",
        css: ".visuallyhidden.jsx-3819539186{position:absolute !important;height:1px;width:1px;overflow:hidden;-webkit-clip:rect(1px 1px 1px 1px);clip:rect(1px 1px 1px 1px);-webkit-clip:rect(1px,1px,1px,1px);clip:rect(1px,1px,1px,1px);}@-webkit-keyframes reset-jsx-3819539186{from{color:#fd1265;}to{color:#ff5994;}}@keyframes reset-jsx-3819539186{from{color:#fd1265;}to{color:#ff5994;}}.letter__character.jsx-3819539186{background-color:#edff8f;-webkit-animation-name:reset-jsx-3819539186;animation-name:reset-jsx-3819539186;-webkit-animation-duration:.5s;animation-duration:.5s;color:#ff5994;font-family:\"Comic Sans MS\",cursive,sans-serif;position:absolute;top:0;left:0;right:0;bottom:0;font-size:80vh;line-height:80vh;text-align:center;}#letter__input.jsx-3819539186{position:absolute !important;height:1px;width:1px;overflow:hidden;-webkit-clip:rect(1px 1px 1px 1px);clip:rect(1px 1px 1px 1px);-webkit-clip:rect(1px,1px,1px,1px);clip:rect(1px,1px,1px,1px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFydHpvdWtvcy9Qcm9qZWN0cy9hYWFvb28vY29tcG9uZW50cy9sZXR0ZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDaUIsQUFJcUMsQUFRVixBQUNGLEFBSVEsQUFpQkksY0F0QlQsQUFDRixXQUtHLElBYlQsQUE4QkEsV0E5QlcsQUE4QkEsVUE3Qk4sQUE4QkEsZ0JBN0JXLEFBOEJBLHVDQWxCTCx1QkFYUSxBQThCQSwrQkFqQmpCLGNBQ21DLGlCQWJsRCxBQThCQSw4QkFoQm1CLGtCQUNaLE1BQ0MsT0FDQyxRQUNDLFNBQ00sZUFDRSxpQkFDQyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3NtYXJ0em91a29zL1Byb2plY3RzL2FhYW9vby9jb21wb25lbnRzL2xldHRlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBMZXR0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHQgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5rZXkgPSAwO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgXHRsZXR0ZXJWYWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcbiAgICBcdHNvdW5kRmlsZTogYC4vc3RhdGljL2FscGhhYmV0LyR7dGhpcy5wcm9wcy52YWx1ZX0ud2F2YFxuICAgIH07XG4gIH1cblxuICB1cGRhdGVMZXR0ZXJWYWx1ZSA9IChldmVudCkgPT4ge1xuICBcdGlmIChcbiAgXHRcdC8vIGh0dHBzOi8va2V5Y29kZS5pbmZvL1xuICBcdFx0Ly8gVGhpcyBzZWVtaW5nbHkgcmFuZG9tIGxpc3Qgb2Yga2V5cyByZXByZXNlbnRlcyBhbHBoYW51bWVyaWMgYW5kIHNwZWNpYWwgY2hhcmFjdGVycy4gXG4gIFx0XHQoZXZlbnQua2V5Q29kZSA+PSA0OCAmJiBldmVudC5rZXlDb2RlIDw9IDkwKVxuICBcdCAgfHwgKGV2ZW50LmtleUNvZGUgPj0gOTYgJiYgZXZlbnQua2V5Q29kZSA8PSAxMTEpXG4gIFx0ICB8fCAoZXZlbnQua2V5Q29kZSA+PSAxNjAgJiYgZXZlbnQua2V5Q29kZSA8PSAxNjUpXG4gIFx0ICB8fCAoZXZlbnQua2V5Q29kZSA+PSAxODYgJiYgZXZlbnQua2V5Q29kZSA8PSAyMjMpKVxuICBcdHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdCAgXHRsZXR0ZXJWYWx1ZTogZXZlbnQua2V5LFxuXHRcdCAgXHRzb3VuZEZpbGU6IGAuL3N0YXRpYy9hbHBoYWJldC8ke2V2ZW50LmtleX0ud2F2YFxuXHRcdCAgfSk7XHRcbiAgXHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Ly8gUmVyZW5kZXIgdGhlIGNvbXBvbmVudCB0byByZWZpcmUgdGhlIGFuaW1hdGlvbiBvbiBlYWNoIGtleXN0cm9rZS5cblx0XHQvLyBJIGtub3csIHl1ay5cbiAgICArK3RoaXMua2V5O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxldHRlclwiPlxuXHRcdFx0XHQ8bGFiZWwgXG5cdFx0XHRcdFx0aHRtbEZvcj1cImxldHRlcl9faW5wdXRcIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImxldHRlcl9fY2hhcmFjdGVyXCJcblx0XHRcdFx0XHRrZXk9e3RoaXMua2V5fSA+XG5cdFx0ICBcdFx0e3RoaXMuc3RhdGUubGV0dGVyVmFsdWV9XG5cdFx0ICBcdDwvbGFiZWw+XG5cdFx0ICBcdDxpbnB1dCBcblx0XHQgIFx0XHRhdXRvRm9jdXMgXG5cdFx0ICBcdFx0cmVhZE9ubHlcblx0XHQgIFx0XHRpZD1cImxldHRlcl9faW5wdXRcIiBcblx0XHQgIFx0XHRjbGFzc05hbWU9XCJ2aXN1YWxseWhpZGRlblwiXG5cdFx0ICBcdFx0b25LZXlEb3duPXt0aGlzLnVwZGF0ZUxldHRlclZhbHVlfSBcblx0XHQgIFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5sZXR0ZXJWYWx1ZX1cblx0XHQgIFx0XHQvPlxuXHRcdCAgXHQ8YXVkaW8gc3JjPXt0aGlzLnN0YXRlLnNvdW5kRmlsZX0gYXV0b1BsYXkvPlxuXHRcdCAgXHQ8c3R5bGUganN4PntgXG5cdFx0ICBcdFx0LnZpc3VhbGx5aGlkZGVuIHtcblx0XHRcdFx0XHRcdC8qIGh0dHBzOi8vc25vb2suY2EvYXJjaGl2ZXMvaHRtbF9hbmRfY3NzL2hpZGluZy1jb250ZW50LWZvci1hY2Nlc3NpYmlsaXR5ICovXG5cdFx0XHQgIFx0XHRwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcblx0XHRcdFx0ICAgIGhlaWdodDogMXB4OyB3aWR0aDogMXB4O1xuXHRcdFx0XHQgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0ICAgIGNsaXA6IHJlY3QoMXB4IDFweCAxcHggMXB4KTsgLyogSUU2LCBJRTcgKi9cblx0XHRcdFx0ICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcblx0XHQgIFx0XHR9XG5cblx0XHQgIFx0XHRAa2V5ZnJhbWVzIHJlc2V0IHtcblx0XHRcdFx0XHQgIGZyb20ge2NvbG9yOiAjZmQxMjY1O31cblx0XHRcdFx0XHQgIHRvIHtjb2xvcjogI2ZmNTk5NDt9XG5cdFx0XHRcdFx0fVxuXG5cdFx0ICBcdFx0LmxldHRlcl9fY2hhcmFjdGVyIHtcblx0XHQgIFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlZGZmOGY7XG5cdFx0XHRcdFx0ICBhbmltYXRpb24tbmFtZTogcmVzZXQ7XG5cdFx0XHRcdFx0ICBhbmltYXRpb24tZHVyYXRpb246IC41cztcblxuXHRcdCAgXHRcdFx0Y29sb3I6ICNmZjU5OTQ7XG5cdFx0ICBcdFx0XHRmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XG5cdFx0ICBcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0ICBcdFx0XHR0b3A6IDA7XG5cdFx0ICBcdFx0XHRsZWZ0OiAwO1xuXHRcdCAgXHRcdFx0cmlnaHQ6IDA7XG5cdFx0ICBcdFx0XHRib3R0b206IDA7XG5cdFx0ICBcdFx0XHRmb250LXNpemU6IDgwdmg7XG5cdFx0ICBcdFx0XHRsaW5lLWhlaWdodDogODB2aDtcblx0XHQgIFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQjbGV0dGVyX19pbnB1dCB7IC8qIGh0dHBzOi8vc25vb2suY2EvYXJjaGl2ZXMvaHRtbF9hbmRfY3NzL2hpZGluZy1jb250ZW50LWZvci1hY2Nlc3NpYmlsaXR5ICovXG5cdFx0XHQgIFx0XHRwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcblx0XHRcdFx0ICAgIGhlaWdodDogMXB4OyB3aWR0aDogMXB4O1xuXHRcdFx0XHQgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0ICAgIGNsaXA6IHJlY3QoMXB4IDFweCAxcHggMXB4KTsgLyogSUU2LCBJRTcgKi9cblx0XHRcdFx0ICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcblx0XHRcdFx0ICB9XG5cdFx0ICBcdGB9PC9zdHlsZT5cblx0XHQgIDwvZGl2PlxuXHQgIClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZXR0ZXJcbiJdfQ== */\n/*@ sourceURL=/Users/smartzoukos/Projects/aaaooo/components/letter.jsx */",
        __self: this
      }));
    }
  }]);

  return Letter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Letter);

/***/ })

})
//# sourceMappingURL=index.js.e10c0c7506bde5a14f2a.hot-update.js.map
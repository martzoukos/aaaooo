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
var Sound = __webpack_require__(/*! react-sound */ "./node_modules/react-sound/lib/index.js").default;

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
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "letter__input",
        key: this.key,
        className: "jsx-4149969638" + " " + "letter__character",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
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
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4149969638",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("audio", {
        ref: "audio_tag",
        src: "./static/alphabet.wav",
        controls: true,
        autoPlay: true,
        className: "jsx-4149969638",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4149969638",
        css: "@-webkit-keyframes reset-jsx-4149969638{from{color:#fd1265;}to{color:#ff5994;}}@keyframes reset-jsx-4149969638{from{color:#fd1265;}to{color:#ff5994;}}.letter__character.jsx-4149969638{background-color:#edff8f;-webkit-animation-name:reset-jsx-4149969638;animation-name:reset-jsx-4149969638;-webkit-animation-duration:.5s;animation-duration:.5s;color:#ff5994;font-family:\"Comic Sans MS\",cursive,sans-serif;position:absolute;top:0;left:0;right:0;bottom:0;font-size:80vh;line-height:80vh;text-align:center;}#letter__input.jsx-4149969638{position:absolute !important;height:1px;width:1px;overflow:hidden;-webkit-clip:rect(1px 1px 1px 1px);clip:rect(1px 1px 1px 1px);-webkit-clip:rect(1px,1px,1px,1px);clip:rect(1px,1px,1px,1px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFydHpvdWtvcy9Qcm9qZWN0cy9hYWFvb28vY29tcG9uZW50cy9sZXR0ZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEaUIsQUFHMkIsQUFDRixBQUlRLEFBaUJJLGNBdEJULEFBQ0YsV0FLRyxJQWlCVCxXQUFXLFVBQ04sZ0JBQ1csdUNBbEJMLHVCQW1CUSwrQkFqQmpCLGNBQ21DLGlCQWlCbEQsOEJBaEJtQixrQkFDWixNQUNDLE9BQ0MsUUFDQyxTQUNNLGVBQ0UsaUJBQ0Msa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9zbWFydHpvdWtvcy9Qcm9qZWN0cy9hYWFvb28vY29tcG9uZW50cy9sZXR0ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gYWxwaGFiZXQgc291bmRzOlxuLy8gaHR0cHM6Ly9mcmVlc291bmQub3JnL3NlYXJjaC8/cT1hbHBoYWJldCZmPWdyb3VwaW5nX3BhY2s6JTIyNDM3MV9UaGUlMjBBbHBoYWJldCUyMiUyMCZzPSUyMnNjb3JlJTIwZGVzYyUyMiZnPTEmYWR2YW5jZWQ9JmFfdGFnPSZhX2ZpbGVuYW1lPSZhX2Rlc2NyaXB0aW9uPSZhX3BhY2tuYW1lPSZhX3NvdW5kaWQ9JmFfdXNlcm5hbWU9XG4vLyBodHRwczovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL2RlcnN1cGVyYW50b24vc291bmRzLzQzNDczMC9cbi8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlYWN0LXNvdW5kXG5cbmNvbnN0IFNvdW5kID0gcmVxdWlyZSgncmVhY3Qtc291bmQnKS5kZWZhdWx0O1xuXG5jbGFzcyBMZXR0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHQgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5rZXkgPSAwO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgXHRsZXR0ZXJWYWx1ZTogdGhpcy5wcm9wcy52YWx1ZVxuICAgIH07XG4gIH1cblxuICB1cGRhdGVMZXR0ZXJWYWx1ZSA9IChldmVudCkgPT4ge1xuICBcdGlmIChcbiAgXHRcdC8vIGh0dHBzOi8va2V5Y29kZS5pbmZvL1xuICBcdFx0Ly8gVGhpcyBzZWVtaW5nbHkgcmFuZG9tIGxpc3Qgb2Yga2V5cyByZXByZXNlbnRlcyBhbHBoYW51bWVyaWMgYW5kIHNwZWNpYWwgY2hhcmFjdGVycy4gXG4gIFx0XHQoZXZlbnQua2V5Q29kZSA+PSA0OCAmJiBldmVudC5rZXlDb2RlIDw9IDkwKVxuICBcdCAgfHwgKGV2ZW50LmtleUNvZGUgPj0gOTYgJiYgZXZlbnQua2V5Q29kZSA8PSAxMTEpXG4gIFx0ICB8fCAoZXZlbnQua2V5Q29kZSA+PSAxNjAgJiYgZXZlbnQua2V5Q29kZSA8PSAxNjUpXG4gIFx0ICB8fCAoZXZlbnQua2V5Q29kZSA+PSAxODYgJiYgZXZlbnQua2V5Q29kZSA8PSAyMjMpKVxuICBcdHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdCAgXHRsZXR0ZXJWYWx1ZTogZXZlbnQua2V5XG5cdFx0ICB9KTtcdFxuICBcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHQvLyBSZXJlbmRlciB0aGUgY29tcG9uZW50IHRvIHJlZmlyZSB0aGUgYW5pbWF0aW9uIG9uIGVhY2gga2V5c3Ryb2tlLlxuXHRcdC8vIEkga25vdywgeXVrLlxuICAgICsrdGhpcy5rZXk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCI+XG5cdFx0XHRcdDxsYWJlbCBcblx0XHRcdFx0XHRodG1sRm9yPVwibGV0dGVyX19pbnB1dFwiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibGV0dGVyX19jaGFyYWN0ZXJcIlxuXHRcdFx0XHRcdGtleT17dGhpcy5rZXl9ID5cblx0XHQgIFx0XHR7dGhpcy5zdGF0ZS5sZXR0ZXJWYWx1ZX1cblx0XHQgIFx0PC9sYWJlbD5cblx0XHQgIFx0PGlucHV0IFxuXHRcdCAgXHRcdGF1dG9Gb2N1cyBcblx0XHQgIFx0XHRyZWFkT25seVxuXHRcdCAgXHRcdGlkPVwibGV0dGVyX19pbnB1dFwiIFxuXHRcdCAgXHRcdG9uS2V5RG93bj17dGhpcy51cGRhdGVMZXR0ZXJWYWx1ZX0gXG5cdFx0ICBcdFx0dmFsdWU9e3RoaXMuc3RhdGUubGV0dGVyVmFsdWV9XG5cdFx0ICBcdFx0Lz5cblx0XHQgIFx0PGRpdj5cblx0XHRcdFx0XHQ8YXVkaW8gcmVmPVwiYXVkaW9fdGFnXCIgc3JjPVwiLi9zdGF0aWMvYWxwaGFiZXQud2F2XCIgY29udHJvbHMgYXV0b1BsYXkvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdCAgXHQ8c3R5bGUganN4PntgXG5cdFx0ICBcdFx0QGtleWZyYW1lcyByZXNldCB7XG5cdFx0XHRcdFx0ICBmcm9tIHtjb2xvcjogI2ZkMTI2NTt9XG5cdFx0XHRcdFx0ICB0byB7Y29sb3I6ICNmZjU5OTQ7fVxuXHRcdFx0XHRcdH1cblxuXHRcdCAgXHRcdC5sZXR0ZXJfX2NoYXJhY3RlciB7XG5cdFx0ICBcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmZjhmO1xuXHRcdFx0XHRcdCAgYW5pbWF0aW9uLW5hbWU6IHJlc2V0O1xuXHRcdFx0XHRcdCAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XG5cblx0XHQgIFx0XHRcdGNvbG9yOiAjZmY1OTk0O1xuXHRcdCAgXHRcdFx0Zm9udC1mYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1xuXHRcdCAgXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdCAgXHRcdFx0dG9wOiAwO1xuXHRcdCAgXHRcdFx0bGVmdDogMDtcblx0XHQgIFx0XHRcdHJpZ2h0OiAwO1xuXHRcdCAgXHRcdFx0Ym90dG9tOiAwO1xuXHRcdCAgXHRcdFx0Zm9udC1zaXplOiA4MHZoO1xuXHRcdCAgXHRcdFx0bGluZS1oZWlnaHQ6IDgwdmg7XG5cdFx0ICBcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0I2xldHRlcl9faW5wdXQgeyAvKiBodHRwczovL3Nub29rLmNhL2FyY2hpdmVzL2h0bWxfYW5kX2Nzcy9oaWRpbmctY29udGVudC1mb3ItYWNjZXNzaWJpbGl0eSAqL1xuXHRcdFx0ICBcdFx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdCAgICBoZWlnaHQ6IDFweDsgd2lkdGg6IDFweDtcblx0XHRcdFx0ICAgIG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdCAgICBjbGlwOiByZWN0KDFweCAxcHggMXB4IDFweCk7IC8qIElFNiwgSUU3ICovXG5cdFx0XHRcdCAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG5cdFx0XHRcdCAgfVxuXHRcdCAgXHRgfTwvc3R5bGU+XG5cdFx0ICA8L2Rpdj5cblx0ICApXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGV0dGVyXG4iXX0= */\n/*@ sourceURL=/Users/smartzoukos/Projects/aaaooo/components/letter.jsx */",
        __self: this
      }));
    }
  }]);

  return Letter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Letter);

/***/ })

})
//# sourceMappingURL=index.js.bffb32c0c38b7d472d76.hot-update.js.map
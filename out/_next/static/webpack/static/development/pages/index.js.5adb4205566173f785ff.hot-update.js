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
      // Rerender the Letter component to refire the animation on each keystroke.
      // I know, yuk.
      ++this.key;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3971907304" + " " + "letter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "letter__input",
        key: this.key,
        className: "jsx-3971907304" + " " + "letter__character",
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
        className: "jsx-3971907304" + " " + "visuallyhidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), this.props.audioIsAllowed ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("audio", {
        src: this.state.soundFile,
        autoPlay: true,
        className: "jsx-3971907304",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }) : false, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3971907304",
        css: ".visuallyhidden.jsx-3971907304{position:absolute !important;height:1px;width:1px;overflow:hidden;-webkit-clip:rect(1px 1px 1px 1px);clip:rect(1px 1px 1px 1px);-webkit-clip:rect(1px,1px,1px,1px);clip:rect(1px,1px,1px,1px);}@-webkit-keyframes reset-jsx-3971907304{from{color:#fd1265;}to{color:#ff5994;}}@keyframes reset-jsx-3971907304{from{color:#fd1265;}to{color:#ff5994;}}.letter__character.jsx-3971907304{-webkit-animation-name:reset-jsx-3971907304;animation-name:reset-jsx-3971907304;-webkit-animation-duration:.5s;animation-duration:.5s;position:absolute;top:0;left:0;right:0;bottom:0;font-size:80vh;line-height:80vh;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFydHpvdWtvcy9Qcm9qZWN0cy9hYWFvb28vY29tcG9uZW50cy9sZXR0ZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1EaUIsQUFJcUMsQUFRVixBQUNGLEFBSUksY0FMRCxBQUNGLGVBUk4sV0FBVyxVQUNOLGdCQUNXLGNBV0wsZ0RBVlEsTUFZYixrQkFDWixNQUNDLE9BQ0MsUUFDQyxTQUNNLFFBaEJoQixPQWlCa0IsaUJBQ0Msa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9zbWFydHpvdWtvcy9Qcm9qZWN0cy9hYWFvb28vY29tcG9uZW50cy9sZXR0ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTGV0dGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0IGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMua2V5ID0gMDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIFx0bGV0dGVyVmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXG4gICAgXHRzb3VuZEZpbGU6IGAuL3N0YXRpYy9hbHBoYWJldC8ke3RoaXMucHJvcHMudmFsdWV9LndhdmBcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlTGV0dGVyVmFsdWUgPSAoZXZlbnQpID0+IHtcbiAgXHRpZiAoXG4gIFx0XHQvLyBodHRwczovL2tleWNvZGUuaW5mby9cbiAgXHRcdC8vIFRoaXMgc2VlbWluZ2x5IHJhbmRvbSBsaXN0IG9mIGtleXMgcmVwcmVzZW50ZXMgYWxwaGFudW1lcmljIGFuZCBzcGVjaWFsIGNoYXJhY3RlcnMuIFxuICBcdFx0KGV2ZW50LmtleUNvZGUgPj0gNDggJiYgZXZlbnQua2V5Q29kZSA8PSA5MClcbiAgXHQgIHx8IChldmVudC5rZXlDb2RlID49IDk2ICYmIGV2ZW50LmtleUNvZGUgPD0gMTExKVxuICBcdCAgfHwgKGV2ZW50LmtleUNvZGUgPj0gMTYwICYmIGV2ZW50LmtleUNvZGUgPD0gMTY1KVxuICBcdCAgfHwgKGV2ZW50LmtleUNvZGUgPj0gMTg2ICYmIGV2ZW50LmtleUNvZGUgPD0gMjIzKSlcbiAgXHR7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHQgIFx0bGV0dGVyVmFsdWU6IGV2ZW50LmtleSxcblx0XHQgIFx0c291bmRGaWxlOiBgLi9zdGF0aWMvYWxwaGFiZXQvJHtldmVudC5rZXl9LndhdmBcblx0XHQgIH0pO1x0XG4gIFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdC8vIFJlcmVuZGVyIHRoZSBMZXR0ZXIgY29tcG9uZW50IHRvIHJlZmlyZSB0aGUgYW5pbWF0aW9uIG9uIGVhY2gga2V5c3Ryb2tlLlxuXHRcdC8vIEkga25vdywgeXVrLlxuXHRcdCsrdGhpcy5rZXk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyXCI+XG5cdFx0XHRcdDxsYWJlbCBcblx0XHRcdFx0XHRodG1sRm9yPVwibGV0dGVyX19pbnB1dFwiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibGV0dGVyX19jaGFyYWN0ZXJcIiBcblx0XHQgIFx0XHRrZXk9e3RoaXMua2V5fSA+XG5cdFx0ICBcdFx0e3RoaXMuc3RhdGUubGV0dGVyVmFsdWV9XG5cdFx0ICBcdDwvbGFiZWw+XG5cdFx0ICBcdDxpbnB1dCBcblx0XHQgIFx0XHRhdXRvRm9jdXMgXG5cdFx0ICBcdFx0cmVhZE9ubHlcblx0XHQgIFx0XHRpZD1cImxldHRlcl9faW5wdXRcIiBcblx0XHQgIFx0XHRjbGFzc05hbWU9XCJ2aXN1YWxseWhpZGRlblwiXG5cdFx0ICBcdFx0b25LZXlEb3duPXt0aGlzLnVwZGF0ZUxldHRlclZhbHVlfSBcblx0XHQgIFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5sZXR0ZXJWYWx1ZX1cblx0XHQgIFx0XHQvPlxuXHRcdCAgXHR7dGhpcy5wcm9wcy5hdWRpb0lzQWxsb3dlZCA/IChcblx0XHQgIFx0XHQ8YXVkaW8gc3JjPXt0aGlzLnN0YXRlLnNvdW5kRmlsZX0gYXV0b1BsYXkvPlxuXHRcdCAgXHQpIDogKFxuXHRcdCAgXHRcdGZhbHNlXG5cdFx0ICBcdCl9XG5cdFx0ICBcdDxzdHlsZSBqc3g+e2Bcblx0XHQgIFx0XHQudmlzdWFsbHloaWRkZW4ge1xuXHRcdFx0XHRcdFx0LyogaHR0cHM6Ly9zbm9vay5jYS9hcmNoaXZlcy9odG1sX2FuZF9jc3MvaGlkaW5nLWNvbnRlbnQtZm9yLWFjY2Vzc2liaWxpdHkgKi9cblx0XHRcdCAgXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuXHRcdFx0XHQgICAgaGVpZ2h0OiAxcHg7IHdpZHRoOiAxcHg7XG5cdFx0XHRcdCAgICBvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHQgICAgY2xpcDogcmVjdCgxcHggMXB4IDFweCAxcHgpOyAvKiBJRTYsIElFNyAqL1xuXHRcdFx0XHQgICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuXHRcdCAgXHRcdH1cblxuXHRcdCAgXHRcdEBrZXlmcmFtZXMgcmVzZXQge1xuXHRcdFx0XHRcdCAgZnJvbSB7Y29sb3I6ICNmZDEyNjU7fVxuXHRcdFx0XHRcdCAgdG8ge2NvbG9yOiAjZmY1OTk0O31cblx0XHRcdFx0XHR9XG5cblx0XHQgIFx0XHQubGV0dGVyX19jaGFyYWN0ZXIge1xuXHRcdFx0XHRcdCAgYW5pbWF0aW9uLW5hbWU6IHJlc2V0O1xuXHRcdFx0XHRcdCAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XG5cblx0XHQgIFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHQgIFx0XHRcdHRvcDogMDtcblx0XHQgIFx0XHRcdGxlZnQ6IDA7XG5cdFx0ICBcdFx0XHRyaWdodDogMDtcblx0XHQgIFx0XHRcdGJvdHRvbTogMDtcblx0XHQgIFx0XHRcdGZvbnQtc2l6ZTogODB2aDtcblx0XHQgIFx0XHRcdGxpbmUtaGVpZ2h0OiA4MHZoO1xuXHRcdCAgXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHQgIFx0YH08L3N0eWxlPlxuXHRcdCAgPC9kaXY+XG5cdCAgKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExldHRlclxuIl19 */\n/*@ sourceURL=/Users/smartzoukos/Projects/aaaooo/components/letter.jsx */",
        __self: this
      }));
    }
  }]);

  return Letter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Letter);

/***/ })

})
//# sourceMappingURL=index.js.5adb4205566173f785ff.hot-update.js.map
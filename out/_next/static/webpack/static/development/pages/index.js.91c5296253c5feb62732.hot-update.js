webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_letter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/letter */ "./components/letter.jsx");
var _jsxFileName = "/Users/smartzoukos/Projects/aaaooo/pages/index.jsx";



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



var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleAudio", function (event) {
      _this.setState({
        audioState: event.target.checked
      });
    });

    _this.state = {
      audioState: true
    };
    return _this;
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2976315853" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_letter__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: "\u2022",
        audioIsAllowed: this.state.audioState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2976315853" + " " + "audio-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        id: "toggle-audio",
        type: "checkbox",
        defaultChecked: this.state.audioState,
        onChange: this.toggleAudio,
        className: "jsx-2976315853",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "toggle-audio",
        className: "jsx-2976315853",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Play audio")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
        class: "footer",
        className: "jsx-2976315853",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Created by @martzoukos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2976315853",
        css: ".container.jsx-2976315853{font-family:\"Comic Sans MS\",cursive,sans-serif;color:#ff5994;}.footer.jsx-2976315853{position:absolute: bottom:0;right:0;}.audio-control.jsx-2976315853{position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFydHpvdWtvcy9Qcm9qZWN0cy9hYWFvb28vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCaUIsQUFHeUQsQUFNeEMsQUFLUSxrQkFDbkIsVUFMVSxRQUNULFdBUGUsY0FDZiIsImZpbGUiOiIvVXNlcnMvc21hcnR6b3Vrb3MvUHJvamVjdHMvYWFhb29vL3BhZ2VzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMZXR0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sZXR0ZXInO1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICBcdGF1ZGlvU3RhdGU6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgdG9nZ2xlQXVkaW8gPSAoZXZlbnQpID0+IHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcblx0ICBcdGF1ZGlvU3RhdGU6IGV2ZW50LnRhcmdldC5jaGVja2VkXG5cdCAgfSk7XG4gIH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0ICBcdDxMZXR0ZXIgXG5cdFx0ICBcdFx0dmFsdWU9XCLigKJcIlxuXHRcdCAgXHRcdGF1ZGlvSXNBbGxvd2VkPXt0aGlzLnN0YXRlLmF1ZGlvU3RhdGV9Lz5cblx0XHQgIFx0PGRpdiBjbGFzc05hbWU9XCJhdWRpby1jb250cm9sXCI+XG5cdFx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHRcdFx0aWQ9XCJ0b2dnbGUtYXVkaW9cIlxuXHRcdFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcblx0XHRcdFx0XHRcdGRlZmF1bHRDaGVja2VkPXt0aGlzLnN0YXRlLmF1ZGlvU3RhdGV9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy50b2dnbGVBdWRpb30gIC8+XG5cdFx0XHQgIFx0PGxhYmVsIGh0bWxGb3I9XCJ0b2dnbGUtYXVkaW9cIj5QbGF5IGF1ZGlvPC9sYWJlbD5cblx0XHRcdCAgPC9kaXY+XG5cdFx0XHQgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5DcmVhdGVkIGJ5IEBtYXJ0em91a29zPC9mb290ZXI+XG5cdFx0XHQgIDxzdHlsZSBqc3g+e2Bcblx0XHRcdCAgXHQuY29udGFpbmVyIHtcblx0XHQgIFx0XHRcdGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcblx0XHQgIFx0XHRcdGNvbG9yOiAjZmY1OTk0O1xuXHRcdFx0ICBcdH1cblxuXHRcdFx0ICBcdC5mb290ZXIge1xuXHRcdFx0ICBcdFx0cG9zaXRpb246IGFic29sdXRlOlxuXHRcdFx0ICBcdFx0Ym90dG9tOiAwO1xuXHRcdFx0ICBcdFx0cmlnaHQ6IDA7XG5cdFx0XHQgIFx0fVxuXG5cdFx0XHRcdFx0LmF1ZGlvLWNvbnRyb2wge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdCAgPC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VcbiJdfQ== */\n/*@ sourceURL=/Users/smartzoukos/Projects/aaaooo/pages/index.jsx */",
        __self: this
      }));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Page);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.91c5296253c5feb62732.hot-update.js.map
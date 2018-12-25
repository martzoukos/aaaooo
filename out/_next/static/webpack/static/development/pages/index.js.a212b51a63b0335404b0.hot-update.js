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

    _this.key = 0;
    _this.state = {
      audioState: true
    };
    return _this;
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      // Rerender the Letter component to refire the animation on each keystroke.
      // I know, yuk.
      ++this.key;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2780817717",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_letter__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: "\u2022",
        key: this.key,
        audioIsAllowed: this.state.audioState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2780817717" + " " + "audio-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        id: "toggle-audio",
        type: "checkbox",
        defaultChecked: this.state.audioState,
        onChange: this.toggleAudio,
        className: "jsx-2780817717",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "toggle-audio",
        className: "jsx-2780817717",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Audio is on")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2780817717",
        css: ".audio-control.jsx-2780817717{position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFydHpvdWtvcy9Qcm9qZWN0cy9hYWFvb28vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DaUIsQUFHeUIsa0JBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9zbWFydHpvdWtvcy9Qcm9qZWN0cy9hYWFvb28vcGFnZXMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExldHRlciBmcm9tICcuLi9jb21wb25lbnRzL2xldHRlcic7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmtleSA9IDA7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICBcdGF1ZGlvU3RhdGU6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgdG9nZ2xlQXVkaW8gPSAoZXZlbnQpID0+IHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcblx0ICBcdGF1ZGlvU3RhdGU6IGV2ZW50LnRhcmdldC5jaGVja2VkXG5cdCAgfSk7XG4gIH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Ly8gUmVyZW5kZXIgdGhlIExldHRlciBjb21wb25lbnQgdG8gcmVmaXJlIHRoZSBhbmltYXRpb24gb24gZWFjaCBrZXlzdHJva2UuXG5cdFx0Ly8gSSBrbm93LCB5dWsuXG5cdFx0Kyt0aGlzLmtleTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHQgIFx0PExldHRlciBcblx0XHQgIFx0XHR2YWx1ZT1cIuKAolwiXG5cdFx0ICBcdFx0a2V5PXt0aGlzLmtleX0gXG5cdFx0ICBcdFx0YXVkaW9Jc0FsbG93ZWQ9e3RoaXMuc3RhdGUuYXVkaW9TdGF0ZX0vPlxuXHRcdCAgXHQ8ZGl2IGNsYXNzTmFtZT1cImF1ZGlvLWNvbnRyb2xcIj5cblx0XHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0XHRpZD1cInRvZ2dsZS1hdWRpb1wiXG5cdFx0XHRcdFx0XHR0eXBlPVwiY2hlY2tib3hcIlxuXHRcdFx0XHRcdFx0ZGVmYXVsdENoZWNrZWQ9e3RoaXMuc3RhdGUuYXVkaW9TdGF0ZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZUF1ZGlvfSAgLz5cblx0XHRcdCAgXHQ8bGFiZWwgaHRtbEZvcj1cInRvZ2dsZS1hdWRpb1wiPkF1ZGlvIGlzIG9uPC9sYWJlbD5cblx0XHRcdCAgPC9kaXY+XG5cdFx0XHQgIDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuYXVkaW8tY29udHJvbCB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0ICA8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuIl19 */\n/*@ sourceURL=/Users/smartzoukos/Projects/aaaooo/pages/index.jsx */",
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
//# sourceMappingURL=index.js.a212b51a63b0335404b0.hot-update.js.map
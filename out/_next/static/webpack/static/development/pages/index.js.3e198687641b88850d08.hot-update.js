webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/lib/router */ "./node_modules/next/dist/lib/router/index.js")


/***/ }),

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_letter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/letter */ "./components/letter.jsx");
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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props)); // this.bgColor = "#ff5994";

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleAudio", function (event) {
      _this.setState({
        audioState: event.target.checked
      });
    });

    _this.bgColor = props.router.query.bgColor;
    _this.textColor = "#ff5994";
    _this.fontFamily = '"Comic Sans MS", cursive, sans-serif';
    _this.state = {
      audioState: true
    };
    return _this;
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2148694094" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_letter__WEBPACK_IMPORTED_MODULE_3__["default"], {
        value: "\u2022",
        audioIsAllowed: this.state.audioState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2148694094" + " " + "audio-control",
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
        className: "jsx-2148694094",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "toggle-audio",
        className: "jsx-2148694094",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Play audio")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
        className: "jsx-2148694094" + " " + "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Created by ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://twitter.com/martzoukos",
        className: "jsx-2148694094",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "@martzoukos")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2148694094",
        css: ".container.jsx-2148694094{position:absolute;top:0;left:0;right:0;bottom:0;font-family:".concat(this.fontFamily, ";color:").concat(this.textColor, ";}a.jsx-2148694094:link,a.jsx-2148694094:visited{color:").concat(this.textColor, ";}a.jsx-2148694094:hover,a.jsx-2148694094:focus{background-color:").concat(this.bgColor, ";color:#edff8f;}.footer.jsx-2148694094{padding:.5em;position:absolute;bottom:0;right:0;}.audio-control.jsx-2148694094{padding:.5em;position:absolute;top:0;left:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFydHpvdWtvcy9Qcm9qZWN0cy9hYWFvb28vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDaUIsQUFHMEIsQUFXaUIsQUFJVyxBQUtqQyxBQU9BLGFBTkssQUFPRCxLQTNCWCxNQUNDLE9BQ0MsQUFtQkMsQUFPSCxJQWpCUCxFQWtCUSxFQTFCRSxDQW1CRCxJQVFWLEVBZmdCLEVBWDJCLEFBbUIxQyxZQVBBLDZCQVhvQyxtQ0FDcEMiLCJmaWxlIjoiL1VzZXJzL3NtYXJ0em91a29zL1Byb2plY3RzL2FhYW9vby9wYWdlcy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExldHRlciBmcm9tICcuLi9jb21wb25lbnRzL2xldHRlcic7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvLyB0aGlzLmJnQ29sb3IgPSBcIiNmZjU5OTRcIjtcbiAgICB0aGlzLmJnQ29sb3IgPSBwcm9wcy5yb3V0ZXIucXVlcnkuYmdDb2xvcjtcbiAgICB0aGlzLnRleHRDb2xvciA9IFwiI2ZmNTk5NFwiO1xuICAgIHRoaXMuZm9udEZhbWlseSA9ICdcIkNvbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZic7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICBcdGF1ZGlvU3RhdGU6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgdG9nZ2xlQXVkaW8gPSAoZXZlbnQpID0+IHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcblx0ICBcdGF1ZGlvU3RhdGU6IGV2ZW50LnRhcmdldC5jaGVja2VkXG5cdCAgfSk7XG4gIH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0ICBcdDxMZXR0ZXIgXG5cdFx0ICBcdFx0dmFsdWU9XCLigKJcIlxuXHRcdCAgXHRcdGF1ZGlvSXNBbGxvd2VkPXt0aGlzLnN0YXRlLmF1ZGlvU3RhdGV9Lz5cblx0XHQgIFx0PGRpdiBjbGFzc05hbWU9XCJhdWRpby1jb250cm9sXCI+XG5cdFx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHRcdFx0aWQ9XCJ0b2dnbGUtYXVkaW9cIlxuXHRcdFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcblx0XHRcdFx0XHRcdGRlZmF1bHRDaGVja2VkPXt0aGlzLnN0YXRlLmF1ZGlvU3RhdGV9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy50b2dnbGVBdWRpb30gIC8+XG5cdFx0XHQgIFx0PGxhYmVsIGh0bWxGb3I9XCJ0b2dnbGUtYXVkaW9cIj5QbGF5IGF1ZGlvPC9sYWJlbD5cblx0XHRcdCAgPC9kaXY+XG5cdFx0XHQgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG5cdFx0XHQgIFx0Q3JlYXRlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9tYXJ0em91a29zXCI+QG1hcnR6b3Vrb3M8L2E+XG5cdFx0XHQgIDwvZm9vdGVyPlxuXHRcdFx0ICA8c3R5bGUganN4PntgXG5cdFx0XHQgIFx0LmNvbnRhaW5lciB7XG5cdFx0ICBcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0ICBcdFx0XHR0b3A6IDA7XG5cdFx0ICBcdFx0XHRsZWZ0OiAwO1xuXHRcdCAgXHRcdFx0cmlnaHQ6IDA7XG5cdFx0ICBcdFx0XHRib3R0b206IDA7XG5cdFx0ICBcdFx0XHRmb250LWZhbWlseTogJHt0aGlzLmZvbnRGYW1pbHl9O1xuXHRcdCAgXHRcdFx0Y29sb3I6ICR7dGhpcy50ZXh0Q29sb3J9O1xuXHRcdFx0ICBcdH1cblxuXHRcdFx0ICBcdGE6bGluayxcblx0XHRcdCAgXHRhOnZpc2l0ZWQge1xuXHRcdFx0ICBcdFx0Y29sb3I6ICR7dGhpcy50ZXh0Q29sb3J9O1xuXHRcdFx0ICBcdH1cblx0XHRcdCAgXHRhOmhvdmVyLFxuXHRcdFx0ICBcdGE6Zm9jdXMge1xuXHRcdFx0ICBcdFx0YmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLmJnQ29sb3J9O1xuXHRcdFx0ICBcdFx0Y29sb3I6ICNlZGZmOGY7XG5cdFx0XHQgIFx0fVxuXG5cdFx0XHQgIFx0LmZvb3RlciB7XG5cdFx0XHQgIFx0XHRwYWRkaW5nOiAuNWVtO1xuXHRcdFx0ICBcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0ICBcdFx0Ym90dG9tOiAwO1xuXHRcdFx0ICBcdFx0cmlnaHQ6IDA7XG5cdFx0XHQgIFx0fVxuXG5cdFx0XHRcdFx0LmF1ZGlvLWNvbnRyb2wge1xuXHRcdFx0ICBcdFx0cGFkZGluZzogLjVlbTtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdCAgXHRcdHRvcDogMDtcblx0XHRcdCAgXHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0ICA8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuIl19 */\n/*@ sourceURL=/Users/smartzoukos/Projects/aaaooo/pages/index.jsx */"),
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
//# sourceMappingURL=index.js.3e198687641b88850d08.hot-update.js.map
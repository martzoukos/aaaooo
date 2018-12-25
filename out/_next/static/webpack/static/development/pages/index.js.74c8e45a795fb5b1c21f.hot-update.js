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

    _this.bgColor = _this.props.router.query.bgColor;
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
      console.log(this.bgColor);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2148694094" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_letter__WEBPACK_IMPORTED_MODULE_3__["default"], {
        value: "\u2022",
        audioIsAllowed: this.state.audioState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2148694094" + " " + "audio-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
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
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "toggle-audio",
        className: "jsx-2148694094",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Play audio")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
        className: "jsx-2148694094" + " " + "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Created by ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://twitter.com/martzoukos",
        className: "jsx-2148694094",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "@martzoukos")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2148694094",
        css: ".container.jsx-2148694094{position:absolute;top:0;left:0;right:0;bottom:0;font-family:".concat(this.fontFamily, ";color:").concat(this.textColor, ";}a.jsx-2148694094:link,a.jsx-2148694094:visited{color:").concat(this.textColor, ";}a.jsx-2148694094:hover,a.jsx-2148694094:focus{background-color:").concat(this.bgColor, ";color:#edff8f;}.footer.jsx-2148694094{padding:.5em;position:absolute;bottom:0;right:0;}.audio-control.jsx-2148694094{padding:.5em;position:absolute;top:0;left:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFydHpvdWtvcy9Qcm9qZWN0cy9hYWFvb28vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDaUIsQUFHMEIsQUFXaUIsQUFJVyxBQUtqQyxBQU9BLGFBTkssQUFPRCxLQTNCWCxNQUNDLE9BQ0MsQUFtQkMsQUFPSCxJQWpCUCxFQWtCUSxFQTFCRSxDQW1CRCxJQVFWLEVBZmdCLEVBWDJCLEFBbUIxQyxZQVBBLDZCQVhvQyxtQ0FDcEMiLCJmaWxlIjoiL1VzZXJzL3NtYXJ0em91a29zL1Byb2plY3RzL2FhYW9vby9wYWdlcy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExldHRlciBmcm9tICcuLi9jb21wb25lbnRzL2xldHRlcic7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvLyB0aGlzLmJnQ29sb3IgPSBcIiNmZjU5OTRcIjtcbiAgICB0aGlzLmJnQ29sb3IgPSB0aGlzLnByb3BzLnJvdXRlci5xdWVyeS5iZ0NvbG9yO1xuICAgIHRoaXMudGV4dENvbG9yID0gXCIjZmY1OTk0XCI7XG4gICAgdGhpcy5mb250RmFtaWx5ID0gJ1wiQ29taWMgU2FucyBNU1wiLCBjdXJzaXZlLCBzYW5zLXNlcmlmJztcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIFx0YXVkaW9TdGF0ZTogdHJ1ZVxuICAgIH07XG4gIH1cblxuICB0b2dnbGVBdWRpbyA9IChldmVudCkgPT4ge1xuICBcdHRoaXMuc2V0U3RhdGUoe1xuXHQgIFx0YXVkaW9TdGF0ZTogZXZlbnQudGFyZ2V0LmNoZWNrZWRcblx0ICB9KTtcbiAgfVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLmJnQ29sb3IpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdCAgXHQ8TGV0dGVyIFxuXHRcdCAgXHRcdHZhbHVlPVwi4oCiXCJcblx0XHQgIFx0XHRhdWRpb0lzQWxsb3dlZD17dGhpcy5zdGF0ZS5hdWRpb1N0YXRlfS8+XG5cdFx0ICBcdDxkaXYgY2xhc3NOYW1lPVwiYXVkaW8tY29udHJvbFwiPlxuXHRcdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHRcdGlkPVwidG9nZ2xlLWF1ZGlvXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXG5cdFx0XHRcdFx0XHRkZWZhdWx0Q2hlY2tlZD17dGhpcy5zdGF0ZS5hdWRpb1N0YXRlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMudG9nZ2xlQXVkaW99ICAvPlxuXHRcdFx0ICBcdDxsYWJlbCBodG1sRm9yPVwidG9nZ2xlLWF1ZGlvXCI+UGxheSBhdWRpbzwvbGFiZWw+XG5cdFx0XHQgIDwvZGl2PlxuXHRcdFx0ICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuXHRcdFx0ICBcdENyZWF0ZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vbWFydHpvdWtvc1wiPkBtYXJ0em91a29zPC9hPlxuXHRcdFx0ICA8L2Zvb3Rlcj5cblx0XHRcdCAgPHN0eWxlIGpzeD57YFxuXHRcdFx0ICBcdC5jb250YWluZXIge1xuXHRcdCAgXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdCAgXHRcdFx0dG9wOiAwO1xuXHRcdCAgXHRcdFx0bGVmdDogMDtcblx0XHQgIFx0XHRcdHJpZ2h0OiAwO1xuXHRcdCAgXHRcdFx0Ym90dG9tOiAwO1xuXHRcdCAgXHRcdFx0Zm9udC1mYW1pbHk6ICR7dGhpcy5mb250RmFtaWx5fTtcblx0XHQgIFx0XHRcdGNvbG9yOiAke3RoaXMudGV4dENvbG9yfTtcblx0XHRcdCAgXHR9XG5cblx0XHRcdCAgXHRhOmxpbmssXG5cdFx0XHQgIFx0YTp2aXNpdGVkIHtcblx0XHRcdCAgXHRcdGNvbG9yOiAke3RoaXMudGV4dENvbG9yfTtcblx0XHRcdCAgXHR9XG5cdFx0XHQgIFx0YTpob3Zlcixcblx0XHRcdCAgXHRhOmZvY3VzIHtcblx0XHRcdCAgXHRcdGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy5iZ0NvbG9yfTtcblx0XHRcdCAgXHRcdGNvbG9yOiAjZWRmZjhmO1xuXHRcdFx0ICBcdH1cblxuXHRcdFx0ICBcdC5mb290ZXIge1xuXHRcdFx0ICBcdFx0cGFkZGluZzogLjVlbTtcblx0XHRcdCAgXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdCAgXHRcdGJvdHRvbTogMDtcblx0XHRcdCAgXHRcdHJpZ2h0OiAwO1xuXHRcdFx0ICBcdH1cblxuXHRcdFx0XHRcdC5hdWRpby1jb250cm9sIHtcblx0XHRcdCAgXHRcdHBhZGRpbmc6IC41ZW07XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHQgIFx0XHR0b3A6IDA7XG5cdFx0XHQgIFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdCAgPC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUGFnZSlcbiJdfQ== */\n/*@ sourceURL=/Users/smartzoukos/Projects/aaaooo/pages/index.jsx */"),
        __self: this
      }));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Page));
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
//# sourceMappingURL=index.js.74c8e45a795fb5b1c21f.hot-update.js.map
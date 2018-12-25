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

    _this.bgColor = "#ff5994";
    _this.state = {
      audioState: true
    };
    return _this;
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2006745505" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_letter__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: "\u2022",
        audioIsAllowed: this.state.audioState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2006745505" + " " + "audio-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        id: "toggle-audio",
        type: "checkbox",
        defaultChecked: this.state.audioState,
        onChange: this.toggleAudio,
        className: "jsx-2006745505",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "toggle-audio",
        className: "jsx-2006745505",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Play audio")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
        className: "jsx-2006745505" + " " + "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Created by ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://twitter.com/martzoukos",
        className: "jsx-2006745505",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "@martzoukos")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2006745505",
        css: ".container.jsx-2006745505{font-family:\"Comic Sans MS\",cursive,sans-serif;color:#ff5994;}a.jsx-2006745505:link,a.jsx-2006745505:visited{color:#ff5994;}a.jsx-2006745505:hover,a.jsx-2006745505:focus{background-color:#ff5994;color:#edff8f;}.footer.jsx-2006745505{position:absolute;bottom:1em;right:1em;}.audio-control.jsx-2006745505{position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFydHpvdWtvcy9Qcm9qZWN0cy9hYWFvb28vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDaUIsQUFHeUQsQUFNbkMsQUFJVyxBQUtQLEFBTUQsY0FkbEIsSUFTWSxBQU1iLE9BWGdCLElBTUosVUFMWCxBQU1BLFFBakJlLGNBQ2YiLCJmaWxlIjoiL1VzZXJzL3NtYXJ0em91a29zL1Byb2plY3RzL2FhYW9vby9wYWdlcy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGV0dGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbGV0dGVyJztcblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuYmdDb2xvciA9IFwiI2ZmNTk5NFwiO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgXHRhdWRpb1N0YXRlOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHRvZ2dsZUF1ZGlvID0gKGV2ZW50KSA9PiB7XG4gIFx0dGhpcy5zZXRTdGF0ZSh7XG5cdCAgXHRhdWRpb1N0YXRlOiBldmVudC50YXJnZXQuY2hlY2tlZFxuXHQgIH0pO1xuICB9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdCAgXHQ8TGV0dGVyIFxuXHRcdCAgXHRcdHZhbHVlPVwi4oCiXCJcblx0XHQgIFx0XHRhdWRpb0lzQWxsb3dlZD17dGhpcy5zdGF0ZS5hdWRpb1N0YXRlfS8+XG5cdFx0ICBcdDxkaXYgY2xhc3NOYW1lPVwiYXVkaW8tY29udHJvbFwiPlxuXHRcdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHRcdGlkPVwidG9nZ2xlLWF1ZGlvXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXG5cdFx0XHRcdFx0XHRkZWZhdWx0Q2hlY2tlZD17dGhpcy5zdGF0ZS5hdWRpb1N0YXRlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMudG9nZ2xlQXVkaW99ICAvPlxuXHRcdFx0ICBcdDxsYWJlbCBodG1sRm9yPVwidG9nZ2xlLWF1ZGlvXCI+UGxheSBhdWRpbzwvbGFiZWw+XG5cdFx0XHQgIDwvZGl2PlxuXHRcdFx0ICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuXHRcdFx0ICBcdENyZWF0ZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vbWFydHpvdWtvc1wiPkBtYXJ0em91a29zPC9hPlxuXHRcdFx0ICA8L2Zvb3Rlcj5cblx0XHRcdCAgPHN0eWxlIGpzeD57YFxuXHRcdFx0ICBcdC5jb250YWluZXIge1xuXHRcdCAgXHRcdFx0Zm9udC1mYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1xuXHRcdCAgXHRcdFx0Y29sb3I6ICNmZjU5OTQ7XG5cdFx0XHQgIFx0fVxuXG5cdFx0XHQgIFx0YTpsaW5rLFxuXHRcdFx0ICBcdGE6dmlzaXRlZCB7XG5cdFx0XHQgIFx0XHRjb2xvcjogI2ZmNTk5NDtcblx0XHRcdCAgXHR9XG5cdFx0XHQgIFx0YTpob3Zlcixcblx0XHRcdCAgXHRhOmZvY3VzIHtcblx0XHRcdCAgXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZjU5OTQ7XG5cdFx0XHQgIFx0XHRjb2xvcjogI2VkZmY4Zjtcblx0XHRcdCAgXHR9XG5cblx0XHRcdCAgXHQuZm9vdGVyIHtcblx0XHRcdCAgXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdCAgXHRcdGJvdHRvbTogMWVtO1xuXHRcdFx0ICBcdFx0cmlnaHQ6IDFlbTtcblx0XHRcdCAgXHR9XG5cblx0XHRcdFx0XHQuYXVkaW8tY29udHJvbCB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0ICA8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuIl19 */\n/*@ sourceURL=/Users/smartzoukos/Projects/aaaooo/pages/index.jsx */",
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
//# sourceMappingURL=index.js.9e8873fe88e3b99c2c34.hot-update.js.map
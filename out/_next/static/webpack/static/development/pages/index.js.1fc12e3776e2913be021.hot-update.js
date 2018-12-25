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
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_letter__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: "\u2022",
        audioIsAllowed: this.state.audioState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2148694094" + " " + "audio-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
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
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "toggle-audio",
        className: "jsx-2148694094",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Play audio")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
        className: "jsx-2148694094" + " " + "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Created by ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://twitter.com/martzoukos",
        className: "jsx-2148694094",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "@martzoukos")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2148694094",
        css: ".container.jsx-2148694094{position:absolute;top:0;left:0;right:0;bottom:0;font-family:".concat(this.fontFamily, ";color:").concat(this.textColor, ";}a.jsx-2148694094:link,a.jsx-2148694094:visited{color:").concat(this.textColor, ";}a.jsx-2148694094:hover,a.jsx-2148694094:focus{background-color:").concat(this.bgColor, ";color:#edff8f;}.footer.jsx-2148694094{padding:.5em;position:absolute;bottom:0;right:0;}.audio-control.jsx-2148694094{padding:.5em;position:absolute;top:0;left:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFydHpvdWtvcy9Qcm9qZWN0cy9hYWFvb28vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DaUIsQUFHMEIsQUFXaUIsQUFJVyxBQUtqQyxBQU9BLGFBTkssQUFPRCxLQTNCWCxNQUNDLE9BQ0MsQUFtQkMsQUFPSCxJQWpCUCxFQWtCUSxFQTFCRSxDQW1CRCxJQVFWLEVBZmdCLEVBWDJCLEFBbUIxQyxZQVBBLDZCQVhvQyxtQ0FDcEMiLCJmaWxlIjoiL1VzZXJzL3NtYXJ0em91a29zL1Byb2plY3RzL2FhYW9vby9wYWdlcy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGV0dGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbGV0dGVyJztcblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuYmdDb2xvciA9IFwiI2ZmNTk5NFwiO1xuICAgIHRoaXMudGV4dENvbG9yID0gXCIjZmY1OTk0XCI7XG4gICAgdGhpcy5mb250RmFtaWx5ID0gJ1wiQ29taWMgU2FucyBNU1wiLCBjdXJzaXZlLCBzYW5zLXNlcmlmJztcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIFx0YXVkaW9TdGF0ZTogdHJ1ZVxuICAgIH07XG4gIH1cblxuICB0b2dnbGVBdWRpbyA9IChldmVudCkgPT4ge1xuICBcdHRoaXMuc2V0U3RhdGUoe1xuXHQgIFx0YXVkaW9TdGF0ZTogZXZlbnQudGFyZ2V0LmNoZWNrZWRcblx0ICB9KTtcbiAgfVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHQgIFx0PExldHRlciBcblx0XHQgIFx0XHR2YWx1ZT1cIuKAolwiXG5cdFx0ICBcdFx0YXVkaW9Jc0FsbG93ZWQ9e3RoaXMuc3RhdGUuYXVkaW9TdGF0ZX0vPlxuXHRcdCAgXHQ8ZGl2IGNsYXNzTmFtZT1cImF1ZGlvLWNvbnRyb2xcIj5cblx0XHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0XHRpZD1cInRvZ2dsZS1hdWRpb1wiXG5cdFx0XHRcdFx0XHR0eXBlPVwiY2hlY2tib3hcIlxuXHRcdFx0XHRcdFx0ZGVmYXVsdENoZWNrZWQ9e3RoaXMuc3RhdGUuYXVkaW9TdGF0ZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZUF1ZGlvfSAgLz5cblx0XHRcdCAgXHQ8bGFiZWwgaHRtbEZvcj1cInRvZ2dsZS1hdWRpb1wiPlBsYXkgYXVkaW88L2xhYmVsPlxuXHRcdFx0ICA8L2Rpdj5cblx0XHRcdCAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cblx0XHRcdCAgXHRDcmVhdGVkIGJ5IDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL21hcnR6b3Vrb3NcIj5AbWFydHpvdWtvczwvYT5cblx0XHRcdCAgPC9mb290ZXI+XG5cdFx0XHQgIDxzdHlsZSBqc3g+e2Bcblx0XHRcdCAgXHQuY29udGFpbmVyIHtcblx0XHQgIFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHQgIFx0XHRcdHRvcDogMDtcblx0XHQgIFx0XHRcdGxlZnQ6IDA7XG5cdFx0ICBcdFx0XHRyaWdodDogMDtcblx0XHQgIFx0XHRcdGJvdHRvbTogMDtcblx0XHQgIFx0XHRcdGZvbnQtZmFtaWx5OiAke3RoaXMuZm9udEZhbWlseX07XG5cdFx0ICBcdFx0XHRjb2xvcjogJHt0aGlzLnRleHRDb2xvcn07XG5cdFx0XHQgIFx0fVxuXG5cdFx0XHQgIFx0YTpsaW5rLFxuXHRcdFx0ICBcdGE6dmlzaXRlZCB7XG5cdFx0XHQgIFx0XHRjb2xvcjogJHt0aGlzLnRleHRDb2xvcn07XG5cdFx0XHQgIFx0fVxuXHRcdFx0ICBcdGE6aG92ZXIsXG5cdFx0XHQgIFx0YTpmb2N1cyB7XG5cdFx0XHQgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke3RoaXMuYmdDb2xvcn07XG5cdFx0XHQgIFx0XHRjb2xvcjogI2VkZmY4Zjtcblx0XHRcdCAgXHR9XG5cblx0XHRcdCAgXHQuZm9vdGVyIHtcblx0XHRcdCAgXHRcdHBhZGRpbmc6IC41ZW07XG5cdFx0XHQgIFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHQgIFx0XHRib3R0b206IDA7XG5cdFx0XHQgIFx0XHRyaWdodDogMDtcblx0XHRcdCAgXHR9XG5cblx0XHRcdFx0XHQuYXVkaW8tY29udHJvbCB7XG5cdFx0XHQgIFx0XHRwYWRkaW5nOiAuNWVtO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0ICBcdFx0dG9wOiAwO1xuXHRcdFx0ICBcdFx0bGVmdDogMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHQgIDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlXG4iXX0= */\n/*@ sourceURL=/Users/smartzoukos/Projects/aaaooo/pages/index.jsx */"),
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
//# sourceMappingURL=index.js.1fc12e3776e2913be021.hot-update.js.map
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(5);

var _App = __webpack_require__(6);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);

  // Hot Module Replacement
  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactStaticRoutes = __webpack_require__(7);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
exports.default = function () {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      )
    )
  );
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(8);

var _Review = __webpack_require__(9);

var _Review2 = _interopRequireDefault(_Review);

var _Home = __webpack_require__(16);

var _Home2 = _interopRequireDefault(_Home);

var _About = __webpack_require__(17);

var _About2 = _interopRequireDefault(_About);

var _ = __webpack_require__(18);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Template Imports


// Template Map
var templateMap = {
  t_0: _Review2.default,
  t_1: _Home2.default,
  t_2: _About2.default,
  t_3: _2.default

  // Template Tree
};var templateTree = { c: { "404": { t: "t_3" }, "review": { c: { "12": { t: "t_0" }, "13": { t: "t_0" } } }, "/": { t: "t_1" }, "about": { t: "t_2" } }

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;

      var renderProps = {
        templateMap: templateMap,
        templateTree: templateTree,
        getComponentForPath: getComponentForPath
      };
      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }
      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getComponentForPath(props.location.pathname);
          if (!Comp) {
            Comp = getComponentForPath('404');
          }
          return Comp && _react2.default.createElement(Comp, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStatic = __webpack_require__(1);

var _Header = __webpack_require__(10);

var _Header2 = _interopRequireDefault(_Header);

var _ReviewSection = __webpack_require__(12);

var _ReviewSection2 = _interopRequireDefault(_ReviewSection);

var _Goals = __webpack_require__(14);

var _Goals2 = _interopRequireDefault(_Goals);

var _Legend = __webpack_require__(15);

var _Legend2 = _interopRequireDefault(_Legend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Review = function (_Component) {
  _inherits(Review, _Component);

  function Review(props) {
    _classCallCheck(this, Review);

    var _this = _possibleConstructorReturn(this, (Review.__proto__ || Object.getPrototypeOf(Review)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Review, [{
    key: 'render',
    value: function render() {
      var review = this.props.review;
      var legend = this.props.legend;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, { name: review.name, quote: review.quote }),
        _react2.default.createElement(_Goals2.default, { id: review.id, period: review.period, goals: review.goals }),
        _react2.default.createElement(
          'ul',
          { className: 'sections-list' },
          review.sections.map(function (section) {
            return _react2.default.createElement(
              'li',
              { className: 'sections-list__item', key: 'section' + section.title },
              _react2.default.createElement(_ReviewSection2.default, { section: section })
            );
          })
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(_Legend2.default, { legend: legend })
      );
    }
  }]);

  return Review;
}(_react.Component);

Review.propTypes = {
  review: _propTypes2.default.object.isRequired,
  legend: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

exports.default = (0, _reactStatic.getRouteProps)(Review);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _logoAlodo = __webpack_require__(11);

var _logoAlodo2 = _interopRequireDefault(_logoAlodo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.getSiteProps)(function (_ref) {
  var name = _ref.name,
      quote = _ref.quote;
  return _react2.default.createElement(
    'header',
    { className: 'header' },
    _react2.default.createElement(
      'div',
      { className: 'header__content' },
      _react2.default.createElement(
        'div',
        { className: 'header__logo' },
        _react2.default.createElement('img', { className: 'rwd-img', src: _logoAlodo2.default, alt: 'Unicorn' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'header__sprintinfo' },
        _react2.default.createElement(
          'h1',
          { className: 'header__headline' },
          'Unicorn Review'
        ),
        _react2.default.createElement(
          'div',
          { className: 'header__sprintinfo-name' },
          'Review: "',
          name,
          '"'
        ),
        _react2.default.createElement(
          'div',
          { className: 'header__sprintinfo-quote' },
          quote
        )
      )
    )
  );
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Task = __webpack_require__(13);

var _Task2 = _interopRequireDefault(_Task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.getSiteProps)(function (_ref) {
  var section = _ref.section;
  return _react2.default.createElement(
    'div',
    { className: 'section' },
    _react2.default.createElement(
      'div',
      { className: 'section__title' },
      section.title
    ),
    _react2.default.createElement(
      'div',
      { className: 'section__tasks' },
      _react2.default.createElement(
        'ul',
        { className: 'tasks' },
        section.tasks.map(function (task, i) {
          return _react2.default.createElement(
            'li',
            { className: 'tasks__item', key: 'task-' + i },
            _react2.default.createElement(_Task2.default, { task: task })
          );
        })
      )
    )
  );
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
exports.default = (0, _reactStatic.getSiteProps)(function (_ref) {
  var task = _ref.task;
  return _react2.default.createElement(
    'div',
    { className: 'task' },
    _react2.default.createElement('span', { className: 'status status--' + task.status }),
    _react2.default.createElement(
      'span',
      { className: 'task__key' },
      task.key
    ),
    _react2.default.createElement(
      'span',
      { className: 'task__summary' },
      task.summary
    )
  );
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.getSiteProps)(function (_ref) {
  var id = _ref.id,
      period = _ref.period,
      goals = _ref.goals;
  return _react2.default.createElement(
    'div',
    { className: 'goals' },
    _react2.default.createElement(
      'div',
      null,
      'Sprint: ',
      id,
      ' | ',
      period
    ),
    _react2.default.createElement(
      'ul',
      { className: 'goals-list' },
      goals.map(function (goal, i) {
        return _react2.default.createElement(
          'li',
          { className: 'goals-list__item', key: 'goal-' + i },
          goal
        );
      })
    )
  );
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.getSiteProps)(function (_ref) {
  var legend = _ref.legend;
  return _react2.default.createElement(
    'ul',
    { className: 'legend-status' },
    legend.status.map(function (status, i) {
      return _react2.default.createElement(
        'li',
        { className: 'legend-status__item', key: 'legend-' + i },
        _react2.default.createElement('span', { className: 'status status--' + status }),
        status
      );
    })
  );
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(HomePage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: 'overview-list' },
        this.props.reviews.map(function (review) {
          return _react2.default.createElement(
            'li',
            { className: 'overview-list__item', key: 'item-' + review.id },
            _react2.default.createElement(
              'a',
              { className: 'overview-list__item-link', key: 'item-link-' + review.id, href: 'review/' + review.id },
              'Sprint ',
              review.id,
              ' - ',
              review.name
            )
          );
        })
      );
    }
  }]);

  return HomePage;
}(_react.Component);

HomePage.propTypes = {
  reviews: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

exports.default = (0, _reactStatic.getRouteProps)(HomePage);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Wir sind die Fluffys :-)'
    )
  );
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.993e3355.js.map
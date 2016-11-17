'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocaleProvider = (_temp = _class = function (_Component) {
  _inherits(LocaleProvider, _Component);

  function LocaleProvider() {
    _classCallCheck(this, LocaleProvider);

    return _possibleConstructorReturn(this, (LocaleProvider.__proto__ || Object.getPrototypeOf(LocaleProvider)).apply(this, arguments));
  }

  _createClass(LocaleProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        namespace: this
      };
    }
  }, {
    key: 'getPath',
    value: function getPath() {
      var _props = this.props,
          path = _props.path,
          compose = _props.compose;

      if (!compose || !path) {
        return path;
      }

      if (this.context.namespace) {
        var parentPath = this.context.namespace.getPath();
        if (parentPath) {
          return parentPath + '.' + path;
        }
      }

      return path;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  return LocaleProvider;
}(_react.Component), _class.propTypes = {
  path: _react.PropTypes.string,
  compose: _react.PropTypes.bool,
  children: _react.PropTypes.node
}, _class.childContextTypes = {
  namespace: _react.PropTypes.object.isRequired
}, _class.contextTypes = {
  namespace: _react.PropTypes.object
}, _temp);
exports.default = LocaleProvider;
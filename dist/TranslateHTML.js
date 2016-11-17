'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LocaleProvider = require('./LocaleProvider');

var _LocaleProvider2 = _interopRequireDefault(_LocaleProvider);

var _Translate = require('./Translate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TranslateHTML = (_temp = _class = function (_Component) {
  _inherits(TranslateHTML, _Component);

  function TranslateHTML() {
    _classCallCheck(this, TranslateHTML);

    return _possibleConstructorReturn(this, (TranslateHTML.__proto__ || Object.getPrototypeOf(TranslateHTML)).apply(this, arguments));
  }

  _createClass(TranslateHTML, [{
    key: 'getPath',
    value: function getPath() {
      var path = this.props.path;
      var namespace = this.context.namespace;

      if (!namespace) {
        return path;
      }

      var parentPath = namespace.getPath();
      if (!parentPath) {
        return path;
      }

      return parentPath + '.' + path;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          tagName = _props.tagName,
          params = _props.params,
          defaultValue = _props.defaultValue,
          _props$props = _props.props,
          props = _props$props === undefined ? {} : _props$props,
          children = _props.children,
          className = _props.className;


      var path = this.getPath();
      var translate = this.context.translate;


      var currentProps = params || this.props;
      var updatedProps = (0, _Translate.prepareProps)(currentProps, translate);
      var text = translate.get(path, updatedProps, defaultValue);

      var elementProps = _extends({
        className: className
      }, props, {
        dangerouslySetInnerHTML: {
          __html: text
        }
      });

      return _react2.default.createElement(tagName, elementProps, children);
    }
  }]);

  return TranslateHTML;
}(_react.Component), _class.contextTypes = _extends({}, _LocaleProvider2.default.childContextTypes, {
  namespace: _react.PropTypes.object
}), _class.propTypes = {
  path: _react.PropTypes.string.isRequired,
  tagName: _react.PropTypes.string.isRequired,
  defaultValue: _react.PropTypes.string,
  description: _react.PropTypes.string,
  className: _react.PropTypes.string,
  params: _react.PropTypes.object,
  props: _react.PropTypes.object,
  children: _react.PropTypes.node
}, _class.defaultProps = {
  tagName: 'span'
}, _temp);
exports.default = TranslateHTML;
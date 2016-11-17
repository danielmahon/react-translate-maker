'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _translateMaker = require('translate-maker');

var _translateMaker2 = _interopRequireDefault(_translateMaker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocaleProvider = (_temp = _class = function (_Component) {
  _inherits(LocaleProvider, _Component);

  function LocaleProvider(props, context) {
    _classCallCheck(this, LocaleProvider);

    var _this = _possibleConstructorReturn(this, (LocaleProvider.__proto__ || Object.getPrototypeOf(LocaleProvider)).call(this, props, context));

    _this.t = function (path, attrs, defaultValue) {
      return _this.get(path, attrs, defaultValue);
    };

    _this.dataChanged = function () {
      _this.forceUpdate();
    };

    _this.localeChanged = function (locale) {
      _this.setState({ locale: locale });
    };

    var translate = new _translateMaker2.default(props);

    _this.state = {
      translate: translate,
      locale: translate.getLocale()
    };
    return _this;
  }

  _createClass(LocaleProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        translate: this,
        t: this.t
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var translate = this.state.translate;


      translate.on('locale', this.localeChanged);
      translate.on('changed', this.dataChanged);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.controlled) {
        if (newProps.locale) {
          this.state.translate.setLocale(newProps.locale);
        }

        if (newProps.namespace) {
          this.state.translate.load(newProps.namespace);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var translate = this.state.translate;


      translate.removeListener('locale', this.localeChanged);
      translate.removeListener('changed', this.dataChanged);
    }
  }, {
    key: 'get',
    value: function get(path, attrs, defaultValue) {
      var translate = this.state.translate;

      return translate.get(path, attrs, defaultValue);
    }
  }, {
    key: 'set',
    value: function set(path, value) {
      var translate = this.state.translate;

      return translate.set(path, value);
    }
  }, {
    key: 'getLocale',
    value: function getLocale() {
      return this.state.translate.getOptions().locale;
    }
  }, {
    key: 'setLocale',
    value: function setLocale(locale, callback) {
      if (this.props.controlled) {
        return callback(new Error('LocaleProvider is set as controlled component. If you want to use setLocale please set controlled = false'));
      }

      return this.state.translate.setLocale(locale, function () {
        callback.apply(undefined, arguments);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  return LocaleProvider;
}(_react.Component), _class.propTypes = {
  children: _react.PropTypes.node,
  locale: _react.PropTypes.string,
  locales: _react.PropTypes.array,
  namespace: _react.PropTypes.string,
  fallbacks: _react.PropTypes.object,
  cache: _react.PropTypes.object,
  adapter: _react.PropTypes.object,
  defaultAdapter: _react.PropTypes.object,
  dotNotation: _react.PropTypes.bool,
  mode: _react.PropTypes.string,
  references: _react.PropTypes.bool,
  variables: _react.PropTypes.bool,
  combinations: _react.PropTypes.bool,
  filters: _react.PropTypes.object,
  controlled: _react.PropTypes.bool
}, _class.defaultProps = {
  controlled: true
}, _class.childContextTypes = {
  translate: _react.PropTypes.object.isRequired,
  t: _react.PropTypes.func.isRequired
}, _temp);
exports.default = LocaleProvider;
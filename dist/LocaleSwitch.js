'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _coreDecorators = require('core-decorators');

var _LocaleProvider = require('./LocaleProvider');

var _LocaleProvider2 = _interopRequireDefault(_LocaleProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var LocaleSwitch = (_class = (_temp = _class2 = function (_Component) {
  _inherits(LocaleSwitch, _Component);

  function LocaleSwitch() {
    _classCallCheck(this, LocaleSwitch);

    return _possibleConstructorReturn(this, (LocaleSwitch.__proto__ || Object.getPrototypeOf(LocaleSwitch)).apply(this, arguments));
  }

  _createClass(LocaleSwitch, [{
    key: 'handleChange',
    value: function handleChange(evn) {
      evn.stopPropagation();

      var _props = this.props,
          locales = _props.locales,
          onChange = _props.onChange,
          onError = _props.onError,
          setLocale = _props.setLocale,
          onLocaleChange = _props.onLocaleChange;

      var translate = this.context.translate;

      var value = evn.target.value;

      var _loop = function _loop(index) {
        var locale = locales[index].locale;

        if (locale !== value) {
          return 'continue';
        }

        if (setLocale && !translate.props.controlled) {
          translate.setLocale(locale, function (err) {
            if (err && onError) {
              onError(err);
              return;
            }

            if (onLocaleChange) {
              setTimeout(function () {
                return onLocaleChange(locale);
              }, 0);
            }
          });
        }

        if (onChange) {
          onChange(locale);
        }

        return {
          v: void 0
        };
      };

      for (var index = 0; index < locales.length; index += 1) {
        var _ret = _loop(index);

        switch (_ret) {
          case 'continue':
            continue;

          default:
            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var translate = this.context.translate;
      var locale = translate.getLocale();
      var locales = this.props.locales;


      var selectProps = _extends({}, this.props);

      delete selectProps.setLocale;
      delete selectProps.locales;
      delete selectProps.onLocaleChange;

      return _react2.default.createElement(
        'select',
        _extends({}, selectProps, {
          value: locale,
          onChange: this.handleChange
        }),
        locales.map(function (option, pos) {
          return _react2.default.createElement(
            'option',
            { value: option.locale, key: pos },
            option.label
          );
        })
      );
    }
  }]);

  return LocaleSwitch;
}(_react.Component), _class2.contextTypes = _extends({}, _LocaleProvider2.default.childContextTypes), _class2.defaultProps = {
  setLocale: true
}, _class2.propTypes = {
  locales: _react.PropTypes.array.isRequired,
  setLocale: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  name: _react.PropTypes.string,
  className: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  onLocaleChange: _react.PropTypes.func,
  onError: _react.PropTypes.func
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'handleChange', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'handleChange'), _class.prototype)), _class);
exports.default = LocaleSwitch;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _reactProvideProps = require('react-provide-props');

var _reactProvideProps2 = _interopRequireDefault(_reactProvideProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactProvideProps2.default)('TrnaslateProvider', function (props, context) {
  return {
    t: context.t
  };
}, {}, {
  t: _react.PropTypes.func.isRequired
});
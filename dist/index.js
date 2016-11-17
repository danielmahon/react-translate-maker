'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TranslateMaker = exports.Translate = exports.Caches = exports.Adapters = exports.Mode = exports.Gender = exports.Plural = exports.provideTranslations = exports.LocaleSwitch = exports.Namespace = exports.TranslateHTML = exports.LocaleProvider = undefined;

var _translateMaker = require('translate-maker');

var _translateMaker2 = _interopRequireDefault(_translateMaker);

var _LocaleProvider = require('./LocaleProvider');

var _LocaleProvider2 = _interopRequireDefault(_LocaleProvider);

var _Translate = require('./Translate');

var _Translate2 = _interopRequireDefault(_Translate);

var _Namespace = require('./Namespace');

var _Namespace2 = _interopRequireDefault(_Namespace);

var _TranslateHTML = require('./TranslateHTML');

var _TranslateHTML2 = _interopRequireDefault(_TranslateHTML);

var _LocaleSwitch = require('./LocaleSwitch');

var _LocaleSwitch2 = _interopRequireDefault(_LocaleSwitch);

var _provideTranslations = require('./provideTranslations');

var _provideTranslations2 = _interopRequireDefault(_provideTranslations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.LocaleProvider = _LocaleProvider2.default;
exports.TranslateHTML = _TranslateHTML2.default;
exports.Namespace = _Namespace2.default;
exports.LocaleSwitch = _LocaleSwitch2.default;
exports.provideTranslations = _provideTranslations2.default;
exports.Plural = _translateMaker.Plural;
exports.Gender = _translateMaker.Gender;
exports.Mode = _translateMaker.Mode;
exports.Adapters = _translateMaker.Adapters;
exports.Caches = _translateMaker.Caches;
exports.Translate = _Translate2.default;
exports.TranslateMaker = _translateMaker2.default;
exports.default = _Translate2.default;
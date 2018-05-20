'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultDocument = function (_Document) {
  (0, _inherits3.default)(DefaultDocument, _Document);

  function DefaultDocument() {
    (0, _classCallCheck3.default)(this, DefaultDocument);

    return (0, _possibleConstructorReturn3.default)(this, (DefaultDocument.__proto__ || (0, _getPrototypeOf2.default)(DefaultDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(DefaultDocument, [{
    key: 'render',
    value: function render() {
      /**
      * Here we use _document.js to add a "lang" propery to the HTML object if
      * one is set on the page.
      **/
      return _react2.default.createElement('html', { lang: this.props.__NEXT_DATA__.props.lang || 'en' }, _react2.default.createElement(_document.Head, null, this.props.styleTags), _react2.default.createElement('body', null, this.props.customValue, _react2.default.createElement(_document.Main, null), _react2.default.createElement(_document.NextScript, null)));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var sheet = new _styledComponents.ServerStyleSheet();
      var page = renderPage(function (App) {
        return function (props) {
          return sheet.collectStyles(_react2.default.createElement(App, props));
        };
      });
      var styleTags = sheet.getStyleElement();
      return (0, _extends3.default)({}, page, { styleTags: styleTags // return styles collected
      });
    }
  }]);

  return DefaultDocument;
}(_document2.default);

exports.default = DefaultDocument;
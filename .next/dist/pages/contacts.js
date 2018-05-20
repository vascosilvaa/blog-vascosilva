'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

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

var _reactstrap = require('reactstrap');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ArticleCard = require('../components/ArticleCard');

var _ArticleCard2 = _interopRequireDefault(_ArticleCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  color: #8d8d8d;\n  font-family: \'Raleway\', sans-serif;\n  font-size: 16px;\n  line-height: 31px;\n  font-style: normal;\n  font-weight: 400;\n  letter-spacing: 0px;\n  text-transform: none;\n  padding: 40px;\n  text-align:center;\n'], ['\n  color: #8d8d8d;\n  font-family: \'Raleway\', sans-serif;\n  font-size: 16px;\n  line-height: 31px;\n  font-style: normal;\n  font-weight: 400;\n  letter-spacing: 0px;\n  text-transform: none;\n  padding: 40px;\n  text-align:center;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n'], ['\n']);

var Contacts = function (_React$Component) {
  (0, _inherits3.default)(Contacts, _React$Component);

  function Contacts() {
    (0, _classCallCheck3.default)(this, Contacts);

    return (0, _possibleConstructorReturn3.default)(this, (Contacts.__proto__ || (0, _getPrototypeOf2.default)(Contacts)).apply(this, arguments));
  }

  (0, _createClass3.default)(Contacts, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, { title: 'VASCO SILVA', subtitle: 'Contacte-me sempre que desejar' }, _react2.default.createElement(StyledForm, null));
    }
  }]);

  return Contacts;
}(_react2.default.Component);

exports.default = Contacts;


var StyledText = _styledComponents2.default.div(_templateObject);

var StyledForm = _styledComponents2.default.div(_templateObject2);
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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  color: #8d8d8d;\n  font-family: \'Raleway\', sans-serif;\n  font-size: 16px;\n  line-height: 31px;\n  font-style: normal;\n  font-weight: 400;\n  letter-spacing: 0px;\n  text-transform: none;\n  padding: 40px;\n  text-align:center;\n'], ['\n  color: #8d8d8d;\n  font-family: \'Raleway\', sans-serif;\n  font-size: 16px;\n  line-height: 31px;\n  font-style: normal;\n  font-weight: 400;\n  letter-spacing: 0px;\n  text-transform: none;\n  padding: 40px;\n  text-align:center;\n']);

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, { title: 'VASCO SILVA', subtitle: 'O meu blog' }, _react2.default.createElement(StyledText, null, 'Ol\xE1! Eu sou um f\xE3 de javascript que vive em Portugal. Tenho especial gosto pela \xE0rea de desenvolvimento Frontend, contudo, tenho experi\xEAncia em todo o processo de desenvolvimento web. Convido-o a acompanhar alguns dos meus \xFAltimos artigos:'), _react2.default.createElement(_reactstrap.Row, { className: 'mt-5 mb-5' }, _react2.default.createElement(_reactstrap.Col, { md: '4' }, _react2.default.createElement(_ArticleCard2.default, { id: '1', title: 'Redux Form: uma simples alternativa para formul\xE1rios com React+Redux', subtitle: 'Por vezes, a cria\xE7\xE3o e manipula\xE7\xE3o de formul\xE1rios em aplica\xE7\xF5es web pode tornar-se aborrecida e dispendiosa para programadores. A utiliza\xE7\xE3o de frameworks e bibliotecas geralmente procura simplificar todo este processo.', img: 'http://aosd.net/wp-content/uploads/2017/11/Computer-Programmer.jpg' })), _react2.default.createElement(_reactstrap.Col, { md: '4' }, _react2.default.createElement(_ArticleCard2.default, { id: '2', title: 'Trabalho remoto: um novo conceito, uma nova experi\xEAncia', subtitle: 'Apesar de n\xE3o ser um conceito muito comum e popular em Portugal, o trabalho remoto tem vindo a tornar-se numa realidade cada vez mais desejada tanto por profissionais, como por empresas que procuram contributos diferenciadores e novos m\xE9todos de trabalho.', img: 'https://blog.bia.pt/wp-content/uploads/2018/04/RemoteMountain.jpg' }))));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;


var StyledText = _styledComponents2.default.div(_templateObject);
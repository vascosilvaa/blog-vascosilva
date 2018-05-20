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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  color: #8d8d8d;\n  font-family: \'Raleway\', sans-serif;\n  font-size: 16px;\n  line-height: 31px;\n  font-style: normal;\n  font-weight: 400;\n  letter-spacing: 0px;\n  text-transform: none;\n  padding: 35px;\n  margin-bottom: 40px;\n'], ['\n  color: #8d8d8d;\n  font-family: \'Raleway\', sans-serif;\n  font-size: 16px;\n  line-height: 31px;\n  font-style: normal;\n  font-weight: 400;\n  letter-spacing: 0px;\n  text-transform: none;\n  padding: 35px;\n  margin-bottom: 40px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  border-radius: 50%;\n  height:120px;\n  width: 120px;\n  object-fit: cover;\n'], ['\n  border-radius: 50%;\n  height:120px;\n  width: 120px;\n  object-fit: cover;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: 700;\n  color: #5385C1;\n'], ['\n  font-weight: 700;\n  color: #5385C1;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: 700;\n  font-size: 28px;\n  color: #5385C1;\n'], ['\n  font-weight: 700;\n  font-size: 28px;\n  color: #5385C1;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\nfont-size: 18px;\nfont-weight:500;\ncolor: #5385C1;\n'], ['\nfont-size: 18px;\nfont-weight:500;\ncolor: #5385C1;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\nfont-size: 16px;\n'], ['\nfont-size: 16px;\n']);

var About = function (_React$Component) {
  (0, _inherits3.default)(About, _React$Component);

  function About() {
    (0, _classCallCheck3.default)(this, About);

    return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).apply(this, arguments));
  }

  (0, _createClass3.default)(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, { title: 'VASCO SILVA', subtitle: 'Compet\xEAncias e percurso acad\xE9mico/profissional' }, _react2.default.createElement('div', { className: 'w-100 text-center mt-5' }, _react2.default.createElement(StyledImage, { src: 'https://scontent.fopo2-1.fna.fbcdn.net/v/t31.0-8/20901739_1742639349084085_786414273944527815_o.jpg?_nc_cat=0&oh=7576a1e612a10af697d10fefd1a162cd&oe=5B91BD1A' }), _react2.default.createElement(StyledText, null, 'Vasco Silva, 22 anos, natural de Vila Nova de Gaia, no Porto.', _react2.default.createElement('br', null), _react2.default.createElement(StyledStrong, null, 'Licenciatura:'), ' Novas Tecnologias da Comunica\xE7\xE3o, Universidade de Aveiro', _react2.default.createElement('br', null), _react2.default.createElement(StyledStrong, null, 'Mestrado:'), ' Comunica\xE7\xE3o Multim\xE9dia - Multim\xE9dia Interativa'), _react2.default.createElement(StyledTitle, null, 'Tecnologias:'), _react2.default.createElement(_reactstrap.Row, { className: 'mt-5 mb-5 pb-5' }, _react2.default.createElement(_reactstrap.Col, { md: '6' }, _react2.default.createElement('div', { className: 'text-left mb-1' }, 'HTML5'), _react2.default.createElement(_reactstrap.Progress, { value: 95, className: 'mb-4' }), _react2.default.createElement('div', { className: 'text-left mb-1' }, 'CSS3'), _react2.default.createElement(_reactstrap.Progress, { value: 90, className: 'mb-4' }), _react2.default.createElement('div', { className: 'text-left mb-1' }, 'Javascript'), _react2.default.createElement(_reactstrap.Progress, { value: 85, className: 'mb-4' }), _react2.default.createElement('div', { className: 'text-left mb-1' }, 'PHP/Laravel'), _react2.default.createElement(_reactstrap.Progress, { value: 60, className: 'mb-4' }), _react2.default.createElement('div', { className: 'text-left mb-1' }, 'MySQL'), _react2.default.createElement(_reactstrap.Progress, { value: 60, className: 'mb-4' }), _react2.default.createElement('div', { className: 'text-left mb-1' }, 'Styled Components'), _react2.default.createElement(_reactstrap.Progress, { value: 80, className: 'mb-4' }), _react2.default.createElement('div', { className: 'text-left mb-1' }, 'GraphQL'), _react2.default.createElement(_reactstrap.Progress, { value: 55, className: 'mb-4' })), _react2.default.createElement(_reactstrap.Col, { md: '6' }, _react2.default.createElement('div', { className: 'text-left mb-1' }, 'React.js'), _react2.default.createElement(_reactstrap.Progress, { value: 80, className: 'mb-4' }), _react2.default.createElement('div', { className: 'text-left mb-1' }, 'Next.js'), _react2.default.createElement(_reactstrap.Progress, { value: 65, className: 'mb-4' }), _react2.default.createElement('div', { className: 'text-left mb-1' }, 'React Native'), _react2.default.createElement(_reactstrap.Progress, { value: 75, className: 'mb-4' }), _react2.default.createElement('div', { className: 'text-left mb-1' }, 'Angular'), _react2.default.createElement(_reactstrap.Progress, { value: 70, className: 'mb-4' }), _react2.default.createElement('div', { className: 'text-left mb-1' }, 'Bootstrap 4'), _react2.default.createElement(_reactstrap.Progress, { value: 95, className: 'mb-4' }), _react2.default.createElement('div', { className: 'text-left mb-1' }, 'Node.js'), _react2.default.createElement(_reactstrap.Progress, { value: 55, className: 'mb-4' }), _react2.default.createElement('div', { className: 'text-left mb-1' }, 'Design UI&UX'), _react2.default.createElement(_reactstrap.Progress, { value: 75, className: 'mb-4' }))), _react2.default.createElement(StyledTitle, null, 'Experi\xEAncia Profissional:'), _react2.default.createElement(_reactstrap.Row, { className: 'mt-5 mb-4' }, _react2.default.createElement(_reactstrap.Col, { md: '12', className: 'mb-4' }, _react2.default.createElement(StyledExperienceTitle, null, 'RTP - R\xE1dio Televis\xE3o Portuguesa'), _react2.default.createElement(StyledExperienceSubtitle, null, 'Est\xE1gio Curricular - T\xE9cnico de Eletr\xF3nica e Telecomunica\xE7\xF5es')), _react2.default.createElement(_reactstrap.Col, { md: '12', className: 'mb-4' }, _react2.default.createElement(StyledExperienceTitle, null, 'Glintt'), _react2.default.createElement(StyledExperienceSubtitle, null, 'Frontend Developer')), _react2.default.createElement(_reactstrap.Col, { md: '12', className: 'mb-4' }, _react2.default.createElement(StyledExperienceTitle, null, 'Bevolun.com - Parceria com C\xE1ritas e Santa Casa da Misericordia de Aveiro'), _react2.default.createElement(StyledExperienceSubtitle, null, 'Full Stack Web Developer')), _react2.default.createElement(_reactstrap.Col, { md: '12', className: 'mb-4' }, _react2.default.createElement(StyledExperienceTitle, null, 'bia.pt'), _react2.default.createElement(StyledExperienceSubtitle, null, 'Frontend Developer')))));
    }
  }]);

  return About;
}(_react2.default.Component);

exports.default = About;


var StyledText = _styledComponents2.default.div(_templateObject);

var StyledImage = _styledComponents2.default.img(_templateObject2);

var StyledStrong = _styledComponents2.default.span(_templateObject3);

var StyledTitle = _styledComponents2.default.span(_templateObject4);

var StyledExperienceTitle = _styledComponents2.default.div(_templateObject5);

var StyledExperienceSubtitle = _styledComponents2.default.div(_templateObject6);
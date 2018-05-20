'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StyledSocial = exports.StyledFooter = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width:100%;\n  text-align: center;\n  color: #FFF;\n  padding: 15px;\n  background: #7474BF;  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #348AC7, #7474BF);  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #348AC7, #7474BF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n'], ['\n  width:100%;\n  text-align: center;\n  color: #FFF;\n  padding: 15px;\n  background: #7474BF;  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #348AC7, #7474BF);  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #348AC7, #7474BF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 12px;\n  > a { \n    margin: 0 5px;\n    cursor: pointer;\n    color: white;\n    text-decoration: none;\n    &:hover {\n     font-size:14px;\n     color: white;\n    text-decoration: none;\n    }\n  };\n  '], ['\n  font-size: 12px;\n  > a { \n    margin: 0 5px;\n    cursor: pointer;\n    color: white;\n    text-decoration: none;\n    &:hover {\n     font-size:14px;\n     color: white;\n    text-decoration: none;\n    }\n  };\n  ']);

var StyledFooter = _styledComponents2.default.div(_templateObject);

var StyledSocial = _styledComponents2.default.div(_templateObject2);

exports.StyledFooter = StyledFooter;
exports.StyledSocial = StyledSocial;
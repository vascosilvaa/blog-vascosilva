'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StyledHeaderSubtitle = exports.StyledHeaderTitle = exports.StyledHeader = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background: #7474BF;  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #348AC7, #7474BF);  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #348AC7, #7474BF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: white;\n  text-align: center;\n'], ['\n  background: #7474BF;  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #348AC7, #7474BF);  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #348AC7, #7474BF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: white;\n  text-align: center;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: 500;\n  font-size: 60px;\n  line-height: 50px;\n  letter-spacing: 5px;\n  padding: 120px;\n'], ['\n  font-weight: 500;\n  font-size: 60px;\n  line-height: 50px;\n  letter-spacing: 5px;\n  padding: 120px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n font-weight: 300;\n margin-top:10px;\n font-size: 25px;\n letter-spacing: 2px;\n'], ['\n font-weight: 300;\n margin-top:10px;\n font-size: 25px;\n letter-spacing: 2px;\n']);

var StyledHeader = _styledComponents2.default.div(_templateObject);
var StyledHeaderTitle = _styledComponents2.default.div(_templateObject2);
var StyledHeaderSubtitle = _styledComponents2.default.div(_templateObject3);
exports.StyledHeader = StyledHeader;
exports.StyledHeaderTitle = StyledHeaderTitle;
exports.StyledHeaderSubtitle = StyledHeaderSubtitle;
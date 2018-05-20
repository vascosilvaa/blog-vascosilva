'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StyledCardSocial = exports.StyledCardSubtitle = exports.StyledCardTitle = exports.StyledCardDescription = exports.StyledCardImage = exports.StyledCard = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n\n  &:hover {\n    box-shadow: 0 0px 10px rgba(0,0,0,0.25), 0 3px 3px rgba(0,0,0,0.22);\n  }\n'], ['\n    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n\n  &:hover {\n    box-shadow: 0 0px 10px rgba(0,0,0,0.25), 0 3px 3px rgba(0,0,0,0.22);\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  background: url(', ');\n  height: 200px;\n  background-size: cover;\n'], ['\n  background: url(', ');\n  height: 200px;\n  background-size: cover;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    padding: 30px 20px;\n    text-align:center;\n'], ['\n    padding: 30px 20px;\n    text-align:center;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    font-size: 15px;\n    line-height: 22px;\n    font-style: normal;\n    font-weight: 600;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    color: #222222;\n'], ['\n    font-size: 15px;\n    line-height: 22px;\n    font-style: normal;\n    font-weight: 600;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    color: #222222;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    color: #8d8d8d;\n    font-size: 14px;\n    line-height: 25px;\n    font-style: normal;\n    font-weight: 400;\n'], ['\n    color: #8d8d8d;\n    font-size: 14px;\n    line-height: 25px;\n    font-style: normal;\n    font-weight: 400;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  margin-top: 30px;\n  align-items:center;\n  justify-content:center;\n  > .fab { \n    color: #8d8d8d;\n    margin: 0 10px;\n    &:hover {\n     color: #5385C1;\n    }\n  }; \n'], ['\n  display: flex;\n  margin-top: 30px;\n  align-items:center;\n  justify-content:center;\n  > .fab { \n    color: #8d8d8d;\n    margin: 0 10px;\n    &:hover {\n     color: #5385C1;\n    }\n  }; \n']);

var StyledCard = _styledComponents2.default.div(_templateObject);

var StyledCardImage = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.img;
});
var StyledCardDescription = _styledComponents2.default.div(_templateObject3);
var StyledCardTitle = _styledComponents2.default.div(_templateObject4);

var StyledCardSubtitle = _styledComponents2.default.div(_templateObject5);

var StyledCardSocial = _styledComponents2.default.div(_templateObject6);

exports.StyledCard = StyledCard;
exports.StyledCardImage = StyledCardImage;
exports.StyledCardDescription = StyledCardDescription;
exports.StyledCardTitle = StyledCardTitle;
exports.StyledCardSubtitle = StyledCardSubtitle;
exports.StyledCardSocial = StyledCardSocial;
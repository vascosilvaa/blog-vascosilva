"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _footerComponents = require("./footerComponents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(_footerComponents.StyledFooter, null, _react2.default.createElement("div", null, "vascosilvaa@gmail.com"), _react2.default.createElement(_footerComponents.StyledSocial, null, _react2.default.createElement("a", { href: "http://www.facebook.com/vascorafaelsilva", target: "blank" }, _react2.default.createElement("i", { className: "fab fa-facebook-f" })), _react2.default.createElement("a", { href: "http://twitter.com/vascorsilva", target: "blank" }, _react2.default.createElement("i", { className: "fab fa-twitter" })), _react2.default.createElement("a", { href: "http://www.linkedin.com/in/vasco-silva-83a003109/", target: "blank" }, _react2.default.createElement("i", { className: "fab fa-linkedin" })), _react2.default.createElement("a", { href: "http://www.instagram.com/vascorafaelsilva/", target: "blank" }, _react2.default.createElement("i", { className: "fab fa-instagram" })), _react2.default.createElement("a", { href: "https://github.com/vascosilvaa", target: "blank" }, _react2.default.createElement("i", { className: "fab fa-github" }))));
};

exports.default = Footer;
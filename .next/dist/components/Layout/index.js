'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactstrap = require('reactstrap');

var _index3 = require('../../css/index.scss');

var _index4 = _interopRequireDefault(_index3);

var _layoutComponents = require('./layoutComponents');

var _Footer = require('../Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Fonts = require('../../utils/Fonts');

var _Fonts2 = _interopRequireDefault(_Fonts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _Fonts2.default)();
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { charSet: 'UTF-8' }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }), _react2.default.createElement('title', null, this.props.title || 'Vasco Silva - Blog'), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index4.default } }), _react2.default.createElement('script', { src: 'https://cdn.polyfill.io/v2/polyfill.min.js' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css', integrity: 'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp', crossorigin: 'anonymous' })), _react2.default.createElement(_layoutComponents.StyledHeader, null, _react2.default.createElement(_reactstrap.Navbar, { expand: 'md' }, _react2.default.createElement(_reactstrap.Container, null, _react2.default.createElement(_reactstrap.NavbarBrand, null, _react2.default.createElement(_link2.default, { href: '/' }, 'vascosilvaa.pt')), _react2.default.createElement(_reactstrap.NavbarToggler, { onClick: this.toggle }), _react2.default.createElement(_reactstrap.Collapse, { isOpen: this.state.isOpen, navbar: true }, _react2.default.createElement(_reactstrap.Nav, { className: 'ml-auto', navbar: true }, _react2.default.createElement(_reactstrap.NavItem, null, _react2.default.createElement(_reactstrap.NavLink, null, _react2.default.createElement(_link2.default, { href: '/' }, 'Blog'))), _react2.default.createElement(_reactstrap.NavItem, null, _react2.default.createElement(_reactstrap.NavLink, null, _react2.default.createElement(_link2.default, { href: '/about/' }, 'Sobre mim'))))))), _react2.default.createElement(_layoutComponents.StyledHeaderTitle, null, this.props.title, _react2.default.createElement(_layoutComponents.StyledHeaderSubtitle, null, this.props.subtitle))), _react2.default.createElement(_reactstrap.Container, { className: 'p-5' }, this.props.children), _react2.default.createElement(_Footer2.default, null));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
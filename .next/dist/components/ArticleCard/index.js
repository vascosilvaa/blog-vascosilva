'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _articleCardComponents = require('./articleCardComponents');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleCard = function ArticleCard(_ref) {
  var id = _ref.id,
      title = _ref.title,
      subtitle = _ref.subtitle,
      img = _ref.img;

  return _react2.default.createElement(_link2.default, { href: '/article/' + id }, _react2.default.createElement(_articleCardComponents.StyledCard, { className: 'mb-5' }, _react2.default.createElement(_articleCardComponents.StyledCardImage, { img: img }), _react2.default.createElement(_articleCardComponents.StyledCardDescription, null, _react2.default.createElement(_articleCardComponents.StyledCardTitle, null, title), _react2.default.createElement(_articleCardComponents.StyledCardSubtitle, { className: 'mt-4' }, subtitle), _react2.default.createElement(_articleCardComponents.StyledCardSocial, null, _react2.default.createElement('i', { className: 'fab fa-facebook-f' }), _react2.default.createElement('i', { className: 'fab fa-twitter' }), _react2.default.createElement('i', { className: 'fab fa-google-plus-g' })))));
};

exports.default = ArticleCard;
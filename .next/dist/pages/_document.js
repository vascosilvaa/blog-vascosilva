'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/vascosilva/Desktop/blog-vascosilva/pages/_document.js?entry';


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
      return _react2.default.createElement('html', { lang: this.props.__NEXT_DATA__.props.lang || 'en', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, this.props.customValue, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _document2.default.getInitialProps(ctx);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return DefaultDocument;
}(_document2.default);

exports.default = DefaultDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsIkRlZmF1bHREb2N1bWVudCIsInByb3BzIiwiX19ORVhUX0RBVEFfXyIsImxhbmciLCJjdXN0b21WYWx1ZSIsImN0eCIsImdldEluaXRpYWxQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVksQUFBTSxBQUFNOzs7Ozs7Ozs7SSxBQUVWOzs7Ozs7Ozs7Ozs2QkFLVixBQUNQO0FBSUE7Ozs7NkJBQ0UsY0FBQSxVQUFNLE1BQU0sS0FBQSxBQUFLLE1BQUwsQUFBVyxjQUFYLEFBQXlCLE1BQXpCLEFBQStCLFFBQTNDLEFBQW1EO29CQUFuRDtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFERixBQUNFLEFBRUE7QUFGQTtBQUFBLDBCQUVBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQURSLEFBQ2MsQUFDWiw2QkFBQSxBQUFDOztvQkFBRDtzQkFGRixBQUVFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQVBOLEFBQ0UsQUFHRSxBQUdFLEFBSVA7QUFKTztBQUFBOzs7OzsyR0FoQnNCLEE7Ozs7Ozt1QkFDZixtQkFBQSxBQUFTLGdCQUFULEFBQXlCLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGRyxBOztrQkFBeEIsQSIsImZpbGUiOiJfZG9jdW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Zhc2Nvc2lsdmEvRGVza3RvcC9ibG9nLXZhc2Nvc2lsdmEifQ==
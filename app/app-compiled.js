'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _commentBox = require('./comment-box');

var _commentBox2 = _interopRequireDefault(_commentBox);

var data = [{ author: 'Pete Hunt', text: 'This is one comment' }, { author: 'Jordan Walke', text: 'This is *another* comment' }];

var CommentBoxApp = (function (_React$Component) {
    function CommentBoxApp() {
        _classCallCheck(this, CommentBoxApp);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(CommentBoxApp, _React$Component);

    _createClass(CommentBoxApp, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(_commentBox2['default'], { url: 'comments.json', pollInterval: 2000 });
        }
    }]);

    return CommentBoxApp;
})(_react2['default'].Component);

_react2['default'].render(_react2['default'].createElement(CommentBoxApp, null), document.getElementById('content'));

//# sourceMappingURL=app-compiled.js.map
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shared = require('./shared');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NativeIniticon = function (_Component) {
  _inherits(NativeIniticon, _Component);

  function NativeIniticon() {
    _classCallCheck(this, NativeIniticon);

    return _possibleConstructorReturn(this, (NativeIniticon.__proto__ || Object.getPrototypeOf(NativeIniticon)).apply(this, arguments));
  }

  _createClass(NativeIniticon, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      return _react2.default.createElement(
        _reactNative.View,
        { style: [styles.icon, {
            backgroundColor: (0, _shared.getBackgroundColor)(props),
            height: this.props.size,
            width: this.props.size,
            borderRadius: this.props.size / 2
          }, this.props.style]
        },
        _react2.default.createElement(
          _reactNative.Text,
          { style: [styles.text, { fontSize: (0, _shared.getFontSize)(props) }] },
          (0, _shared.getInitials)(props)
        )
      );
    }
  }]);

  return NativeIniticon;
}(_react.Component);

;

NativeIniticon.propTypes = {
  text: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.any.isRequired,
  seed: _propTypes2.default.number,
  color: _propTypes2.default.any,
  single: _propTypes2.default.bool,
  saturation: _propTypes2.default.string,
  brightness: _propTypes2.default.string
};

NativeIniticon.defaultProps = _shared.defaultProps;

var styles = _reactNative.StyleSheet.create({
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff'
  }
});

module.exports = NativeIniticon;
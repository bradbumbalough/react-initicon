'use strict';

var React = require('react');
var shared = require('./shared');

var Initicon = React.createClass({
  displayName: 'Initicon',

  propTypes: {
    text: React.PropTypes.string.isRequired,
    size: React.PropTypes.any.isRequired,
    seed: React.PropTypes.number,
    color: React.PropTypes.any,
    single: React.PropTypes.bool,
    saturation: React.PropTypes.string,
    brightness: React.PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return shared.defaultProps;
  },
  render: function render() {
    if (this.props.color) {
      var backgroundColor = this.props.color;
    } else {
      var backgroundColor = shared.getBackgroundColor(this.props.seed, this.props.saturation, this.props.brightness);
    }
    var fontSize = this.props.single ? this.props.size / 1.7 : (this.props.size - 5) / 2;
    return React.createElement(
      'div',
      { style: { backgroundColor: backgroundColor,
          height: this.props.size + "px",
          width: this.props.size + "px",
          fontSize: fontSize + "px",
          lineHeight: this.props.size + "px",
          borderRadius: '50%',
          display: 'inline-block',
          textAlign: 'center',
          color: '#ffffff' } },
      shared.getInitials(this.props.text, this.props.single)
    );
  }
});

module.exports = Initicon;

import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import Gradient from './Gradient';

class HueGradient extends PureComponent {
  getStepColor = i => {
    console.log(i);
    if (i < 0) {
      return tinycolor({ s: 0, l: 0, h: 0 }).toHslString();
    }
    if (i > 359) {
      return tinycolor({ s: 1, l: 1, h: 0 }).toHslString();
    }

    return tinycolor({ s: 1, l: 0.5, h: i }).toHslString();
  }

  render() {
    const { style, gradientSteps } = this.props;
    return (
      <Gradient
        style={style}
        gradientSteps={gradientSteps}
        getStepColor={this.getStepColor}
        maximumValue={364}
      />
    );
  }
}

export default HueGradient;

HueGradient.propTypes = {
  gradientSteps: PropTypes.number.isRequired
};

import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import GradientSlider from './GradientSlider';
import HueGradient from '../gradients/HueGradient';
import tinycolor from 'tinycolor2';

const getStepColor = (i) => {
  if (i < 0) {
    return tinycolor({ s: 0, l: 0, h: 0 }).toHslString();
  }
  if (i > 359) {
    return tinycolor({ s: 1, l: 1, h: 0 }).toHslString();
  }

  return tinycolor({ s: 1, l: 0.5, h: i }).toHslString();
};


const HueSlider = ({ style, value, onValueChange, gradientSteps, trackClickable, onSlidingComplete }) => {
  return (
    <GradientSlider
      gradient={<HueGradient gradientSteps={gradientSteps} />}
      style={style}
      step={1}
      maximumValue={364}
      value={value}
      thumbTintColor={getStepColor(value)}
      onValueChange={onValueChange}
      trackClickable={trackClickable}
      onSlidingComplete={onSlidingComplete}
    />
  );
};

export default HueSlider;

HueSlider.propTypes = {
  value: PropTypes.number.isRequired,
  onValueChange: PropTypes.func.isRequired,
  gradientSteps: PropTypes.number.isRequired
};

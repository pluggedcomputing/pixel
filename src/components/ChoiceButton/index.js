import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

import { colors, general } from '../../styles';
import styles from './styles';

const ChoiceButton = props => {
  const { correct, onPress, text, step, light } = props;
  const [ backgroundColor, setBackgroundColor] = useState(colors.colorPrimary);
  const [ color, setTextColor] = useState(colors.colorTextSecondary)

  useEffect(() => {
    if (light) {
      setBackgroundColor(colors.colorSecondaryLight);
      setTextColor(colors.colorTextPrimary);
    }
  }, [step]);

  function onPressButton() {
    if (correct) {
      setBackgroundColor(colors.colorSucess)
    } else {
      setBackgroundColor(colors.colorError)
    }
    setTimeout(() => onPress(), 350);
  }

  return (
    <View {...props} style={styles.container}>
      <TouchableOpacity style={[styles.button, { backgroundColor }, general.defaultShadow]} onPress={onPressButton}>
        <Text style={[styles.text, {color}]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

ChoiceButton.propTypes = {
  correct: PropTypes.bool,
  light: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
};


ChoiceButton.defaultProps = {
  correct: false,
  light: false
}

export default ChoiceButton;